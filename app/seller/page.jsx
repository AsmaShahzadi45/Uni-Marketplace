'use client'
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AddProduct = () => {
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'Earphone',
    price: '',
    offerPrice: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'Earphone', 'Headphone', 'Watch', 
    'Smartphone', 'Laptop', 'Camera', 'Accessories'
  ];

  const handleImageChange = (e, index) => {
    const updatedFiles = [...files];
    updatedFiles[index] = e.target.files[0];
    setFiles(updatedFiles);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Product data:', { ...formData, images: files });
      
      // Reset form after submission
      setFiles([]);
      setFormData({
        name: '',
        description: '',
        category: 'Earphone',
        price: '',
        offerPrice: ''
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* <Navbar /> */}
      
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
              Add New Product
            </h1>
            <div className="w-20 h-1 bg-orange-600 mb-8"></div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product Images */}
              <div>
                <h2 className="text-lg font-medium text-gray-800 mb-3">Product Images</h2>
                <p className="text-sm text-gray-500 mb-4">Upload up to 4 images (First image will be the main display)</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className="relative group">
                      <label htmlFor={`image${index}`} className="block cursor-pointer">
                        <input 
                          type="file" 
                          id={`image${index}`} 
                          onChange={(e) => handleImageChange(e, index)} 
                          className="hidden" 
                          accept="image/*"
                        />
                        <div className="aspect-square border-2 border-dashed border-gray-300 rounded-lg overflow-hidden hover:border-orange-400 transition-colors">
                          {files[index] ? (
                            <Image
                              src={URL.createObjectURL(files[index])}
                              alt={`Preview ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center bg-gray-50">
                              <Image
                                src={assets.upload_area}
                                alt="Upload area"
                                width={48}
                                height={48}
                                className="opacity-50"
                              />
                            </div>
                          )}
                        </div>
                      </label>
                      {files[index] && (
                        <button
                          type="button"
                          onClick={() => {
                            const updatedFiles = [...files];
                            updatedFiles[index] = null;
                            setFiles(updatedFiles);
                          }}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                  placeholder="Enter product name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Product Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                  placeholder="Describe your product in detail"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Category and Pricing */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Price */}
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                    Price (USD) *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                      $
                    </span>
                    <input
                      id="price"
                      name="price"
                      type="number"
                      min="0"
                      step="0.01"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                      placeholder="0.00"
                      value={formData.price}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Offer Price */}
                <div>
                  <label htmlFor="offerPrice" className="block text-sm font-medium text-gray-700 mb-1">
                    Offer Price (USD) *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                      $
                    </span>
                    <input
                      id="offerPrice"
                      name="offerPrice"
                      type="number"
                      min="0"
                      step="0.01"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                      placeholder="0.00"
                      value={formData.offerPrice}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 rounded-md font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Adding Product...' : 'Add Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AddProduct;