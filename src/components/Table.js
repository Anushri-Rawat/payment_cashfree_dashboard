import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { orderData } from "../data/orderData";
import TableRow from "./TableRow";

const Table = () => {
  return (
    <table className="min-w-full">
      <thead>
        <tr className="bg-[#F2F2F2] text-gray-600">
          <th
            scope="col"
            className="px-3 py-3 text-start text-sm font-medium w-1/4"
          >
            Order ID
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-start text-sm font-medium flex items-center gap-1"
          >
            <span>Order date</span>
            <FaCaretDown />
          </th>
          <th
            scope="col"
            className="px-3 py-3text-sm font-medium w-1/4 text-right"
          >
            Order amount
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-sm font-medium flex items-center gap-1 justify-end"
          >
            Transaction fees
            <IoIosInformationCircleOutline />
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {orderData.map((data) => (
          <TableRow
            key={data.orderId}
            orderId={data.orderId}
            orderDate={data.orderDate}
            orderAmount={data.orderAmount}
            transactionFees={data.transactionFees}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
