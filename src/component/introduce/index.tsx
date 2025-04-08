import Image from "next/image";
import thoSuaDieuHoa from "./../../public/tho-sua-dieu-hoa-1_1.jpg";

export function Introduce() {
  return (
    <section className="bg-[#0866FF] text-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="p-6 text-center">
          <h1 className="text-3xl md:text-[48px] font-bold mb-4">
            Điện tử - Điện lạnh Anh Vũ
          </h1>

          <h3 className="text-[16px] leading-relaxed mb-6 font-semibold md:text-2xl">
            Đơn vị hàng đầu trong lĩnh vực: bảo dưỡng, sửa chữa các thiết bị
            như: tivi, tủ lạnh, máy giặt, điều hoà, máy lọc nước, bình nóng
            lạnh, kho lạnh tại nhà ở Hà Nội.
          </h3>
          
          <p className="p-2 bg-white m-3 mb-5 w-[200px] mx-auto"></p>

          <div className="overflow-hidden rounded-lg">
            <Image
              src={thoSuaDieuHoa}
              alt="Thợ sửa điều hoà"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduce;
