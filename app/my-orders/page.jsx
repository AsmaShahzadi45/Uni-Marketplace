'use client';
import React, { useEffect, useState } from "react";
import { assets, orderDummyData } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";

const MyOrders = () => {
    const { currency } = useAppContext();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchOrders = async () => {
        // Simulate API call
        setTimeout(() => {
            setOrders(orderDummyData);
            setLoading(false);
        }, 800);
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            
            <main className="flex-1">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Page Header */}
                    <div className="mb-8">
                        <h1 className="text-2xl font-semibold text-gray-800">My Orders</h1>
                        <div className="w-16 h-0.5 bg-gray-300 mt-2" />
                    </div>

                    {/* Orders List */}
                    {loading ? (
                        <div className="flex justify-center py-12">
                            <Loading />
                        </div>
                    ) : (
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            {orders.length > 0 ? (
                                orders.map((order, index) => (
                                    <div key={index} className="p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
                                        <div className="flex flex-col md:flex-row gap-6">
                                            {/* Order Items */}
                                            <div className="flex-1 flex items-start gap-4">
                                                <div className="bg-gray-100 p-2 rounded-lg">
                                                    <Image
                                                        src={assets.box_icon}
                                                        alt="Order items"
                                                        width={64}
                                                        height={64}
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium text-gray-900">
                                                        {order.items.map((item) => 
                                                            `${item.product.name} (×${item.quantity})`
                                                        ).join(", ")}
                                                    </h3>
                                                    <p className="text-sm text-gray-500 mt-1">
                                                        {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Order Details */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                                                <div>
                                                    <h4 className="font-medium text-gray-700 mb-1">Shipping Address</h4>
                                                    <p className="text-gray-600">
                                                        {order.address.fullName}<br />
                                                        {order.address.area}<br />
                                                        {order.address.city}, {order.address.state}<br />
                                                        {order.address.phoneNumber}
                                                    </p>
                                                </div>

                                                <div>
                                                    <h4 className="font-medium text-gray-700 mb-1">Order Info</h4>
                                                    <p className="text-gray-600">
                                                        Method: <span className="capitalize">{order.paymentMethod || 'COD'}</span><br />
                                                        Date: {new Date(order.date).toLocaleDateString()}<br />
                                                        Status: <span className="capitalize">{order.status || 'Pending'}</span>
                                                    </p>
                                                </div>

                                                <div className="text-right">
                                                    <h4 className="font-medium text-gray-700 mb-1">Total</h4>
                                                    <p className="text-lg font-semibold text-gray-900">
                                                        {currency}{order.amount.toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-12 text-center">
                                    <p className="text-gray-500">You haven't placed any orders yet</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default MyOrders;