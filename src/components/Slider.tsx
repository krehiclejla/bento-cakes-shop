"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Sweet Bento Cakes for Every Occasion",
    description: "Indulge in our delightful mini bento cakes – perfect for celebrations, gifts, or just because!",
    img: "https://static.wixstatic.com/media/02e995_48dab2d2a48241508458f995d99365a2~mv2.png",
    url: "/order",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50"
  },
  {
    id: 2,
    title: "Tiny Cakes, Big Smiles",
    description: "Our mini bento cakes are crafted with love, perfect for bringing joy to any moment. Order yours today!",
    img: "https://static.wixstatic.com/media/02e995_62d9dd26e026456a818bbb2fa8db87d5~mv2.png",
    url: "/order",
    bg: "bg-gradient-to-r from-pink-50 to-purple-50"
  },
  {
    id: 3,
    title: "Customize Your Mini Masterpiece",
    description: "Create your dream mini bento cake! Choose flavors, designs, and toppings to match your style.",
    img: "https://static.wixstatic.com/media/02e995_eb6050739c5340b1b525a79cfb198d87~mv2.png",
    url: "/order",
    bg: "bg-gradient-to-r from-purple-50 to-blue-50"
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
     const interval = setInterval(() => {
       setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
     }, 3000);

     return () => clearInterval(interval);
   }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-4 ">
                  ORDER NOW
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
