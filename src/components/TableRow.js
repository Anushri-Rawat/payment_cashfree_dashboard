import React from "react";

const TableRow = ({ orderId, orderDate, orderAmount, transactionFees }) => {
  return (
    <tr className="bg-white hover:bg-[#F2F2F2]">
      <td class="pl-3 pr-6 py-3 text-[#146EB4] text-sm font-normal w-1/4">
        #{orderId}
      </td>
      <td className="px-6 py-3 text-sm font-normal w-1/4">{orderDate}</td>
      <td className="px-3.5 py-3 text-sm font-normal text-right w-1/4">
        ₹{orderAmount}
      </td>
      <td className="px-6 py-3 text-sm font-normal text-right w-1/4">
        ₹{transactionFees}
      </td>
    </tr>
  );
};

export default TableRow;
