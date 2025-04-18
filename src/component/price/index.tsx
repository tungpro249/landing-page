"use client";

export const Price = () => {
  const data = [
    {
      name: "Máy giặt cửa trên (lồng đứng)",
      descriptions:
        "Giúp quần áo luôn sạch sẽ, tiết kiệm điện và tăng tuổi thọ thiết bị",
      price: "200.000 ~ 300.000",
      image:
        "https://w.ladicdn.com/s550x550/5eba1da36b12637b2bd3f2e5/226639_0_aftwts-20230707060154-wnqdk.png",
    },
    {
      name: "Máy giặt cửa trước (lồng ngang)",
      descriptions:
        "Giúp quần áo luôn sạch sẽ, tiết kiệm điện và tăng tuổi thọ thiết bị",
      price: "200.000 ~ 300.000",
      image:
        "https://w.ladicdn.com/s550x550/5eba1da36b12637b2bd3f2e5/226639_0_aftwts-20230707060154-wnqdk.png",
    },
    {
      name: "Điều hoà treo tường",
      descriptions:
        "Giúp làm mát nhanh chóng, điện năng tiêu hao thấp và thoát nước tốt",
      price: "200.000 ~ 500.000",
      image:
        "https://w.ladicdn.com/s550x550/5eba1da36b12637b2bd3f2e5/226639_0_aftwts-20230707060154-wnqdk.png",
    },
    {
      name: "Máy giặt cửa trên (lồng đứng)",
      descriptions:
        "Giúp quần áo luôn sạch sẽ, tiết kiệm điện và tăng tuổi thọ thiết bị",
      price: "200.000 ~ 300.000",
      image:
        "https://w.ladicdn.com/s550x550/5eba1da36b12637b2bd3f2e5/226639_0_aftwts-20230707060154-wnqdk.png",
    },
    {
      name: "Máy giặt cửa trước (lồng ngang)",
      descriptions:
        "Giúp quần áo luôn sạch sẽ, tiết kiệm điện và tăng tuổi thọ thiết bị",
      price: "200.000 ~ 300.000",
      image:
        "https://w.ladicdn.com/s550x550/5eba1da36b12637b2bd3f2e5/226639_0_aftwts-20230707060154-wnqdk.png",
    },
    {
      name: "Điều hoà âm trần",
      descriptions:
        "Giúp làm mát nhanh chóng, điện năng tiêu hao thấp và thoát nước tốt",
      price: "200.000 ~ 700.000",
      image:
        "https://w.ladicdn.com/s550x550/5eba1da36b12637b2bd3f2e5/226639_0_aftwts-20230707060154-wnqdk.png",
    },
  ];
  return (
    <div className="p-10 bg-gray-50" id="price">
    <h1 className="text-center text-2xl font-bold mb-[120px]">
      Báo giá bảo dưỡng máy giặt - điều hoà
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="border-2 mb-[100px] border-green-500 border-dashed rounded-lg p-4 bg-white flex flex-col justify-between"
        >
          <img
            src={item.image}
            alt={item.name}
            className="mx-auto mb-4 mt-[-100px] w-40 h-40 object-contain"
          />
          <h3 className="text-green-600 font-bold text-lg text-center">
            {item.name.toUpperCase()}
          </h3>
          <p className="text-center text-gray-500 text-sm mb-2">
            {item.descriptions}
          </p>
          <h4 className="text-center font-bold">GIÁ CẢ</h4>
          <p className="text-center text-red-600 font-extrabold text-2xl mb-4">
            {item.price}
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Số điện thoại"
              className="border rounded px-2 py-2 flex-1 text-sm"
            />
            <button className="bg-green-600 text-white font-bold text-sm px-4 py-2 rounded">
              ĐẶT LỊCH NGAY
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};
