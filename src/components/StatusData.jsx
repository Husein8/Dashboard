import { FaDollarSign, FaEnvelope, FaFileAlt } from "react-icons/fa";

const cardData = [
  {
    icon: <FaEnvelope className="text-white text-5xl" />,
    bgColor: "bg-yellow-500",
    header: "SUPPORT REQUESTS",
    count: 20,
    description: "5 requests is pending for reply",
  },
  {
    icon: <FaFileAlt className="text-white text-4xl" />,
    bgColor: "bg-red-500",
    header: "USERS LIVE HISTORY",
    count: 1201,
    description: "0 Users live now",
  },
  {
    icon: <FaDollarSign className="text-white text-4xl" />,
    bgColor: "bg-green-500",
    header: "PAYMENTS",
    count: "$1415",
    description: "$0 in 30 Days",
  },
];

function InfoData() {
  return (
    <div className="flex flex-col items-center space-y-4">
      {cardData.map((card, index) => (
        <div key={index} className={`w-full p-4 shadow-lg ${card.bgColor}`}>
          <div className="flex items-center ">
            <div className="ml-3 mr-8">{card.icon}</div>
            <div className="flex flex-col text-white">
              <span className="text-lg font-medium">{card.header}</span>
              <span className="text-xl font-bold">{card.count}</span>
              <p>{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InfoData;
