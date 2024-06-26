import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaFile, FaFlag, FaBars } from "react-icons/fa";
import {
  FaUsers,
  FaWpforms,
  FaYelp,
  FaQuestionCircle,
  FaBullhorn,
  FaPlayCircle,
  FaVolumeUp,
  FaGg,
  FaBriefcase,
  FaBell,
  FaHeart,
  FaWrench,
} from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { AiFillPicture } from "react-icons/ai";
import { HiUser } from "react-icons/hi2";
import { VscListUnordered } from "react-icons/vsc";
import { BiSolidCoupon } from "react-icons/bi";
import { GiTicket } from "react-icons/gi";
import { IoMdTv, IoIosPlay, IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { CiMoneyBill } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const sectionsData = [
  {
    icon: <FaTachometerAlt />,
    title: "Dashboard",
    showContent: false,
    showArrows: false,
    path: "/dashboard",
  },
  {
    icon: <HiUser />,
    title: "Administrators",
    showContent: false,
    showArrows: false,
  },
  {
    icon: <FaUsers />,
    title: "User",
    showContent: false,
    showArrows: true,
    items: [
      { text: "User", icon: <FaUsers />, path: "/users" },
      { text: "Users Verification", icon: <FaUsers /> },
      // { text: "User Profile Category", icon: <FaUsers /> },
    ],
  },
  {
    icon: <FaWpforms />,
    title: "Post",
    showContent: false,
    showArrows: true,
    items: [
      {
        text: "Post",
        icon: <FaWpforms />,
        path: "/posts",
      },
      {
        text: "Repored Post",
        icon: <FaWpforms />,
      },
    ],
  },
  {
    icon: <GiTicket />,
    title: "Support request",
    showContent: false,
    showArrows: false,
  },
  {
    icon: <CiMoneyBill />,
    title: "Payment",
    showContent: false,
    showArrows: true,
    items: [
      {
        text: "Payment Received",
        icon: <CiMoneyBill />,
      },
      {
        text: "Payment Request",
        icon: <CiMoneyBill />,
      },
      {
        text: "Payout",
        icon: <CiMoneyBill />,
      },
    ],
    // items: ["Payment Received", "Payment Request", "Payout"],
  },
  {
    icon: <IoMdTv />,
    title: "Tv Channel",
    showContent: false,
    showArrows: true,
    items: [
      {
        text: "Tv Channel",
        icon: <IoMdTv />,
      },
      {
        text: "Tv Channel Categories",
        icon: <FaWpforms />,
      },
      {
        text: "Tv Show",
        icon: <IoMdTv />,
        showSubContent: false,
        showArrowsSubContent: true,
        subContent: [
          {
            text: "Tv Show",
            icon: <GrTasks />,
          },
          {
            text: "Tv Show Categories",
            icon: <GrTasks />,
          },
        ],
      },
      {
        text: "Tv Banner",
        icon: <FaFile />,
      },
      {
        text: "Tv Show Episode",
        icon: <IoIosPlay />,
      },
    ],
  },
  {
    icon: <FaYelp />,
    title: "Gift",
    showContent: false,
    showArrows: true,
    items: [
      {
        text: "Gift",
        icon: <FaYelp />,
      },
      {
        text: "Gift Categories",
        icon: <FaWpforms />,
      },
      {
        text: "Timeline Gift",
        icon: <FaFlag />,
      },
    ],
  },
  {
    icon: <FaQuestionCircle />,
    title: "FAQs",
    showContent: false,
    showArrows: true,
    items: [
      {
        text: "FAQ",
        icon: <FaQuestionCircle />,
      },
    ],
  },
  {
    icon: <FaUsers />,
    title: "Organisation",
    showContent: false,
    showArrows: true,
    items: [
      {
        text: "Organization",
        icon: <FaWpforms />,
      },
      {
        text: "Organization Type",
        icon: <FaBullhorn />,
      },
    ],
  },
  {
    icon: <FaPlayCircle />,
    title: "Reel",
    showContent: false,
    showArrows: true,
    items: [
      {
        text: "Audio Categories",
        icon: <FaWpforms />,
      },
      {
        text: "Audio",
        icon: <FaVolumeUp />,
      },
      {
        text: "Reels",
        icon: <FaWpforms />,
      },
    ],
  },
  {
    icon: <FaGg />,
    title: "Pools",
    showContent: false,
    showArrows: true,
    items: [
      {
        text: "Pool",
        icon: <FaGg />,
      },
      {
        text: "Pool Categories",
        icon: <FaWpforms />,
      },
    ],
  },
  {
    icon: <BiSolidCoupon />,
    title: "Coupon",
    showContent: false,
    showArrows: true,
    items: [
      {
        text: "Business Categories",
        icon: <FaWpforms />,
      },
      {
        text: "Business",
        icon: <FaBriefcase />,
      },
      {
        text: "coupon",
        icon: <BiSolidCoupon />,
      },
    ],
  },
  {
    icon: <CiMoneyBill />,
    title: "Promotion Details",
    showContent: false,
    showArrows: true,
    items: [
      {
        text: "Running Promotion",
        icon: <VscListUnordered />,
      },
      {
        text: "Completed Promotion",
        icon: <VscListUnordered />,
      },
    ],
  },
  {
    icon: <CiMoneyBill />,
    title: "Stories",
    showContent: false,
    showArrows: true,
    items: [
      {
        text: "Active Story",
        icon: <VscListUnordered />,
      },
      {
        text: "All Story",
        icon: <VscListUnordered />,
      },
    ],
  },
  {
    icon: <HiUser />,
    title: "Live History",
    showContent: false,
    showArrows: true,
    items: [
      {
        text: "Live Story",
        icon: <VscListUnordered />,
      },
    ],
  },
  {
    icon: <IoMdTv />,
    title: "Ads",
    showContent: false,
    showArrows: true,
    items: [
      {
        text: "Membership",
        icon: <CiMoneyBill />,
        showSubContent: false,
        showArrowsSubContent: true,
        subContent: [
          {
            text: "Promotional Banner",
            icon: <VscListUnordered />,
          },
        ],
      },
      {
        text: "Category",
        icon: <FaWpforms />,
        showSubContent: false,
        showArrowsSubContent: true,
        subContent: [
          {
            text: "Add Categories",
            icon: <VscListUnordered />,
          },
          {
            text: "Add Sub Categories",
            icon: <VscListUnordered />,
          },
        ],
      },
      {
        text: "Ad",
        icon: <IoMdTv />,
        showSubContent: false,
        showArrowsSubContent: true,
        subContent: [
          {
            text: "Active Adds",
            icon: <VscListUnordered />,
          },
          {
            text: "Pending Adds",
            icon: <VscListUnordered />,
          },
          {
            text: "All Adds",
            icon: <VscListUnordered />,
          },
          {
            text: "Expired Adds",
            icon: <VscListUnordered />,
          },
        ],
      },
      {
        text: "Promotional adds",
        icon: <AiFillPicture />,
      },
    ],
  },
  {
    icon: <FaWpforms />,
    title: "Report",
    showContent: false,
    showArrows: true,
    items: [
      {
        text: "Reported User",
        icon: <FaBell />,
      },
      {
        text: "Reported Post",
        icon: <FaWpforms />,
      },
      {
        text: "Reported Post Comment",
        icon: <FaWpforms />,
      },
      {
        text: "Reported Story",
        icon: <VscListUnordered />,
      },
      {
        text: "Reported adds",
        icon: <FaBell />,
      },
      {
        text: "Reported highlight",
        icon: <FaHeart />,
      },
      {
        text: "Blocked IP",
        icon: <FaHeart />,
      },
    ],
  },
  {
    icon: <FaWrench />,
    title: "Setting",
    showContent: false,
    showArrows: true,
    items: [
      {
        text: "Onboard Settings",
        icon: <FaWrench />,
        path: "/adminSettings",
      },
      {
        text: "Contact Information",
        icon: <FaWrench />,
        path: "/contactInfo",
      },
      {
        text: "General Setting",
        icon: <FaWrench />,
      },
      {
        text: "Payment Setting",
        icon: <FaWrench />,
      },
      {
        text: "Social Links",
        icon: <FaWrench />,
      },
      {
        text: "App Settings",
        icon: <FaWrench />,
      },
      {
        text: "Feature Availability",
        icon: <FaWrench />,
      },
      {
        text: "App Theme Setting",
        icon: <FaWrench />,
      },
    ],
  },
];

function Sidebar({ sidebarOpen }) {
  const [sections, setSections] = useState(sectionsData);

  const toggleSection = (index) => {
    const updatedSections = [...sections];
    updatedSections[index].showContent = !updatedSections[index].showContent;
    setSections(updatedSections);
  };

  return (
    <div className="bg-white">
      {sidebarOpen && (
        <div className={`${sidebarOpen ? "sm:block" : "hidden"}`}>
          <div className="border-r border-x-gray-400 border-opacity-55">
            <h3 className="md:block text-center text-black text-2xl pt-4 pb-4">
              SayHi
            </h3>
            <div>
              {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="gap-1 py-4">
                  <Link
                    to={section.path || "#"}
                    className="flex items-center justify-between opacity-80 hover:opacity-100 hover:font-medium cursor-pointer"
                    onClick={() => toggleSection(sectionIndex)}
                  >
                    <div className="flex items-center gap-2 ml-3">
                      <p className="text-base">{section.icon}</p>
                      <p className="text-base text-black md:block">
                        {window.innerWidth < 768
                          ? section.title.split(" ")[0]
                          : section.title}
                      </p>
                    </div>
                    {section.showArrows && (
                      <div>
                        {section.showContent ? (
                          <IoIosArrowDown className="mr-5 text-lg" />
                        ) : (
                          <IoIosArrowForward className="mr-5 text-lg" />
                        )}
                      </div>
                    )}
                  </Link>
                  {section.showContent && section.items ? (
                    <ul
                      className={`pl-2 pt-2 ml-2 ${
                        section.showContent ? "opacity-100" : "opacity-0"
                      } transition-opacity ease-in-out duration-500`}
                    >
                      {section.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="items-center justify-between pt-4 gap-2"
                        >
                          <Link
                            to={item.path || "#"}
                            className="flex items-center justify-between opacity-80 hover:opacity-100 cursor-pointer"
                          >
                            <div className="flex items-center gap-2 ml-2">
                              <span className="text-sm opacity-80">
                                {item.icon}
                              </span>
                              <span className="text-sm">{item.text}</span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
