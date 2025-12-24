import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1 space-y-5">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
          আপনার শিশুকে দিন <br />
          <span className="text-[#fc4000]">সুন্দর ভবিষ্যৎ</span>
        </h1>

        <p className="text-gray-600 text-base md:text-lg max-w-md">
          আপনার শিশুর জন্য নিরাপদ ও মানসম্মত সব পণ্য কিনুন এখনই। সকল পণ্যে
          পাচ্ছেন{" "}
          <span className="font-semibold text-[#fc4000]">২৫% পর্যন্ত ছাড়</span>।
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-[#fc4000] text-white font-semibold rounded-full hover:bg-orange-600 transition">
            Explore Products
          </button>

          <button className="px-6 py-3 border border-[#fc4000] text-[#fc4000] font-semibold rounded-full hover:bg-orange-50 transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex-1">
        <Image
          alt="hero-img"
          src={"/logo/hero.png"}
          width={500}
          height={400}
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
