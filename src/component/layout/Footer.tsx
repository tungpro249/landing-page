export function Footer() {
  return (
    <footer className="bg-[#2E7C39] dark:bg-gray-900">
      <div className="mx-auto w-full mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 px-10 py-6 lg:py-8 md:grid-cols-3 text-[22px]">
          <div className="text-white">
            <h2 className="mb-6 font-semibold uppercase dark:text-white">
              Điện lạnh Anh vũ
            </h2>
            <ul className="dark:text-gray-400 font-medium">
              <li className="mb-4">
                <article>
                  <p className="mb-2 text-lg">Địa chỉ:</p>
                  <address>26 Hồng Hà - Đông Dư hạ - Gia Lâm</address>
                  <address>S2-16 VINHOME OCEANPARK</address>
                </article>
              </li>
              <li className="mb-4">
                <article>
                  <p className="mb-2 text-lg">Số điện thoại:</p>
                  <address className="text-red">0972227282</address>
                </article>
              </li>
              <li className="mb-4">
                <article>
                  <p className="mb-2 text-lg">Website:</p>
                  <address>dienlanhanhvu.com</address>
                </article>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <h2 className="mb-6 font-semibold uppercase dark:text-white">
              Dịch vụ
            </h2>
            <h6 className="dark:text-gray-400 font-medium mb-2 md:w-[400px]">
              Chuyên: Tư vấn - lắp đặt - sửa chữa - bảo dưỡng - cung cấp thiết
              bị - vật tư
            </h6>
            <ul className="dark:text-gray-400 font-medium leading-6">
              <li className="mb-4">✓ Máy giặt</li>
              <li className="mb-4">✓ Điều hòa</li>
              <li className="mb-4">✓ Tủ lạnh</li>
              <li className="mb-4">✓ Lò vi sóng</li>
              <li className="mb-4">✓ Máy lọc nước</li>
              <li className="mb-4">✓ Bình nóng lạnh</li>
            </ul>
          </div>
          <div className="text-white">
            <h2 className="mb-6 font-semibold uppercase dark:text-white">
              Về chúng tôi
            </h2>
            <ul className="dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Giới thiệu
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-[#2E7C39] text-[#000] dark:bg-gray-700 md:flex md:items-center md:justify-center border-t border-gray-300">
          <span className="text-sm text-[#fff] dark:text-gray-300 sm:text-center">
            © 2025{" "}
            <a href="https://flowbite.com/">
              All Rights Reserved Điện lạnh Anh Vũ
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
