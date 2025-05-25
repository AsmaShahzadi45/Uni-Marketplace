"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // ✅ Correct import for App Router

const Footer = () => {
  const router = useRouter();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "Home", href: "/" },
        { name: "Seller Dashboard", href: "Seller" },
        { name: "About us", href: "/about-us" },
        { name: "Contact us", href: "/contacts" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "All Products", href: "/all-products" },
        { name: "My Orders", href: "/my-orders" },
        { name: "Cart", href: "/cart" },
        { name: "Add Address", href: "/add-address" },
      ],
    },
    {
      title: "Get in touch",
      contact: [
        { type: "phone", value: "+92 340 000000" },
        { type: "email", value: "contact@unimarketplace.com" },
        { type: "address", value: "The Islamia University, Bahawalpur Campus" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div
              className="flex items-center gap-2 cursor-pointer mb-6"
              onClick={() => router.push("/")}
            >
              <span className="text-2xl font-bold text-orange-600">UM</span>
              <h1 className="text-xl font-medium text-gray-900">
                Uni Marketplace
              </h1>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              The premier marketplace for university students and faculty to buy,
              sell, and trade campus essentials in a trusted community environment.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook">
                <Image
                  src={assets.facebook_icon}
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </a>
              <a href="#" aria-label="Twitter">
                <Image
                  src={assets.twitter_icon}
                  alt="Twitter"
                  width={20}
                  height={20}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <Image
                  src={assets.instagram_icon}
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
              {section.links ? (
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href}>
                        <span className="text-gray-500 hover:text-orange-600 text-sm transition-colors cursor-pointer">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-2 text-sm text-gray-500">
                  {section.contact.map((item, itemIndex) => (
                    <p key={itemIndex} className="flex items-start gap-2">
                      {item.type === "phone" && (
                        <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      )}
                      {item.type === "email" && (
                        <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                      {item.type === "address" && (
                        <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                      {item.value}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Newsletter Column */}
          {/* <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Newsletter</h3>
            <p className="text-gray-500 text-sm">
              Subscribe to get updates on new products and campus deals.
            </p>
            <form className="mt-2 flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full border border-gray-300 rounded-l-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                required
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-r-md text-sm font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Uni Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
