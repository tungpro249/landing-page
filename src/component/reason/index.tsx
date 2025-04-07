"use client";
import Image from "next/image";
import backgroundItem from "@/assets/background-item.png";

const items = [
  {
    icon: backgroundItem,
    title: "ĐIỀU HÒA",
    desc: "Dàn lạnh bị bao bọc bởi lớp bụi dày: kém mát, tốn điện",
  },
  {
    icon: backgroundItem,
    title: "ĐIỀU HÒA",
    desc: "Mùi hôi khó chịu, mất chức năng THANH LỌC không khí",
  },
  {
    icon: backgroundItem,
    title: "BÌNH LỌC NƯỚC",
    desc: "Nước bẩn ngược từ việc không vệ sinh bình chứa và lõi lọc",
  },
  {
    icon: backgroundItem,
    title: "BÌNH NÓNG LẠNH",
    desc: "Thanh magie bị ăn mòn hết dần dẫn đóng cặn canxi, gây dò điện từ thanh đốt",
  },
  {
    icon: backgroundItem,
    title: "MÁY GIẶT",
    desc: "Quần áo dễ dính ngả màu do bị làm BẨN NGƯỢC từ máy giặt ra quần áo",
  },
  {
    icon: backgroundItem,
    title: "ĐIỀU HÒA",
    desc: "Điều hoà phải gồng sức để đẩy khí lạnh qua lớp bụi dày, giảm tuổi thọ và “đình công lúc nóng nhất”",
  },
];

export function Reason() {
  return (
    <div className="relative grid grid-cols-3 gap-4 max-w-5xl mx-auto py-10">
      {" "}
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <Image src={item.icon} alt={item.title} width={60} height={60} />
          <h3 className="font-bold text-green-700 text-lg mt-2">
            {item.title}
          </h3>
          <p className="text-gray-700 text-sm mt-1">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
