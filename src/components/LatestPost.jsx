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
    id: 4,
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
        <div className="pb-100">
          <div className="h-0.5 w-full bg"></div>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold mt-2">Latest Posts</h1>
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
              <div className="flex flex-col">
                <div className="overflow-x-auto lg:-mx-0">
                  <div className="inline-block min-w-full py-2 ">
                    <div className="overflow-hidden">
                      <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                          <tr>
                            <th scope="col" className="px-4 py-4">
                              #
                            </th>
                            <th scope="col" className="px-4 py-4">
                              Title
                            </th>
                            <th scope="col" className="px-4 py-4">
                              Username
                            </th>
                            <th scope="col" className="pl-10 px-4 py-4 ">
                              Created at
                            </th>
                            <th scope="col" className="lg:pl-10 pl-14 py-4">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {posts.map((post, index) => (
                            <tr
                              key={`${post.id}-${index}`}
                              className="border-b dark:border-neutral-500"
                            >
                              <td className="whitespace-nowrap px-4 py-4 font-medium">
                                {index + 1}
                              </td>
                              <td className="whitespace-nowrap px-4 py-4 font-medium">
                                {post.title}
                              </td>
                              <td className="whitespace-nowrap px-4 py-4 font-medium cursor-pointer text hover:opacity-80">
                                {/* link will be needed because it leads to clicked user name? */}
                                {post.username}
                              </td>
                              <td className="whitespace-nowrap pl-10 px-4 py-4 font-medium">
                                {post.createdAt}
                              </td>
                              <td className="whitespace-nowrap py-4 font-medium">
                                <button className="text hover:opacity-80 ml-14 lg:ml-10">
                                  {/* the link will be needed because it leads to a certain post clicked */}
                                  <FaEye />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            {isSidebarVisible ? (
              <button className="float-right mt-8 ml-10 px-3 py-1 border border-transparent rounded hover:border-black">
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
