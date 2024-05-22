import { FaDollarSign, FaEnvelope, FaFileAlt } from "react-icons/fa";

const cardData = [
  {
    icon: <FaEnvelope className="text-white text-4xl md:text-5xl" />,
    bgColor: "bg-yellow-500",
    header: "SUPPORT REQUESTS",
    count: 20,
    description: "5 requests is pending for reply",
  },
  {
    icon: <FaFileAlt className="text-white text-4xl md:text-5xl" />,
    bgColor: "bg-red-500",
    header: "USERS LIVE HISTORY",
    count: 1201,
    description: "0 Users live now",
  },
  {
    icon: <FaDollarSign className="text-white text-4xl md:text-5xl" />,
    bgColor: "bg-green-500",
    header: "PAYMENTS",
    count: "$1415",
    description: "$0 in 30 Days",
  },
];

function InfoData() {
  return (
    <div className="mt-10 lg:mt-0">
      {cardData.map((card, index) => (
        <div key={index} className={`shadow-lg ${card.bgColor}`}>
          <div className="flex items-center mb-4 p-4 ">
            <div className="ml-2 mr-5">{card.icon}</div>
            <div className="flex flex-col text-white">
              <span className="text-sm md:text-base">{card.header}</span>
              <span className="text-sm md:text-base">{card.count}</span>
              <p className="text-sm md:text-base">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InfoData;
