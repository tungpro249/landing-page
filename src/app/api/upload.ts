import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import multer from 'multer';
import cloudinary from '@/lib/cloudinary';
import { saveImageData } from '@/lib/saveImageData';

const upload = multer({ storage: multer.memoryStorage() });

const apiRoute = nextConnect<NextApiRequest, NextApiResponse>({
  onError(error, req, res) {
    res.status(501).json({ error: `Error: ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('file'));

apiRoute.post(async (req: any, res: NextApiResponse) => {
  try {
    const buffer = req.file.buffer;

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({ folder: 'next_uploads' }, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }).end(buffer);
    });

    const uploadResult = result as {
      secure_url: string;
      public_id: string;
    };

    saveImageData({
      url: uploadResult.secure_url,
      public_id: uploadResult.public_id,
      uploaded_at: new Date().toISOString(),
    });

    res.status(200).json(uploadResult);
  } catch (err) {
    res.status(500).json({ error: 'Upload failed', details: err });
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apiRoute;
