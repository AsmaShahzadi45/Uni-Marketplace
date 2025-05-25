'use client';

import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";

const AllProducts = () => {
    const { products } = useAppContext();

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            
            <main className="flex-1">
                {/* Page Header */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col items-start">
                            <h1 className="text-3xl font-semibold text-gray-800">
                                Browse Marketplace
                            </h1>
                            <div className="w-20 h-0.5 bg-gray-300 mt-3 mb-1" />
                            <p className="text-gray-500 text-sm">
                                {products.length} items available
                            </p>
                        </div>
                    </div>
                </section>

                {/* Products Grid */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                    <div className="max-w-7xl mx-auto">
                        {products.length > 0 ? (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {products.map((product) => (
                                    <ProductCard 
                                        key={product.id} 
                                        product={product} 
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 border border-gray-100 rounded-lg">
                                <p className="text-gray-400">
                                    No products listed yet
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AllProducts;