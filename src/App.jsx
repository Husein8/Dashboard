import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import OnboardSettings from "./Pages/OnboardSettings";
import AdminSettings from "./Pages/AdminSettings";
import ContactInfo from "./Pages/ContactInfo";
import { AdminSettingsProvider } from "./context/AdminSettingsContext";
import MainLayout from "./components/MainLayout";
import Users from "./Pages/Users/Users";
import UserDetails from "./Pages/Users/UserDetails";
import UpdateCoinUser from "./Pages/Users/UpdateCoinUser";
import { UserProvider } from "./context/UserContext";
import UpdateUserInfo from "./Pages/Users/UpdateUserInfo";
import ViewAllPosts from "./Pages/Users/ViewAllPosts";
import UsersFollowing from "./Pages/Users/UsersFollowing";
import ViewFollowers from "./Pages/Users/ViewFollowers";
import BlockedUsers from "./Pages/Users/BlockedUsers";
import ViewStories from "./Pages/Users/ViewStories";
import UserLive from "./Pages/Users/UserLive";
import UserReels from "./Pages/Users/UserReels";
import ManageUserAppFeature from "./Pages/Users/ManageUserAppFeature";
import Posts from "./Pages/Post/Posts";
import PostDetails from "./Pages/Post/PostDetails";

const App = () => {
  const [login, setLogin] = useState(true);

  // 4: {
  //   name: "Diana Prince",
  //   username: "diana",
  //   email: "diana@gmail.com",
  //   status: "Active",
  //   isVerified: false,
  //   country: "United States of America",
  //   state: "state",
  //   city: "city",
  //   phoneNumber: 12334567,
  //   bio: "",
  //   availableCoin: 0,
  //   lastActive: "04/06/2024 10:35 AM",
  //   createdDate: "04/06/2024 10:35 AM",
  //   image: "",
  //   loginMode: "social",
  //   deviceType: "iOS",
  //   deviceModel: "Rosemary’s iPhone",
  //   loggedAt: "04/06/2024 10:35 AM",
  //   loginIp: "64.44.177.36",
  //   posts: [
  //     {
  //       id: 1,
  //       title: "sample post",
  //       totalViews: 1,
  //       totalLikes: 2,
  //       popularPoints: 3,
  //       totalComments: 4,
  //       status: "Active",
  //       createdAt: "09/06/2024 9:44 AM",
  //     },
  //   ],
  //   viewFollowing: [],
  //   viewFollowers: ["alice"],
  //   blockedUsers: ["charlie"],
  //   stories: [],
  //   userLive: [
  //     {
  //       id: 4,
  //       startTime: "17:00 PM",
  //       endTime: "18:00 PM",
  //       totalTime: "1 hour",
  //       action: "",
  //     },
  //   ],
  //   userReels: [],
  // },
  // 5: {
  //   name: "Eve Adams",
  //   username: "eve",
  //   email: "eve@gmail.com",
  //   status: "Active",
  //   isVerified: false,
  //   country: "United States of America",
  //   state: "state",
  //   city: "city",
  //   phoneNumber: 12334567,
  //   bio: "",
  //   availableCoin: 0,
  //   lastActive: "04/06/2024 10:35 AM",
  //   createdDate: "04/06/2024 10:35 AM",
  //   image: "",
  //   loginMode: "social",
  //   deviceType: "iOS",
  //   deviceModel: "Rosemary’s iPhone",
  //   loggedAt: "04/06/2024 10:35 AM",
  //   loginIp: "64.44.177.36",
  //   posts: [
  //     {
  //       id: 1,
  //       title: "sample post",
  //       totalViews: 1,
  //       totalLikes: 2,
  //       popularPoints: 3,
  //       totalComments: 4,
  //       status: "Active",
  //       createdAt: "09/06/2024 9:44 AM",
  //     },
  //     {
  //       id: 2,
  //       title: "sample post",
  //       totalViews: 1,
  //       totalLikes: 2,
  //       popularPoints: 3,
  //       totalComments: 4,
  //       status: "Active",
  //       createdAt: "09/06/2024 9:44 AM",
  //     },
  //     {
  //       id: 3,
  //       title: "sample post",
  //       totalViews: 100,
  //       totalLikes: 200,
  //       popularPoints: 300,
  //       totalComments: 400,
  //       status: "Active",
  //       createdAt: "09/06/2024 9:44 AM",
  //     },
  //   ],
  //   viewFollowing: [],
  //   viewFollowers: ["alice", "bob"],
  //   blockedUsers: ["charlie"],
  //   stories: [
  //     {
  //       id: 5,
  //       type: "Image",
  //       description: "Eve's first story",
  //       backgroundColor: "",
  //       thumbnail: "path/to/thumbnail1.png",
  //       video: "path/to/video1.mp4",
  //       status: "Active",
  //     },
  //   ],
  //   userLive: [],
  //   userReels: [
  //     {
  //       id: 1,
  //       title: " Reel 1",
  //       totalViews: 300,
  //       totalLikes: 20,
  //       totalComments: 20,
  //       totalShares: 12,
  //       status: "Active",
  //       action: "View",
  //     },
  //   ],
  // },

  return (
    <AdminSettingsProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route
              index
              element={<Login login={login} setLogin={setLogin} />}
            />
            <Route element={<MainLayout login={login} setLogin={setLogin} />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/settings" element={<OnboardSettings />} />
              <Route path="/adminSettings" element={<AdminSettings />} />
              <Route path="/contactInfo" element={<ContactInfo />} />
              <Route path="/users" element={<Users />} />
              <Route path="/userDetails/:id" element={<UserDetails />} />
              {/* update to username not id */}
              <Route path="/update/:id" element={<UpdateUserInfo />} />
              <Route path="/update-coin/:id" element={<UpdateCoinUser />} />
              <Route path="/view-all-posts/:id" element={<ViewAllPosts />} />
              <Route path="/usersFollowing/:id" element={<UsersFollowing />} />
              <Route path="/viewFollowers/:id" element={<ViewFollowers />} />
              <Route path="/blockedUsers/:id" element={<BlockedUsers />} />
              <Route path="/viewStories/:id" element={<ViewStories />} />
              <Route path="/userLive/:id" element={<UserLive />} />
              <Route path="/userReels/:id" element={<UserReels />} />
              <Route
                path="/usersFeatures/:id"
                element={<ManageUserAppFeature />}
              />
              <Route path="/posts" element={<Posts />} />
              <Route
                path="/postDetails/:userId/:postIndex"
                element={<PostDetails />}
              />
            </Route>
          </Routes>
        </Router>
      </UserProvider>
    </AdminSettingsProvider>
  );
};

export default App;
