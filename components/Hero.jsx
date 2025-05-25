import React, { useState, useEffect, useCallback } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Hero = () => {
    const sliderData = [
        {
            id: 1,
            title: "Experience Pure Sound - Your Perfect Headphones Awaits!",
            offer: "Limited Time Offer 30% Off",
            buttonText1: "Buy now",
            buttonText2: "Find more",
            imgSrc: assets.header_headphone_image,
            bgColor: "bg-gradient-to-r from-blue-50 to-indigo-50",
        },
        {
            id: 2,
            title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
            offer: "Hurry up only few left!",
            buttonText1: "Shop Now",
            buttonText2: "Explore Deals",
            imgSrc: assets.header_playstation_image,
            bgColor: "bg-gradient-to-r from-purple-50 to-pink-50",
        },
        {
            id: 3,
            title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
            offer: "Exclusive Deal 40% Off",
            buttonText1: "Order Now",
            buttonText2: "Learn More",
            imgSrc: assets.header_macbook_image,
            bgColor: "bg-gradient-to-r from-gray-50 to-blue-50",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goToSlide = useCallback((index) => {
        setIsTransitioning(true);
        setCurrentSlide(index);
        setTimeout(() => setIsTransitioning(false), 700);
    }, []);

    const goToNextSlide = useCallback(() => {
        goToSlide((currentSlide + 1) % sliderData.length);
    }, [currentSlide, goToSlide, sliderData.length]);

    useEffect(() => {
        const interval = setInterval(goToNextSlide, 5000);
        return () => clearInterval(interval);
    }, [goToNextSlide]);

    return (
        <div className="relative w-full overflow-hidden rounded-xl">
            <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                }}
            >
                {sliderData.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`flex flex-col-reverse md:flex-row items-center justify-between ${slide.bgColor} py-8 md:px-14 px-5 min-w-full`}
                    >
                        {/* Content */}
                        <div className="md:pl-8 mt-10 md:mt-0 md:max-w-lg">
                            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium text-orange-600 bg-orange-100 rounded-full">
                                {slide.offer}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
                                {slide.title}
                            </h1>
                            <div className="flex flex-wrap gap-3 mt-6">
                                <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all">
                                    {slide.buttonText1}
                                </button>
                                <button className="group flex items-center gap-2 px-6 py-3 font-medium text-gray-700 hover:text-orange-600 transition-colors">
                                    {slide.buttonText2}
                                    <Image
                                        src={assets.arrow_icon}
                                        alt=""
                                        width={16}
                                        height={16}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative flex-1 h-64 md:h-80">
                            <Image
                                src={slide.imgSrc}
                                alt={`Slide ${index + 1}`}
                                fill
                                className="object-contain object-center"
                                priority={index === 0}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {sliderData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-3 w-3 rounded-full transition-all ${currentSlide === index
                                ? "bg-orange-600 w-6"
                                : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={() => goToSlide((currentSlide - 1 + sliderData.length) % sliderData.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10 transition-all"
                aria-label="Previous slide"
                disabled={isTransitioning}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={goToNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10 transition-all"
                aria-label="Next slide"
                disabled={isTransitioning}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

export default Hero;