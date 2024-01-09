import React from "react";
import { FaSort, FaSearch } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";
import Table from "./Table";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
  return (
    <div className="p-3 md:p-6">
      <div className=" flex justify-between">
        <p className="text-[20px] font-medium text-[#1A181E]">Overview</p>
        <select className="flex justify-between px-2 focus:outline-none rounded text-sm">
          <option selected>Last Month</option>
          <option>Last Year</option>
        </select>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4 my-3">
        <DashboardCard title={"Online Orders"} value={"231"} />
        <DashboardCard title={"Amount Received"} value={"₹ 23,92,312.13"} />
      </div>
      <div className="text-lg font-medium text-[#1A181E] my-3">
        Transactions | This Month
      </div>
      <div className="bg-white md:p-3">
        <div className="flex justify-between">
          <div className="w-[250px] relative flex items-center text-[14px] ">
            <FaSearch className="absolute left-2 text-gray-300" />
            <input
              className="w-full focus:outline-none border border-1 py-2 pl-8 pr-2 rounded font-light"
              placeholder="Search By Order ID..."
            />
          </div>
          <div className="flex gap-4">
            <button className="rounded px-3 border flex gap-1 items-center text-gray-500">
              <span>Sort</span>
              <FaSort />
            </button>
            <button className="rounded px-3 border flex gap-1 items-center text-gray-500">
              <MdSaveAlt />
            </button>
          </div>
        </div>
        <div className="flex flex-col my-2">
          <div className="overflow-x-scroll">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
