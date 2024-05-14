import React, { useState } from "react";
import { FaTachometerAlt, FaFile, FaFlag } from "react-icons/fa";
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
import { IoMdTv, IoIosPlay } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { CiMoneyBill } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

// TOKEN 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

const sectionsData = [
  {
    icon: <FaTachometerAlt />,
    title: "Dashboard",
    showContent: false,
    showArrows: false,
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
      { text: "User", icon: <FaUsers /> },
      { text: "Users Verification", icon: <FaUsers /> },
      { text: "User Profile Category", icon: <FaUsers /> },
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
        text: "Contact Information",
        icon: <FaWrench />,
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

function Sidebar() {
  const [sections, setSections] = useState(sectionsData);
  const [subSections, setSubSections] = useState(sectionsData);

  const toggleSection = (index) => {
    const updatedSections = [...sections];
    updatedSections[index].showContent = !updatedSections[index].showContent;
    setSections(updatedSections);
  };

  const toggleSubSection = (sectionIndex, itemIndex) => {
    const updatedSections = [...subSections];
    const updatedSubSection = updatedSections[sectionIndex].items[itemIndex];
    updatedSubSection.showSubContent = !updatedSubSection.showSubContent;
    setSubSections(updatedSections);
  };

  return (
    <div className="pt-5 border-r border-x-gray-300">
      <h3 className="text-center text-black text-2xl pt-4 pb-4">SayHi</h3>
      <div className="">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className=" gap-2 py-4 ">
            <div
              className="flex items-center justify-between opacity-80 hover:opacity-100 hover:font-medium cursor-pointer"
              onClick={() => toggleSection(sectionIndex)}
            >
              <div className="flex items-center gap-2 ml-6 ">
                <p className="text-xl">{section.icon}</p>
                <p className="text-xl  text-black">{section.title}</p>
              </div>
              {section.showArrows && (
                <div>
                  {section.showContent ? (
                    <IoIosArrowDown className="mr-5 text-lg" />
                  ) : (
                    <MdKeyboardArrowLeft className="mr-5 text-lg" />
                  )}
                </div>
              )}
            </div>
            {section.showContent && section.items ? (
              <ul
                className={`pl-2 pt-2 ml-6 ${
                  section.showContent ? "opacity-100" : "opacity-0"
                } transition-opacity ease-in-out duration-500 `}
              >
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="items-center justify-between pt-4 gap-2 "
                  >
                    <div className="flex items-center justify-between opacity-80 hover:opacity-100 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <span className="text-base opacity-80">
                          {item.icon}
                        </span>
                        <span className="text-base">{item.text}</span>
                      </div>
                      {item.showArrowsSubContent && (
                        <div
                          className="cursor-pointer"
                          onClick={() =>
                            toggleSubSection(sectionIndex, itemIndex)
                          }
                        >
                          {item.showSubContent ? (
                            <IoIosArrowDown className="mr-5" />
                          ) : (
                            <MdKeyboardArrowLeft className="mr-5" />
                          )}
                        </div>
                      )}
                    </div>

                    {item.showSubContent ? (
                      <div
                        className="flex items-center justify-between  pt-2"
                        onClick={() => toggleSection(sectionIndex)}
                      >
                        <div className="flex items-center gap-2 ml-4 ">
                          {item.subContent && (
                            <ul className="flex flex-col">
                              {item.subContent.map((subItem, subItemIndex) => (
                                <li
                                  className="flex items-center pt-2 "
                                  key={subItemIndex}
                                >
                                  <div className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:font-medium cursor-pointer">
                                    {subItem.icon}
                                    {subItem.text}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
        <div>TEST</div>
      </div>
    </div>
  );
}

export default Sidebar;
