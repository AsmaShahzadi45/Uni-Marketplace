"use client"
import React from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon } from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {

  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk()

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-4 border-b border-gray-300 text-gray-700">
      {/* <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push('/')}
        src={assets.logo}
        alt="logo"
      /> */}
      {/* LOGO */}
      <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={()=> router.push("/")}>
        <span className="text-3xl font-bold text-orange-600">UM</span>
        <h1 className="hidden md:block text-xl font-medium text-gray-900 dark:text-gray-400 transition-colors">
          Uni Marketplace
        </h1>
      </div>
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">
          Marketplace
        </Link>
        <Link href="/about-us" className="hover:text-gray-900 transition">
          About Us
        </Link>
        <Link href="/contacts" className="hover:text-gray-900 transition">
          Contact
        </Link>

        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}

      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        {user ?
          <>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action label="Home" labelIcon={<HomeIcon />} onClick={() => router.push("/")} />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label="All Products" labelIcon={<CartIcon />} onClick={() => router.push("/all-products")} />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label="Cart" labelIcon={<BoxIcon />} onClick={() => router.push("/cart")} />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={() => router.push("/my-orders")} />
              </UserButton.MenuItems>
                <UserButton.MenuItems>
                <UserButton.Action label="Add New Address" labelIcon={<HomeIcon />} onClick={() => router.push("/add-address")} />
              </UserButton.MenuItems>
                <UserButton.MenuItems>
                <UserButton.Action label="About Us" labelIcon={<HomeIcon />} onClick={() => router.push("/about-us")} />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label="Contacts" labelIcon={<CartIcon />} onClick={() => router.push("/contacts")} />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label="Seller Dashboard" labelIcon={<BagIcon />} onClick={() => router.push("/seller")} />
              </UserButton.MenuItems>
            </UserButton>
          </>
          : <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>}
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
        {user ?
          <>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action label="Home" labelIcon={<HomeIcon />} onClick={() => router.push("/")} />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label="All Products" labelIcon={<CartIcon />} onClick={() => router.push("/all-products")} />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label="Cart" labelIcon={<BoxIcon />} onClick={() => router.push("/cart")} />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={() => router.push("/my-orders")} />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label="Contacts" labelIcon={<CartIcon />} onClick={() => router.push("/contacts")} />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label="Seller Dashboard" labelIcon={<BagIcon />} onClick={() => router.push("/seller")} />
              </UserButton.MenuItems>
            </UserButton>
          </>
          :
          <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>
        }
      </div>
    </nav>
  );
};

export default Navbar;