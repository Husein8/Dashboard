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
import { useNavigate } from "react-router-dom";

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

const usersData = [
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

const postsData = [
  { name: "Jun", uv: 0 },
  { name: "Jul", uv: 0 },
  { name: "Aug", uv: 0 },
  { name: "Sep", uv: 0 },
  { name: "Oct", uv: 200 },
  { name: "Nov", uv: 250 },
  { name: "Dec", uv: 150 },
  { name: "Jan", uv: 100 },
  { name: "Feb", uv: 80 },
  { name: "Mar", uv: 120 },
  { name: "Apr", uv: 50 },
  { name: "May", uv: 10 },
];

const paymentsData = [
  { name: "Jun", uv: 10 },
  { name: "Jul", uv: 10 },
  { name: "Aug", uv: 10 },
  { name: "Sep", uv: 7 },
  { name: "Oct", uv: 1100 },
  { name: "Nov", uv: 20 },
  { name: "Dec", uv: 15 },
  { name: "Jan", uv: 160 },
  { name: "Feb", uv: 120 },
  { name: "Mar", uv: 12 },
  { name: "Apr", uv: 5 },
  { name: "May", uv: 10 },
];

const reelsData = [
  { name: "Jun", uv: 0 },
  { name: "Jul", uv: 0 },
  { name: "Aug", uv: 10 },
  { name: "Sep", uv: 7 },
  { name: "Oct", uv: 10 },
  { name: "Nov", uv: 20 },
  { name: "Dec", uv: 15 },
  { name: "Jan", uv: 10 },
  { name: "Feb", uv: 12 },
  { name: "Mar", uv: 12 },
  { name: "Apr", uv: 5 },
  { name: "May", uv: 10 },
];

const storyData = [
  { name: "Jun", uv: 10 },
  { name: "Jul", uv: 10 },
  { name: "Aug", uv: 146 },
  { name: "Sep", uv: 128 },
  { name: "Oct", uv: 132 },
  { name: "Nov", uv: 80 },
  { name: "Dec", uv: 75 },
  { name: "Jan", uv: 110 },
  { name: "Feb", uv: 39 },
  { name: "Mar", uv: 12 },
  { name: "Apr", uv: 5 },
  { name: "May", uv: 10 },
];

const coinData = [
  {
    name: "Jan",
    coinPurchased: 4000,
    coinExchanged: 2400,
    coinTransfered: 2400,
  },
  {
    name: "Feb",
    coinPurchased: 4000,
    coinExchanged: 2400,
    coinTransfered: 2400,
  },
  {
    name: "Mar",
    coinPurchased: 4000,
    coinExchanged: 2400,
    coinTransfered: 2400,
  },
  {
    name: "Apr",
    coinPurchased: 4000,
    coinExchanged: 2400,
    coinTransfered: 2400,
  },
  {
    name: "May",
    coinPurchased: 4000,
    coinExchanged: 2400,
    coinTransfered: 2400,
  },
  {
    name: "Jun",
    coinPurchased: 4000,
    coinExchanged: 2400,
    coinTransfered: 2400,
  },
  {
    name: "Jul",
    coinPurchased: 4000,
    coinExchanged: 2400,
    coinTransfered: 2400,
  },
  {
    name: "Aug",
    coinPurchased: 4000,
    coinExchanged: 2400,
    coinTransfered: 2400,
  },
  {
    name: "Sep",
    coinPurchased: 4000,
    coinExchanged: 2400,
    coinTransfered: 2400,
  },
  {
    name: "Oct",
    coinPurchased: 4000,
    coinExchanged: 2400,
    coinTransfered: 2400,
  },
  {
    name: "Nov",
    coinPurchased: 4000,
    coinExchanged: 2400,
    coinTransfered: 2400,
  },
  {
    name: "Dec",
    coinPurchased: 4000,
    coinExchanged: 2400,
    coinTransfered: 2400,
  },
];

function DashboardData() {
  // const [tooltipData, setTooltipData] = useState(null);
  const [showContent, setShowContent] = useState(true);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

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
    <div className="w-full pt-10 px-3">
      <div className="flex items-center justify-between">
        <div>
          <IoMenu className="text-2xl" />
        </div>
        <div className="flex items-center gap-2 mr-10">
          {!login ? (
            <span className="cursor-pointer" onClick={handleLoginClick}>
              Login please
            </span>
          ) : (
            <>
              <FaUser className="text-xl" />
              <span className="text-xl">Admin</span>
            </>
          )}
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
      <div className="mt-5 w-full h-0.5  bg-gray-300"></div>
      <div className="ml-2">
        <div className="flex items-center justify-between pt-3  gap-3 font-normal">
          <div className="flex items-center gap-2 text-xl">
            <FaChartBar />
            <h3>Annual Reports</h3>
          </div>
          <div
            className="pr-5 text-gray-600 cursor-pointer"
            onClick={() => setShowContent((showContent) => !showContent)}
          >
            <TiMinusOutline />
          </div>
        </div>
        {showContent ? (
          <div>
            <div className="chart-container grid grid-cols-3 gap-10 pr-8">
              <div>
                <div>
                  <div className="mt-5 w-full h-1 bg-cyan-600 rounded-xl"></div>
                  <h3 className="pt-2 ml-5 text-2xl">Posts</h3>
                </div>
                <AreaChart
                  width={480}
                  height={350}
                  data={postsData}
                  margin={{ right: 30, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    tick={{ angle: -35, textAnchor: "end" }}
                    padding={{ left: 4 }}
                  />
                  <YAxis
                    ticks={[0, 50, 100, 150, 200, 250, 300]}
                    padding={{ top: 40, bottom: 10 }}
                  />
                  <Tooltip content={<CustomTooltipLineChart />} />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#4F98C3"
                    fill="#4F98C3"
                  />
                </AreaChart>
              </div>
              <div>
                <div>
                  <div className="mt-5 w-full h-1 bg-green-600 rounded-xl"></div>
                  <h3 className="pt-2 ml-3 text-2xl">Users</h3>
                </div>
                <BarChart width={480} height={350} data={usersData} margin={{}}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    tick={{ angle: -30, textAnchor: "end" }}
                  />
                  <YAxis
                    domain={[0, 700]}
                    ticks={[0, 100, 200, 300, 400, 500, 600, 700]}
                    onAnimationEnd={2000}
                    // orientation="left"
                    padding={{ top: 40, bottom: 10, left: 4 }}
                  />
                  <Tooltip
                    position={{ x: 20, y: 40 }}
                    content={<CustomTooltip />}
                  />
                  <Legend />

                  <Bar dataKey="uv" fill="#82ca9d" barSize={20} />
                </BarChart>
              </div>
              <div>
                <div>
                  <div className="mt-5 w-full h-1 bg-green-600 rounded-xl"></div>
                  <h3 className="pt-2 ml-3 text-2xl">Payments</h3>
                </div>
                <BarChart
                  width={480}
                  height={350}
                  data={paymentsData}
                  margin={{ right: 15 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    tick={{ angle: -30, textAnchor: "end" }}
                  />
                  <YAxis
                    // domain={[0, 700]}
                    ticks={[0, 250, 500, 750, 1000, 1250, 1500, 1750, 2000]}
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
              <div>
                <div>
                  <div className="mt-5 w-full h-1 bg-green-600 rounded-xl"></div>
                  <h3 className="pt-2 ml-3 text-2xl">Coin</h3>
                </div>
                <BarChart
                  width={520}
                  height={350}
                  data={coinData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    tick={{ angle: -35, textAnchor: "end" }}
                    padding={{ left: 0 }}
                  />
                  <YAxis
                    ticks={[0, 3500, 7000, 10500, 14000]}
                    padding={{ top: 20, bottom: 10 }}
                  />
                  <Tooltip content={<CustomTooltipMixBarChart />} />
                  <Legend />
                  <Bar dataKey="coinExchanged" stackId="a" fill="#D80303" />
                  <Bar dataKey="coinPurchased" stackId="a" fill="#82ca9d" />
                  <Bar dataKey="coinTransfered" fill="#FFC856" />
                  {/* <Bar dataKey="uv" fill="#ffc658" /> */}

                  {/* name: "Dec", // coinPurchased: 4000, // coinExchanged:
                  2400, // coinTransfered: 2400,  */}
                </BarChart>
              </div>
              <div>
                <div>
                  <div className="mt-5 w-full h-1 bg-cyan-600 rounded-xl"></div>
                  <h3 className="pt-2 ml-3 text-2xl">Reels</h3>
                </div>
                <AreaChart
                  width={480}
                  height={350}
                  data={reelsData}
                  margin={{ right: 30, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    tick={{ angle: -35, textAnchor: "end" }}
                    padding={{ left: 4 }}
                  />
                  <YAxis
                    ticks={[0, 5, 10, 15, 20, 25, 30, 35, 40]}
                    padding={{ top: 40, bottom: 10 }}
                  />
                  <Tooltip content={<CustomTooltipLineChart />} />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#4F98C3"
                    fill="#4F98C3"
                  />
                </AreaChart>
              </div>
              <div>
                <div>
                  <div className="mt-5 w-full h-1 bg-green-600 rounded-xl"></div>
                  <h3 className="pt-2 ml-3 text-2xl">Story</h3>
                </div>
                <BarChart
                  width={480}
                  height={350}
                  data={storyData}
                  margin={{ right: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    tick={{ angle: -30, textAnchor: "end" }}
                  />
                  <YAxis
                    // domain={[0, 700]}
                    ticks={[0, 25, 50, 75, 100, 125, 150, 175, 200]}
                    onAnimationEnd={2000}
                    // orientation="left"
                    padding={{ top: 40, bottom: 10, left: 4 }}
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
          </div>
        ) : null}
      </div>
      <TableUsersData />
    </div>
  );
}

export default DashboardData;
