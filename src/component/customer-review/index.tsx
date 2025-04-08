export function CustomerReview() {
  const reviews = [
    {
      id: 1,
      name: "Đoàn Thanh Tùng",
      avatar: "https://i.pravatar.cc/100?img=1",
      content: "Sản phẩm chất lượng, giao hàng nhanh chóng, sẽ ủng hộ lần sau.",
    },
    {
      id: 2,
      name: "Phạm Tuấn Sang",
      avatar: "https://i.pravatar.cc/100?img=2",
      content: "Shop tư vấn rất nhiệt tình, sản phẩm đúng mô tả.",
    },
    {
      id: 3,
      name: "Lê Văn Hải",
      avatar: "https://i.pravatar.cc/100?img=3",
      content: "Giá hợp lý, hàng đẹp, rất đáng tiền.",
    },
  ];

  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold text-center mb-8">
        Đánh giá khách hàng
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <img
              src={review.avatar}
              alt={review.name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <h3 className="font-semibold text-lg">{review.name}</h3>
            <p className="text-gray-600 mt-2 text-sm">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
