"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer"; 

const About = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-50 to-pink-50 min-h-screen">
      {/* Header */}
      <div className="text-center py-16">
        <h1 className="text-4xl lg:text-6xl font-semibold text-pink-600">
          Welcome to MiniCakes
        </h1>
        <p className="mt-4 text-lg lg:text-2xl text-gray-700">
          Your go-to destination for delicious and beautifully crafted mini bento cakes.
        </p>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 py-12">
        <div className="flex flex-col justify-center gap-8">
          <h2 className="text-3xl lg:text-4xl font-semibold text-pink-600">
            Crafted with Love
          </h2>
          <p className="text-lg lg:text-xl text-gray-700">
            At MiniCakes, we specialize in creating small, yet extraordinary bento cakes. Perfect for any occasion—whether it's a birthday, celebration, or just a sweet indulgence. Each cake is made with the finest ingredients and designed with attention to detail to bring joy to your taste buds and your heart.
          </p>
          <Link href="/order">
            <button className="mt-6 rounded-md bg-black text-white py-3 px-6 hover:bg-pink-600 transition-all">
              Order Your Cake
            </button>
          </Link>
        </div>
        <div className="relative">
          <Image
            src="https://static.wixstatic.com/media/02e995_7f74197ecc4c45ce8d448f3426ac160d~mv2.png"
            alt="Mini Bento Cake"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

    </div>
  );
};

export default About;
