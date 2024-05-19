import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { GoX } from "react-icons/go";
import { TiMinusOutline } from "react-icons/ti";

const usersData = [
  {
    id: 1,
    name: "User 1",
    avatar: "https://via.placeholder.com/150",
    lastLogin: "2024-05-18T12:00:00Z",
  },
  {
    id: 2,
    name: "User 2",
    avatar: "https://via.placeholder.com/150",
    lastLogin: "2024-05-17T15:00:00Z",
  },
  {
    id: 3,
    name: "User 3",
    avatar: "https://via.placeholder.com/150",
    lastLogin: "2024-05-16T08:30:00Z",
  },
  {
    id: 4,
    name: "User 4",
    avatar: "https://via.placeholder.com/150",
    lastLogin: "2024-05-15T14:20:00Z",
  },
  {
    id: 5,
    name: "User 5",
    avatar: "https://via.placeholder.com/150",
    lastLogin: "2024-05-14T09:45:00Z",
  },
  {
    id: 6,
    name: "User 5",
    avatar: "https://via.placeholder.com/150",
    lastLogin: "2024-05-14T09:45:00Z",
  },
  {
    id: 7,
    name: "User 5",
    avatar: "https://via.placeholder.com/150",
    lastLogin: "2024-05-14T09:45:00Z",
  },
  {
    id: 8,
    name: "User 5",
    avatar: "https://via.placeholder.com/150",
    lastLogin: "2024-05-14T09:45:00Z",
  },
];

function NewUsersData() {
  const [postDashboard, setPostDashboard] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleDeleteDashboard = () => {
    setPostDashboard("");
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };
  return (
    <div>
      {postDashboard ? (
        <div>
          <div className="w-full h-0.5 bg-red-600 mt-4"></div>
          <div className="flex items-center justify-between mt-2">
            <div>
              <span className="text-xl  ">New Users</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-red-600 text-white p-0.5 px-1 rounded text-sm">
                ${} new users
              </span>
              <button onClick={toggleSidebar} className="text-xl">
                {isSidebarVisible ? (
                  <TiMinusOutline />
                ) : (
                  <FaPlus className="text-sm" />
                )}
              </button>
              <button onClick={handleDeleteDashboard} className="text-xl">
                <GoX />
              </button>
            </div>
          </div>
          {isSidebarVisible ? (
            <div className="container mx-auto pt-4 pr-4">
              <div className="grid grid-cols-1 xl:grid-cols-4">
                {usersData.map((user) => (
                  <div
                    key={user.id}
                    className="flex flex-col items-center bg-white p-2 rounded-lg"
                  >
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-14 h-14 object-cover rounded"
                    />
                    <div className="flex flex-col items-center">
                      <p className="hover:opacity-80 cursor-pointer">
                        {/* the name will lead to users detail profile */}
                        {user.name.toLowerCase()}
                      </p>
                      <p className="text-sm text-gray-600 mb-3">
                        {formatDate(user.lastLogin)}{" "}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
          {isSidebarVisible ? (
            <button className="float-right mt-3 mr-6 px-3 py-1 border border-transparent hover:border-black">
              View All Users
            </button>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default NewUsersData;
