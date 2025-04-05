export function BookConsultation() {
  return (
    <div className="bg-[#2E7C39]">
      <section className="max-w-2xl mx-auto p-6 py-30 bg-[#2E7C39]">
        <h1 className="text-[32px] text-white font-bold mb-4 text-center text-gray-800">
          Đặt lịch tư vấn
        </h1>

        <p className="bg-white p-2 rounded-md w-1/2 mx-auto my-4"></p>

        <form className="space-y-4 text-white">
          <div>
            <label className="block mb-1 text-xl text-white font-medium">
              Họ và tên
            </label>
            <input
              type="text"
              placeholder="Nhập địa chỉ"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-xl font-medium">
              Số điện thoại
            </label>
            <input
              type="text"
              placeholder="Nhập số điện thoại"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-xl font-medium">
              Dịch vụ muốn triển khai
            </label>
            <textarea
              placeholder="Nhập nội dung"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Đặt lịch
          </button>
        </form>
      </section>
    </div>
  );
}

export default BookConsultation;
