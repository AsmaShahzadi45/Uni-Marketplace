import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { assets } from "@/assets/assets";

const HomeProducts = () => {
  const { products, router } = useAppContext();

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Popular <span className="text-orange-600">Products</span>
          </h2>
          <div className="w-20 h-1 bg-orange-600 mt-2"></div>
        </div>
        <button 
          onClick={() => router.push('/all-products')}
          className="flex items-center gap-2 mt-4 sm:mt-0 text-orange-600 hover:text-orange-700 group"
        >
          View all products
          <Image
            src={assets.arrow_right_icon_colored}
            alt=""
            width={16}
            height={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.slice(0, 10).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* Mobile View More Button */}
      <div className="mt-8 text-center lg:hidden">
        <button 
          onClick={() => router.push('/all-products')}
          className="inline-flex items-center px-8 py-3 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-lg font-medium transition-colors"
        >
          See More Products
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HomeProducts;