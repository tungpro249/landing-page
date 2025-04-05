import Image from "next/image";
import thoSuaDieuHoa from "@/assets/tho-sua-dieu-hoa-1_1.jpg";

export function Introduce() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          Điện tử - Điện lạnh Anh Vũ
        </h1>

        <h3 className="text-gray-700 leading-relaxed mb-6">
          Đơn vị hàng đầu trong lĩnh vực: bảo dưỡng, sửa chữa các thiết bị như:
          tivi, tủ lạnh, máy giặt, điều hoà, máy lọc nước, bình nóng lạnh, kho
          lạnh tại nhà ở Hà Nội.
        </h3>

        <div className="overflow-hidden rounded-lg">
          <Image
            src={thoSuaDieuHoa}
            alt="Thợ sửa điều hoà"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Introduce;
