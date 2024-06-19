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

const App = () => {
  const [login, setLogin] = useState(true);

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
            </Route>
          </Routes>
        </Router>
      </UserProvider>
    </AdminSettingsProvider>
  );
};

export default App;
