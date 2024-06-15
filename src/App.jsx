import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import OnboardSettings from "./Pages/OnboardSettings";
import AdminSettings from "./Pages/AdminSettings";
import ContactInfo from "./Pages/ContactInfo";
import { AdminSettingsProvider } from "./context/AdminSettingsContext";
import MainLayout from "./components/MainLayout";
import Users from "./Pages/Users";
import UserDetails from "./Pages/UserDetails";
import UpdateCoinUser from "./Pages/UpdateCoinUser";
import { UserProvider } from "./context/UserContext";
import UpdateUserInfo from "./Pages/UpdateUserInfo";
import ViewAllPosts from "./Pages/ViewAllPosts";
import UsersFollowing from "./Pages/UsersFollowing";
import ViewFollowers from "./Pages/ViewFollowers";
import BlockedUsers from "./Pages/BlockedUsers";
import ViewBlockedUsers from "./Pages/BlockedUsers";
import ViewStories from "./Pages/ViewStories";
import UserLive from "./Pages/UserLive";

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
              <Route path="/blockedUsers/:id" element={<ViewBlockedUsers />} />
              <Route path="/viewStories/:id" element={<ViewStories />} />
              <Route path="/userLive/:id" element={<UserLive />} />
            </Route>
          </Routes>
        </Router>
      </UserProvider>
    </AdminSettingsProvider>
  );
};

export default App;
