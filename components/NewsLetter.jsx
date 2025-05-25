"use client";
import React from "react";

const NewsLetter = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
          Subscribe Now & Get 20% Off
        </h2>
        <p className="text-base text-gray-600 mb-8">
          Join our newsletter to receive the latest deals and exclusive campus offers.
        </p>

        <form className="flex flex-col sm:flex-row items-center gap-4 w-full">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-4 py-3 rounded-md sm:rounded-r-none border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm text-gray-700"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="px-6 py-3 w-full sm:w-auto bg-orange-600 hover:bg-orange-700 transition text-white text-sm font-medium rounded-md sm:rounded-l-none"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
