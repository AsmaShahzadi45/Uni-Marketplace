'use client';
import React, { useEffect, useState } from "react";
import { assets, orderDummyData } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/seller/Footer";
import Loading from "@/components/Loading";

const Orders = () => {
    const { currency } = useAppContext();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchSellerOrders = async () => {
        // Simulate API call
        setTimeout(() => {
            setOrders(orderDummyData);
            setLoading(false);
        }, 800);
    };

    useEffect(() => {
        fetchSellerOrders();
    }, []);

    const getStatusBadge = (status) => {
        const statusClasses = {
            'Pending': 'bg-yellow-100 text-yellow-800',
            'Shipped': 'bg-blue-100 text-blue-800',
            'Delivered': 'bg-green-100 text-green-800',
            'Cancelled': 'bg-red-100 text-red-800'
        };
        return (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClasses[status] || 'bg-gray-100 text-gray-800'}`}>
                {status}
            </span>
        );
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <div className="flex-1">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Page Header */}
                    <div className="mb-8">
                        <h1 className="text-2xl font-semibold text-gray-800">Order History</h1>
                        <div className="w-20 h-1 bg-orange-600 mt-2"></div>
                        <p className="text-gray-500 mt-2">
                            {orders.length} {orders.length === 1 ? 'order' : 'orders'} found
                        </p>
                    </div>

                    {/* Orders List */}
                    {loading ? (
                        <div className="flex justify-center py-12">
                            <Loading />
                        </div>
                    ) : (
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            {orders.length > 0 ? (
                                <div className="divide-y divide-gray-200">
                                    {orders.map((order, index) => (
                                        <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                                            <div className="flex flex-col md:flex-row gap-6">
                                                {/* Order Summary */}
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
                                                            Order #{index + 1}
                                                        </h3>
                                                        <p className="text-sm text-gray-500 mt-1">
                                                            {order.items.map(item => 
                                                                `${item.product.name} (×${item.quantity})`
                                                            ).join(", ")}
                                                        </p>
                                                        <p className="text-sm text-gray-500 mt-1">
                                                            {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Order Details */}
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                                                    <div>
                                                        <h4 className="font-medium text-gray-700 mb-1">Customer</h4>
                                                        <p className="text-gray-600">
                                                            {order.address.fullName}<br />
                                                            {order.address.phoneNumber}
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <h4 className="font-medium text-gray-700 mb-1">Shipping Address</h4>
                                                        <p className="text-gray-600">
                                                            {order.address.area}<br />
                                                            {order.address.city}, {order.address.state}
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <h4 className="font-medium text-gray-700 mb-1">Order Details</h4>
                                                        <div className="flex flex-col gap-1">
                                                            <p className="text-gray-600">
                                                                {new Date(order.date).toLocaleDateString('en-US', {
                                                                    year: 'numeric',
                                                                    month: 'short',
                                                                    day: 'numeric'
                                                                })}
                                                            </p>
                                                            <p className="text-gray-600">
                                                                {getStatusBadge('Pending')}
                                                            </p>
                                                            <p className="text-lg font-semibold text-gray-900">
                                                                {currency}{order.amount.toFixed(2)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-12 text-center">
                                    <p className="text-gray-500">No orders found</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Orders;