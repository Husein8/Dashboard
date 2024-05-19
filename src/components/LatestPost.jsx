import { useState } from "react";
import { FaEye, FaPlus } from "react-icons/fa";
import { GoX } from "react-icons/go";
import { TiMinusOutline } from "react-icons/ti";

const postsData = [
  {
    id: 1,
    title: "hello all",
    username: "aqibw6691",
    createdAt: "17/05/2024 11:04 AM",
  },
  {
    id: 2,
    title: "(not set)",
    username: "Emmy",
    createdAt: "17/05/2024 10:34 AM",
  },
  {
    id: 3,
    title: "(not set)",
    username: "yogac7346",
    createdAt: "16/05/2024 3:11 PM",
  },
  {
    id: 4,
    title: "thank you",
    username: "yogac7346",
    createdAt: "16/05/2024 3:08 PM",
  },
  {
    id: 5,
    title: "thank you",
    username: "yogac7346",
    createdAt: "16/05/2024 3:08 PM",
  },
  {
    id: 6,
    title: "thank you",
    username: "yogac7346",
    createdAt: "16/05/2024 3:08 PM",
  },
  {
    id: 7,
    title: "thank you",
    username: "yogac7346",
    createdAt: "16/05/2024 3:08 PM",
  },
  {
    id: 8,
    title: "thank you",
    username: "yogac7346",
    createdAt: "16/05/2024 3:08 PM",
  },
  {
    id: 9,
    title: "thank you",
    username: "yogac7346",
    createdAt: "16/05/2024 3:08 PM",
  },
  {
    id: 10,
    title: "thank you",
    username: "yogac7346",
    createdAt: "16/05/2024 3:08 PM",
  },
  {
    id: 11,
    title: "thank you",
    username: "yogac7346",
    createdAt: "16/05/2024 3:08 PM",
  },
  {
    id: 12,
    title: "thank you",
    username: "yogac7346",
    createdAt: "16/05/2024 3:08 PM",
  },
  {
    id: 13,
    title: "thank you",
    username: "yogac7346",
    createdAt: "16/05/2024 3:08 PM",
  },

  // Add more posts as needed
];

function LatestPost() {
  const [posts, setPosts] = useState(postsData);
  const [postDashboard, setPostDashboard] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleDeleteDashboard = () => {
    setPostDashboard("");
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      {postDashboard ? (
        <div className=" pb-100">
          <div className="h-0.5 w-full bg"></div>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold ml-2 mt-2">Latest Posts</h1>
            <div className="flex items-center gap-3">
              <button onClick={toggleSidebar} className="text-xl">
                {isSidebarVisible ? (
                  <TiMinusOutline />
                ) : (
                  <FaPlus className="text-base" />
                )}
              </button>
              <button onClick={handleDeleteDashboard} className="text-xl">
                <GoX />
              </button>
            </div>
          </div>
          <div>
            {isSidebarVisible ? (
              <table className="min-w-full border-collapse block md:table">
                <thead className="block md:table-header-group">
                  <tr className="border  block md:table-row">
                    <th className="px-4 py-2 border-b text-left block md:table-cell">
                      #
                    </th>
                    <th className=" border-b text-left block md:table-cell">
                      Title
                    </th>
                    <th className="pl-32 py-2 border-b text-left block md:table-cell">
                      Username
                    </th>
                    <th className=" py-2 border-b text-left block md:table-cell">
                      Created At
                    </th>
                    <th className="px-4 py-2 border-b text-left block md:table-cell">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="block md:table-row-group">
                  {posts.map((post, index) => (
                    <tr
                      key={post.id}
                      className="border border-gray-300 block md:table-row"
                    >
                      <td className="px-4 py-2 border-b block md:table-cell">
                        {index + 1}
                      </td>
                      <td className="border-b block md:table-cell">
                        {post.title}
                      </td>
                      <td className="pl-32 py-2 border-b block md:table-cell cursor-pointer text hover:opacity-80">
                        {/* link will be needed because it leads to clicked user name? */}
                        {post.username}
                      </td>
                      <td className="py-2 border-b block md:table-cell">
                        {post.createdAt}
                      </td>
                      <td className="px-4 py-2 border-b block md:table-cell">
                        <button className="text hover:opacity-80">
                          {/* the link will be needed because it leads to a certain post clicked */}
                          <FaEye />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              ""
            )}
            {isSidebarVisible ? (
              <button className="float-right mt-14 ml-10 px-3 py-1 border border-transparent hover:border-black">
                View All Posts
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default LatestPost;
