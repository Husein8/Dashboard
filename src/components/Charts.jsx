import React, { useState } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import { FaChartBar } from "react-icons/fa";
import { HiMinus, HiPlus } from "react-icons/hi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FaUser } from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const areaPoostsData = (label) => ({
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: label,
      data: [0, 0, 18, 14, 15, 5, 41, 13, 22, 31, 14, 35, 16],
      fill: true,
      backgroundColor: "#4F98C3",
      borderColor: "#4F98C3",
      borderWidth: 1,
      pointRadius: 0,
      tension: 0.4,
    },
  ],
});

const barUsersData = (label) => ({
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: label,
      data: [6, 5, 8, 1, 5, 5, 4, 1, 2, 3, 4, 5, 6],
      fill: false,
      backgroundColor: "#00A65A",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
    },
  ],
});

const areaReelsData = (label) => ({
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: label,
      data: [0, 0, 18, 14, 15, 5, 41, 13, 22, 31, 14, 35, 16],
      fill: true,
      backgroundColor: "#4F98C3",
      borderColor: "#4F98C3",
      borderWidth: 1,
      pointRadius: 0,
      tension: 0.4,
    },
  ],
});

const pieData = {
  labels: ["paid for ads", "paid for video", "paid for gift"],
  datasets: [
    {
      data: [25, 50, 40], // Percentages or values for each segment
      backgroundColor: ["#00A65A", "#007BFF", "#FF0000"], // Green, Blue, Red
      hoverBackgroundColor: ["#00A65A", "#007BFF", "#FF0000"],
    },
  ],
};

const coinData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Coin Exchanged",
      data: [
        4000, 9000, 3500, 5000, 7000, 3000, 6500, 5500, 4000, 7000, 6500, 7500,
      ],
      backgroundColor: "red",
    },
    {
      label: "Coin Purchased",
      data: [
        3200, 11000, 6000, 4000, 6500, 3000, 6200, 5500, 4000, 7000, 6500, 7500,
      ],
      backgroundColor: "green",
    },
    {
      label: "Coin Transferred",
      data: [
        2800, 3600, 3000, 4200, 4500, 2800, 3500, 4000, 3000, 4500, 4000, 5000,
      ],
      backgroundColor: "yellow",
    },
  ],
};

const chartsStyle = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false, // Remove grid lines on x-axis
      },
    },
    y: {
      grid: {
        display: false, // Remove grid lines on y-axis
      },
    },
  },
  // Adjust bar thickness
  plugins: {
    bar: {
      barThickness: 5, // Adjust this value as needed to decrease the bar width
      maxBarThickness: 5, // Ensure bars are not thicker than this value
    },
  },
};

const chartOptions = {
  plugins: {
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          const data = tooltipItem.dataset.data;
          const total = data.reduce((acc, value) => acc + value, 0);
          const currentValue = data[tooltipItem.dataIndex];
          const percentage = ((currentValue / total) * 100).toFixed(2);
          return `${percentage}%`;
        },
      },
    },
    datalabels: {
      formatter: (value, ctx) => {
        const datasets = ctx.chart.data.datasets;
        if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
          const sum = datasets[0].data.reduce((a, b) => a + b, 0);
          const percentage = ((value / sum) * 100).toFixed(2) + "%";
          return percentage;
        } else {
          return "";
        }
      },
      color: "#fff",
    },
  },
  maintainAspectRatio: false,
};

const Charts = () => {
  const [openChart, setIsOpenChart] = useState(true);

  function toggleChart() {
    setIsOpenChart(!openChart);
  }

  return (
    <div className="md:pl-10 ">
      <div className="flex items-center justify-between mt-4 mb-6">
        <div className="flex items-center gap-2 ">
          <FaChartBar />
          <h3>Annual report</h3>
        </div>
        <div className="mr-2">
          {openChart ? (
            <HiMinus onClick={toggleChart} />
          ) : (
            <>
              <HiPlus onClick={toggleChart} />
            </>
          )}
        </div>
      </div>
      {openChart ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 sm:gap-x-20 md:gap-x-8">
          <div className="w-full h-60">
            <h2 className=" mb-2">Posts</h2>
            <Line data={areaPoostsData("Posts")} options={chartsStyle} />{" "}
          </div>
          <div className="w-full h-60">
            <h2 className=" mb-2">Users</h2>
            <Bar data={barUsersData("Users")} options={chartsStyle} />
          </div>
          <div className="w-full h-60">
            <h2 className=" mb-2">Reels</h2>
            <Line data={areaReelsData("Reels")} options={chartsStyle} />
          </div>
          <div className="w-full h-60">
            <h2 className=" mb-2">Payments</h2>
            <Pie data={pieData} options={chartOptions} />{" "}
          </div>
          <div className="w-full h-80 md:h-60">
            <h2 className=" mb-2">Coins</h2>
            <Bar data={coinData} options={chartsStyle} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Charts;

{
  /* <div className="ml-2">
        <div className="flex items-center justify-between pt-3 gap-3 font-normal">
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
            <div className="chart-container grid grid-cols-3 gap-24 ">
              <div>
                <div>
                  <div className="mt-5 w-full h-1 bg-cyan-600 rounded-xl"></div>
                  <h3 className="pt-2 ml-1 text-2xl">Posts</h3>
                </div>
                <AreaChart
                  width={360}
                  height={300}
                  data={postsData}
                  margin={{ right: -50, bottom: 5, left: -15 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    tick={{ angle: -35, textAnchor: "end" }}
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
                  <h3 className="pt-2 ml-1 text-2xl">Users</h3>
                </div>
                <BarChart
                  width={360}
                  height={300}
                  data={usersData}
                  margin={{ right: -50, bottom: 5, left: -20 }}
                >
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

                  <Bar dataKey="uv" fill="#16A34A" barSize={20} />
                </BarChart>
              </div>
              <div className="w-72 h-64">
                <div>
                  <div className="mt-5 w-full h-1 bg-green-600 rounded-xl"></div>
                  <h3 className="pt-2 ml-3 text-2xl">Payments</h3>
                </div>
                <Pie data={paymentData} options={paymentOptions} />{" "}
                <h3 className=" ">test</h3>
              </div>
              <div>
                <div>
                  <div className="mt-5 w-full h-1 bg-green-600 rounded-xl"></div>
                  <h3 className="pt-2 ml-1 text-2xl">Coin</h3>
                </div>
                <BarChart
                  data={coinData}
                  width={455}
                  height={300}
                  margin={{ top: 30, left: -5 }}
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
                  <Bar dataKey="coinPurchased" stackId="a" fill="#16A34A" />
                  <Bar dataKey="coinTransfered" fill="#FFC856" />
                  {/* <Bar dataKey="uv" fill="#ffc658" /> */
}
{
  /* name: "Dec", // coinPurchased: 4000, // coinExchanged:
                  2400, // coinTransfered: 2400,  */
}
{
  /* </BarChart>
              </div>
              <div>
                <div>
                  <div className="mt-5 w-full h-1 bg-cyan-600 rounded-xl"></div>
                  <h3 className="pt-2 ml-1 text-2xl">Reels</h3>
                </div>
                <AreaChart
                  data={reelsData}
                  width={455}
                  height={300}
                  margin={{ top: 30, left: -25, right: 15 }}
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
            </div>
          </div>
        ) : null}
      </div> */
}
{
  (" ");
}
