'use client'
import { assets } from "@/assets/assets";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

const AddAddress = () => {
    const [address, setAddress] = useState({
        fullName: '',
        phoneNumber: '',
        pincode: '',
        area: '',
        city: '',
        state: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Address saved:', address);
            // Reset form after submission
            setAddress({
                fullName: '',
                phoneNumber: '',
                pincode: '',
                area: '',
                city: '',
                state: '',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            
            <main className="flex-1">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        {/* Form Section */}
                        <div className="w-full lg:w-1/2">
                            <div className="max-w-md mx-auto">
                                <h1 className="text-3xl font-light text-gray-800 mb-2">
                                    Add <span className="font-semibold text-orange-600">Shipping Address</span>
                                </h1>
                                <div className="w-20 h-1 bg-orange-600 mb-8"></div>

                                <form onSubmit={onSubmitHandler} className="space-y-5">
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name
                                        </label>
                                        <input
                                            id="fullName"
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                            placeholder="Enter your full name"
                                            value={address.fullName}
                                            onChange={(e) => setAddress({...address, fullName: e.target.value})}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            id="phoneNumber"
                                            type="tel"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                            placeholder="Enter phone number"
                                            value={address.phoneNumber}
                                            onChange={(e) => setAddress({...address, phoneNumber: e.target.value})}
                                            required
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                                                Pin Code
                                            </label>
                                            <input
                                                id="pincode"
                                                type="text"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                                placeholder="Enter pincode"
                                                value={address.pincode}
                                                onChange={(e) => setAddress({...address, pincode: e.target.value})}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
                                            Street Address
                                        </label>
                                        <textarea
                                            id="area"
                                            rows={3}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                            placeholder="House no., Building, Street, Area"
                                            value={address.area}
                                            onChange={(e) => setAddress({...address, area: e.target.value})}
                                            required
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                                                City
                                            </label>
                                            <input
                                                id="city"
                                                type="text"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                                placeholder="Enter city"
                                                value={address.city}
                                                onChange={(e) => setAddress({...address, city: e.target.value})}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                                                State
                                            </label>
                                            <input
                                                id="state"
                                                type="text"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                                placeholder="Enter state"
                                                value={address.state}
                                                onChange={(e) => setAddress({...address, state: e.target.value})}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full py-3 px-4 rounded-md font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {isSubmitting ? 'Saving...' : 'Save Address'}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="hidden lg:block lg:w-1/2">
                            <div className="flex justify-center">
                                <Image
                                    src={assets.my_location_image}
                                    alt="Address illustration"
                                    width={500}
                                    height={500}
                                    className="rounded-lg shadow-md"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AddAddress;