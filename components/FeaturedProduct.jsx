import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: assets.girl_with_headphone_image,
    title: "Unparalleled Sound",
    description: "Experience crystal-clear audio with premium headphones.",
    cta: "Shop Headphones"
  },
  {
    id: 2,
    image: assets.girl_with_earphone_image,
    title: "Stay Connected",
    description: "Compact and stylish earphones for every occasion.",
    cta: "Browse Earphones"
  },
  {
    id: 3,
    image: assets.boy_with_laptop_image,
    title: "Power in Every Pixel",
    description: "Shop the latest laptops for work, gaming, and more.",
    cta: "Explore Laptops"
  },
];

const FeaturedProduct = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Featured <span className="text-orange-600">Products</span>
        </h2>
        <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Discover our premium selection of audio and tech products
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(({ id, image, title, description, cta }) => (
          <div 
            key={id} 
            className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Product Image */}
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={id === 1} // Only prioritize first image
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {title}
                </h3>
                <p className="text-gray-200 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {description}
                </p>
                <button className="self-start flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors duration-300 translate-y-4 group-hover:translate-y-0 transition-transform-duration-700">
                  {cta}
                  <Image 
                    src={assets.redirect_icon} 
                    alt="" 
                    width={14} 
                    height={14} 
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button (Optional) */}
      <div className="text-center mt-12">
        <button className="inline-flex items-center px-6 py-3 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-lg font-medium transition-colors duration-300">
          View All Products
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default FeaturedProduct;