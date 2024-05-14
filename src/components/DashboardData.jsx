import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import {
  FaArrowCircleRight,
  FaUser,
  FaGift,
  FaUsers,
  FaHistory,
  FaPlayCircle,
  FaChartBar,
} from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { IoVideocamOutline } from "react-icons/io5";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const iconsData = [
  {
    icon: <AiOutlineUser className="text-white text-5xl" />,
    title: "USERS",
    count: "10",
    moreInfo: "More info",
    color: "bg-blue-500",
  },
  {
    icon: <IoVideocamOutline className="text-white text-5xl" />,
    title: "POSTS",
    count: "0",
    moreInfo: "More info",
    color: "bg-red-600",
  },
  {
    icon: <FaPlayCircle className="text-white text-5xl" />,
    title: "REELS",
    count: "0",
    moreInfo: "More info",
    color: "bg-green-700",
  },
  {
    icon: <FaUsers className="text-white text-5xl" />,
    title: "CLUBS",
    count: "0",
    moreInfo: "More info",
    color: "bg-yellow-500",
  },
  {
    icon: <FaGift className="text-white text-5xl" />,
    title: "COUPONS",
    count: "0",
    moreInfo: "More info",
    color: "bg-blue-500",
  },
  {
    icon: <FaHistory className="text-white text-5xl" />,
    title: "STORY",
    count: "0",
    moreInfo: "More info",
    color: "bg-red-600",
  },
];

const data = [
  {
    name: "Jun",
    uv: 10,
    amt: 2400,
  },
  {
    name: "Jul",
    uv: 10,
    amt: 2210,
  },
  {
    name: "Aug",
    uv: 10,
    amt: 2290,
  },
  {
    name: "Sep",
    uv: 10,
    amt: 2000,
  },
  {
    name: "Oct",
    uv: 647,
    amt: 2181,
  },
  {
    name: "Nov",
    uv: 405,
    amt: 2500,
  },
  {
    name: "Dec",
    uv: 568,
    amt: 2100,
  },
  {
    name: "Jan",
    uv: 333,
    amt: 2100,
  },
  {
    name: "Feb",
    uv: 226,
    amt: 2100,
  },
  {
    name: "Mar",
    uv: 421,
    amt: 2100,
  },
  {
    name: "Apr",
    uv: 227,
    amt: 2100,
  },
  {
    name: "May",
    uv: 99,
    amt: 2100,
  },
];

function DashboardData() {
  const [tooltipData, setTooltipData] = useState(null);

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
  return (
    <div className="pt-10 px-3">
      <div className="flex items-center justify-between">
        <div>
          <IoMenu className="text-2xl" />
        </div>
        <div className="flex items-center gap-2 mr-10">
          <FaUser className="text-xl" />
          <span className="text-xl">Admin</span>
        </div>
      </div>
      <h1 className="pt-6 text-3xl">Dashboard</h1>
      <div className="grid grid-cols-4 gap-4 pt-8">
        {iconsData.map((item, index) => (
          <div key={index} className={`flex pt-5`}>
            <div
              className={`container-picture flex items-center justify-center text-5xl w-24 h-24 ${item.color} text-white mr-4`}
            >
              {item.icon}
            </div>
            <div className="flex flex-col">
              <span className="">{item.title}</span>
              <span className="">{item.count}</span>
              <div className="flex items-center text-blue-500 gap-1">
                <span className="">{item.moreInfo}</span>
                <FaArrowCircleRight />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 w-full h-3  bg-gray-300"></div>
      <div className="ml-2">
        <div className="flex items-center pt-3  text-xl gap-3 font-normal">
          <FaChartBar />
          <h3>Annual Reports</h3>
        </div>
        <div>
          <div className="chart-container grid grid-cols-3">
            <div>
              <div>
                <div className="mt-5 w-full h-1 bg-cyan-600 rounded-xl"></div>
                <h3 className="pt-2 ml-3 text-2xl">Users</h3>
              </div>
              <BarChart
                width={480}
                height={350}
                data={data}
                margin={{ right: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis
                  domain={[0, 700]}
                  ticks={[0, 100, 200, 300, 400, 500, 600, 700]}
                  onAnimationEnd={2000}
                  // orientation="left"
                  padding={{ top: 40, bottom: 10 }}
                />
                <Tooltip
                  position={{ x: 20, y: 40 }}
                  content={<CustomTooltip />}
                />
                <Legend />

                <Bar dataKey="uv" fill="#82ca9d" barSize={20} />
              </BarChart>
            </div>
          </div>
          {/* </ResponsiveContainer> */}
        </div>
      </div>
    </div>
  );
}

export default DashboardData;
