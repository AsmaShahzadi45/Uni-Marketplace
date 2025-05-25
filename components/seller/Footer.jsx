import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and Copyright */}
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <span className="font-bold text-2xl text-orange-600">UM</span>
              <span className="ml-2 font-medium text-gray-800 hidden sm:inline">Uni Marketplace</span>
            </div>
            <div className="hidden md:block h-6 w-px bg-gray-300"></div>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Uni Marketplace. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-600 transition-colors"
              aria-label="Facebook"
            >
              <Image 
                src={assets.facebook_icon} 
                alt="Facebook" 
                width={20} 
                height={20} 
                className="w-5 h-5"
              />
            </Link>
            <Link 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-600 transition-colors"
              aria-label="Twitter"
            >
              <Image 
                src={assets.twitter_icon} 
                alt="Twitter" 
                width={20} 
                height={20} 
                className="w-5 h-5"
              />
            </Link>
            <Link 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-600 transition-colors"
              aria-label="Instagram"
            >
              <Image 
                src={assets.instagram_icon} 
                alt="Instagram" 
                width={20} 
                height={20} 
                className="w-5 h-5"
              />
            </Link>
          </div>
        </div>

        {/* Additional Links (optional) */}
        <div className="mt-6 pt-6 border-t border-gray-100 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 md:gap-6 text-sm">
            <Link href="/terms" className="text-gray-500 hover:text-orange-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-gray-500 hover:text-orange-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-orange-600 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;