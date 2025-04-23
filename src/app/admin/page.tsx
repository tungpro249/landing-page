"use client";
import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setStatus("Uploading...");

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (res.ok) {
      setStatus("✅ Upload successful!");
      console.log("Uploaded image URL:", data.secure_url);
    } else {
      setStatus("❌ Upload failed");
      console.error(data);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Upload Image</h2>
      <input type="file" accept="image/*" onChange={handleChange} />
      {preview && (
        <img
          src={preview}
          alt="Preview"
          width={200}
          style={{ marginTop: 10 }}
        />
      )}
      <br />
      <button onClick={handleUpload} style={{ marginTop: 10 }}>
        Upload
      </button>
      <p>{status}</p>
    </div>
  );
}
