import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFilledTag,
} from "react-icons/ai";
import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import { BsFillCartFill, BsPerson } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { faUserFriends, FaGoogleWallet } from "react-icons/fa";
import { MdHelp, MdOutlineFavorite } from "react-icons/md";

const TopNav = () => {
  const [sideNav, setSideNav] = useState(false);
  return (
    <div className="max-w-[1520] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setSideNav(!sideNav)} className="cursor-pointer">
          <AiOutlineMenu className="text-orange-700" size={25} />
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Quick<span className="font-bold">Grub</span>
        </h1>

        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-orange-700 text-white rounded-full p-2 text-bold">
            Free
          </p>
          <p className="p-2 text-bold">Delivery</p>
        </div>
      </div>

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="search meals"
        />
      </div>

      <button className="bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} /> Cart
      </button>

      {sideNav ? (
        <div
          className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
          onClick={() => setSideNav(!sideNav)}
        ></div>
      ) : (
        ""
      )}

      <div
        className={
          sideNav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setSideNav(!sideNav)}
          size={30}
          className="bg-orange-700 text-white py-1 rounded-full absolute right-4 top-4 cursor-pointer"
        />

        <h2 className="text-2xl p-4">
          Quick <span className="text-orange-700 font-bold">Grub</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-900">
            <li className="text-xl py-4 flex">
              <BsPerson
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              <a href="#">My Account</a>
            </li>

            <li className="text-xl py-4 flex">
              <TbTruckReturn
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              <a href="#">Delivery</a>
            </li>

            <li className="text-xl py-4 flex">
              <MdOutlineFavorite
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              <a href="#">My Favorites</a>
            </li>

            <li className="text-xl py-4 flex">
              <FaGoogleWallet
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              <a href="#">My Wallet</a>
            </li>

            <li className="text-xl py-4 flex">
              <MdHelp
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              <a href="#">Help</a>
            </li>
          </ul>

          <div className="flex mt-20">
            <a href="https://www.facebook.com/">
              <FaFacebook
                className="mx-5 text-orange-700 hover:translate-y-[-3px]"
                size={20}
              />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram
                className="mx-5 text-orange-700 hover:translate-y-[-3px]"
                size={20}
              />
            </a>

            <a href="https://twitter.com/?lang=en">
              <FaTwitter
                className="mx-5 text-orange-700 hover:translate-y-[-3px]"
                size={20}
              />
            </a>

            <a href="https://github.com/">
              <FaGithub
                className="mx-5 text-orange-700 hover:translate-y-[-3px]"
                size={20}
              />
            </a>

            <a href="https://www.linkedin.com">
              <FaLinkedin
                className="mx-5 text-orange-700 hover:translate-y-[-3px]"
                size={20}
              />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;
