import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaSearch, FaCaretDown } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-center md:flex-row md:justify-between md:items-center bg-white border-b-2 px-5 py-3 w-full">
      <div className="flex flex-row">
        <div className="px-2 text-[15px] font-normal text-gray-700">
          Payments
        </div>
        <p className="px-1 text-[12px] font-normal flex items-center text-gray-700">
          <AiOutlineQuestionCircle />
          How it works?
        </p>
      </div>
      <div className="flex items-center min-w-[33%] relative">
        <FaSearch className="absolute left-2 text-gray-600" />
        <input
          className="pl-8 pr-2 py-2 text-[15px] font-normal bg-[#F2F2F2] rounded w-full focus:outline-none"
          type="search"
          placeholder="Search features,tutorials, etc"
        />
      </div>
      <div className="hidden md:flex md:flex-row md:gap-2">
        <div className="w-[40px] h-[40px] flex justify-center items-center bg-black/10 rounded-full">
          <FaBullhorn className=" text-gray-600" />
        </div>
        <div className="w-[40px] h-[40px] flex justify-center items-center bg-black/10 rounded-full">
          <FaCaretDown className=" text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
