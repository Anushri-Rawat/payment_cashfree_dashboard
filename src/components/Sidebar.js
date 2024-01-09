import React from "react";
import logo from "../image/logo.png";
import wallet from "../image/wallet.jpg";
import { FaAngleDown, FaRegFileAlt } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { PiSquaresFourLight, PiSpeakerHighLight } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbBrandGoogleAnalytics, TbDiscount2 } from "react-icons/tb";
import {
  MdOutlinePayments,
  MdPeopleOutline,
  MdOutlinePalette,
} from "react-icons/md";
import { LuMousePointer2 } from "react-icons/lu";
import { HiOutlineBolt } from "react-icons/hi2";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const sidebarCols = [
    { key: 0, icon: <GoHome />, title: "Home" },
    { key: 1, icon: <FaRegFileAlt />, title: "Orders" },
    { key: 2, icon: <PiSquaresFourLight />, title: "Product" },
    { key: 3, icon: <CiDeliveryTruck />, title: "Delivery" },
    { key: 4, icon: <PiSpeakerHighLight />, title: "Marketing" },
    { key: 5, icon: <TbBrandGoogleAnalytics />, title: "Analytics" },
    { key: 6, icon: <MdOutlinePayments />, title: "Payments" },
    { key: 7, icon: <LuMousePointer2 />, title: "Tools" },
    { key: 8, icon: <TbDiscount2 />, title: "Discounts" },
    { key: 9, icon: <MdPeopleOutline />, title: "Audience" },
    { key: 10, icon: <MdOutlinePalette />, title: "Appearance" },
    { key: 11, icon: <HiOutlineBolt />, title: "Plugins" },
  ];
  return (
    <div className="w-full md:w-[220px] h-screen flex flex-col justify-between bg-[#1E2640] text-white p-3">
      <div className="flex justify-between w-full h-[42px]">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="w-[40px] h-[40px] bg-white rounded"
          />
          <div className="flex flex-col justify-content-between ml-3">
            <p className="text-[15px] font-medium text-gray-100">Nishyan</p>
            <span className="text-[13px] cursor-pointer font-normal text-gray-300 underline underline-offset-2">
              Visit store
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center px-3 ">
          <FaAngleDown />
        </div>
      </div>
      <div className="mt-2 hidden md:block">
        {sidebarCols.map((val) => {
          return (
            <SidebarItem key={val.key} icon={val.icon} title={val.title} />
          );
        })}
      </div>
      <div className="w-full hidden md:block">
        <div className="w-full flex h-[54px] py-1 px-2 bg-[#353C53] rounded">
          <div className="flex justify-center items-center mr-2">
            <img src={wallet} alt="wallet" />
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-[13px] font-normal text-white">
              Available credits
            </p>
            <span className="text-[16px] font-medium text-white">222.40</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
