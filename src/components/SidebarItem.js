import React from "react";

const SidebarItem = ({ icon, title }) => {
  return (
    <div className="w-full flex justify-start items-center text-[14px] font-[400] py-2 rounded-sm cursor-pointer text-slate-200 hover:bg-[#353C53] ">
      <div className="w-[30px] flex justify-center text-[14px]">{icon}</div>
      <span>{title}</span>
    </div>
  );
};

export default SidebarItem;
