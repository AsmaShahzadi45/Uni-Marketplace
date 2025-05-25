'use client'
import { useState } from 'react';
import { assets } from '@/assets/assets';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <main className="flex-1">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Page Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                            Contact <span className="text-orange-600">Us</span>
                        </h1>
                        <div className="w-20 h-1 bg-orange-600 mx-auto mb-4"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Have questions or need support? Our team in Bahawalpur is ready to help you with any inquiries about the Uni Marketplace.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Contact Form */}
                        <div className="lg:w-1/2">
                            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-sm">
                                <h2 className="text-xl font-semibold text-gray-800 mb-6">Send us a message</h2>
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full py-3 px-4 rounded-md font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="lg:w-1/2">
                            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-sm h-full">
                                <h2 className="text-xl font-semibold text-gray-800 mb-6">Our Information</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 text-orange-600">
                                            <FaMapMarkerAlt size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-800">Our Location</h3>
                                            <p className="text-gray-600 mt-1">
                                                University Road, Bahawalpur<br />
                                                Punjab, Pakistan
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 text-orange-600">
                                            <FaPhone size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-800">Phone Number</h3>
                                            <p className="text-gray-600 mt-1">
                                                +92 123 4567890<br />
                                                +92 987 6543210
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 text-orange-600">
                                            <FaEnvelope size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-800">Email Address</h3>
                                            <p className="text-gray-600 mt-1">
                                                info@unimarketplace.com<br />
                                                support@unimarketplace.com
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 text-orange-600">
                                            <FaClock size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-800">Working Hours</h3>
                                            <p className="text-gray-600 mt-1">
                                                Monday - Friday: 9:00 AM - 5:00 PM<br />
                                                Saturday: 10:00 AM - 2:00 PM
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    {/* <Image
                                        src={`https://maps.googleapis.com/maps/api/staticmap?center=Islamia+University,Bahawalpur&zoom=14&size=600x300&maptype=roadmap&markers=color:red%7CIslamia+University,Bahawalpur&key=YOUR_API_KEY`}
                                        alt="Bahawalpur University Location Map"
                                        width={600}
                                        height={300}
                                        className="rounded-lg shadow-sm w-full h-auto border border-gray-200"
                                        priority
                                    /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;