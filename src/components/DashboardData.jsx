import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaHistory, FaPlayCircle, FaChartBar } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { IoVideocamOutline } from "react-icons/io5";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  AreaChart,
} from "recharts";
import { TiMinusOutline } from "react-icons/ti";
import TableUsersData from "./TableUsersData";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import IconsData from "./IconsData";
import Charts from "./Charts";

// const paymentData = {
//   labels: ["Paid for Adds", "Paid for Videos", "Paid for Gifts"],
//   datasets: [
//     {
//       data: [400, 240, 240],
//       backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
//       hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
//     },
//   ],
// };

// const paymentOptions = {
//   plugins: {
//     tooltip: {
//       callbacks: {
//         label: function (tooltipItem) {
//           const total = tooltipItem.dataset.data.reduce(
//             (sum, value) => sum + value,
//             0
//           );
//           const value = tooltipItem.raw;
//           const percentage = ((value / total) * 100).toFixed(2);
//           return `${tooltipItem.label}: ${percentage}%`;
//         },
//       },
//     },
//   },
// };

// const usersData = [
//   {
//     name: "Jun",
//     uv: 10,
//     amt: 2400,
//   },
//   {
//     name: "Jul",
//     uv: 10,
//     amt: 2210,
//   },
//   {
//     name: "Aug",
//     uv: 10,
//     amt: 2290,
//   },
//   {
//     name: "Sep",
//     uv: 10,
//     amt: 2000,
//   },
//   {
//     name: "Oct",
//     uv: 647,
//     amt: 2181,
//   },
//   {
//     name: "Nov",
//     uv: 405,
//     amt: 2500,
//   },
//   {
//     name: "Dec",
//     uv: 568,
//     amt: 2100,
//   },
//   {
//     name: "Jan",
//     uv: 333,
//     amt: 2100,
//   },
//   {
//     name: "Feb",
//     uv: 226,
//     amt: 2100,
//   },
//   {
//     name: "Mar",
//     uv: 421,
//     amt: 2100,
//   },
//   {
//     name: "Apr",
//     uv: 227,
//     amt: 2100,
//   },
//   {
//     name: "May",
//     uv: 99,
//     amt: 2100,
//   },
// ];

// const postsData = [
//   { name: "Jun", uv: 0 },
//   { name: "Jul", uv: 0 },
//   { name: "Aug", uv: 0 },
//   { name: "Sep", uv: 0 },
//   { name: "Oct", uv: 200 },
//   { name: "Nov", uv: 250 },
//   { name: "Dec", uv: 150 },
//   { name: "Jan", uv: 100 },
//   { name: "Feb", uv: 80 },
//   { name: "Mar", uv: 120 },
//   { name: "Apr", uv: 50 },
//   { name: "May", uv: 10 },
// ];

// const reelsData = [
//   { name: "Jun", uv: 0 },
//   { name: "Jul", uv: 0 },
//   { name: "Aug", uv: 10 },
//   { name: "Sep", uv: 7 },
//   { name: "Oct", uv: 10 },
//   { name: "Nov", uv: 20 },
//   { name: "Dec", uv: 15 },
//   { name: "Jan", uv: 10 },
//   { name: "Feb", uv: 12 },
//   { name: "Mar", uv: 12 },
//   { name: "Apr", uv: 5 },
//   { name: "May", uv: 10 },
// ];

// const storyData = [
//   { name: "Jun", uv: 10 },
//   { name: "Jul", uv: 10 },
//   { name: "Aug", uv: 146 },
//   { name: "Sep", uv: 128 },
//   { name: "Oct", uv: 132 },
//   { name: "Nov", uv: 80 },
//   { name: "Dec", uv: 75 },
//   { name: "Jan", uv: 110 },
//   { name: "Feb", uv: 39 },
//   { name: "Mar", uv: 12 },
//   { name: "Apr", uv: 5 },
//   { name: "May", uv: 10 },
// ];

// const coinData = [
//   {
//     name: "Jan",
//     coinPurchased: 4000,
//     coinExchanged: 2400,
//     coinTransfered: 2400,
//   },
//   {
//     name: "Feb",
//     coinPurchased: 4000,
//     coinExchanged: 2400,
//     coinTransfered: 2400,
//   },
//   {
//     name: "Mar",
//     coinPurchased: 4000,
//     coinExchanged: 2400,
//     coinTransfered: 2400,
//   },
//   {
//     name: "Apr",
//     coinPurchased: 4000,
//     coinExchanged: 2400,
//     coinTransfered: 2400,
//   },
//   {
//     name: "May",
//     coinPurchased: 4000,
//     coinExchanged: 2400,
//     coinTransfered: 2400,
//   },
//   {
//     name: "Jun",
//     coinPurchased: 4000,
//     coinExchanged: 2400,
//     coinTransfered: 2400,
//   },
//   {
//     name: "Jul",
//     coinPurchased: 4000,
//     coinExchanged: 2400,
//     coinTransfered: 2400,
//   },
//   {
//     name: "Aug",
//     coinPurchased: 4000,
//     coinExchanged: 2400,
//     coinTransfered: 2400,
//   },
//   {
//     name: "Sep",
//     coinPurchased: 4000,
//     coinExchanged: 2400,
//     coinTransfered: 2400,
//   },
//   {
//     name: "Oct",
//     coinPurchased: 4000,
//     coinExchanged: 2400,
//     coinTransfered: 2400,
//   },
//   {
//     name: "Nov",
//     coinPurchased: 4000,
//     coinExchanged: 2400,
//     coinTransfered: 2400,
//   },
//   {
//     name: "Dec",
//     coinPurchased: 4000,
//     coinExchanged: 2400,
//     coinTransfered: 2400,
//   },
// ];

function DashboardData({ sidebarOpen, toggleSidebar }) {
  // const [tooltipData, setTooltipData] = useState(null);
  const [showContent, setShowContent] = useState(true);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const value = payload[0].value;
      const position = { x: payload[0].cx, y: payload[0].cy - 20 }; // Adjust y offset as needed

      return (
        <div
          className="custom-tooltip flex items-center justify-center rounded-lg w-20 h-10 text-white bg-slate-800"
          style={{ left: position.x, top: position.y }}
        >
          <p className="label">{`${label} : ${value}`}</p>
        </div>
      );
    }

    return null;
  };

  const CustomTooltipLineChart = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-gray-800 text-white p-2 rounded">
          <p>{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  const CustomTooltipMixBarChart = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-gray-800 text-white p-2 rounded">
          <p>{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full pt-6 px-3">
      <IconsData sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Charts />
      {/* <TableUsersData /> */}
    </div>
  );
}

export default DashboardData;
