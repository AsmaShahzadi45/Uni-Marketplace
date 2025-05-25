import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#E6E9F2] to-[#EFF1F7] my-16 rounded-2xl overflow-hidden">
      {/* Background Pattern (Optional) */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/path/to/pattern.svg')] bg-repeat"></div>
      </div>

      {/* Left Image */}
      <div className="md:absolute left-0 bottom-0 md:w-1/4 flex justify-center">
        <Image
          src={assets.jbl_soundbox_image}
          alt="JBL Soundbox"
          width={220}
          height={220}
          className="object-contain w-40 md:w-56 h-auto"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 py-10 md:py-14 px-6 md:px-0 text-center md:text-left">
        <div className="max-w-md mx-auto md:ml-[30%]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Level Up Your <span className="text-orange-600">Gaming Experience</span>
          </h2>
          <p className="text-gray-600 md:text-lg mb-6 max-w-[400px] mx-auto md:mx-0">
            From immersive sound to precise controls—everything you need to dominate the game
          </p>
          <button className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg">
            Shop Now
            <Image 
              src={assets.arrow_icon_white} 
              alt="Arrow icon" 
              width={16} 
              height={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>

      {/* Right Images */}
      <div className="md:absolute right-0 bottom-0 flex justify-center md:w-2/5">
        <div className="relative w-full max-w-md">
          {/* Desktop Image */}
          <Image
            src={assets.md_controller_image}
            alt="Gaming Controller"
            width={500}
            height={300}
            className="hidden md:block w-full h-auto object-contain"
            priority
          />
          {/* Mobile Image */}
          <Image
            src={assets.sm_controller_image}
            alt="Gaming Controller"
            width={300}
            height={200}
            className="md:hidden w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;