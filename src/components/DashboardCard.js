import React from "react";

const DashboardCard = ({ title, value }) => {
  return (
    <div className="w-full h-[118px] rounded bg-white flex flex-col gap-4 justify-between p-[20px]">
      <p className="text-base font-normal">{title}</p>
      <h1 className="font-medium text-[32px]">{value}</h1>
    </div>
  );
};

export default DashboardCard;
