'use client'
import React from "react";
import { assets } from "@/assets/assets";
import OrderSummary from "@/components/OrderSummary";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useAppContext } from "@/context/AppContext";

const Cart = () => {
  const { products, router, cartItems, addToCart, updateCartQuantity, getCartCount } = useAppContext();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="mb-8 border-b border-gray-200 pb-6">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Your <span className="text-orange-600">Shopping Cart</span>
            </h1>
            <p className="text-gray-500 mt-2">
              {getCartCount()} {getCartCount() === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {Object.keys(cartItems).map((itemId) => {
                      const product = products.find(product => product._id === itemId);
                      if (!product || cartItems[itemId] <= 0) return null;

                      return (
                        <tr key={itemId} className="hover:bg-gray-50 transition-colors">
                          {/* Product Details */}
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-16 w-16 bg-gray-100 rounded-md overflow-hidden p-1">
                                <Image
                                  src={product.image[0]}
                                  alt={product.name}
                                  width={64}
                                  height={64}
                                  className="w-full h-full object-contain mix-blend-multiply"
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                <button 
                                  onClick={() => updateCartQuantity(product._id, 0)}
                                  className="text-xs text-orange-600 hover:text-orange-700 mt-1"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </td>

                          {/* Price */}
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ${product.offerPrice.toFixed(2)}
                          </td>

                          {/* Quantity */}
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-2">
                              <button 
                                onClick={() => updateCartQuantity(product._id, cartItems[itemId] - 1)}
                                className="p-1 rounded-md hover:bg-gray-100 transition-colors"
                                disabled={cartItems[itemId] <= 1}
                              >
                                <Image
                                  src={assets.decrease_arrow}
                                  alt="Decrease quantity"
                                  width={16}
                                  height={16}
                                />
                              </button>
                              <input
                                type="number"
                                min="1"
                                value={cartItems[itemId]}
                                onChange={(e) => updateCartQuantity(product._id, Math.max(1, Number(e.target.value)))}
                                className="w-12 text-center border border-gray-300 rounded-md py-1 px-2 text-sm"
                              />
                              <button 
                                onClick={() => addToCart(product._id)}
                                className="p-1 rounded-md hover:bg-gray-100 transition-colors"
                              >
                                <Image
                                  src={assets.increase_arrow}
                                  alt="Increase quantity"
                                  width={16}
                                  height={16}
                                />
                              </button>
                            </div>
                          </td>

                          {/* Subtotal */}
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            ${(product.offerPrice * cartItems[itemId]).toFixed(2)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {Object.keys(cartItems).length === 0 && (
                <div className="text-center py-12 border border-gray-200 rounded-lg">
                  <p className="text-gray-500">Your cart is empty</p>
                  <button 
                    onClick={() => router.push('/all-products')}
                    className="mt-4 text-orange-600 hover:text-orange-700 flex items-center justify-center gap-2"
                  >
                    <Image
                      src={assets.arrow_right_icon_colored}
                      alt="Continue shopping"
                      width={16}
                      height={16}
                      className="transition-transform group-hover:-translate-x-1"
                    />
                    Continue Shopping
                  </button>
                </div>
              )}

              {Object.keys(cartItems).length > 0 && (
                <button 
                  onClick={() => router.push('/all-products')}
                  className="mt-6 text-orange-600 hover:text-orange-700 flex items-center gap-2 group"
                >
                  <Image
                    src={assets.arrow_right_icon_colored}
                    alt="Continue shopping"
                    width={16}
                    height={16}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                  Continue Shopping
                </button>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <OrderSummary />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;