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
import UpdateUser from "./Pages/UpdateUser";

const App = () => {
  const [login, setLogin] = useState(true);

  return (
    <AdminSettingsProvider>
      <Router>
        <Routes>
          <Route index element={<Login login={login} setLogin={setLogin} />} />
          <Route element={<MainLayout login={login} setLogin={setLogin} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/settings" element={<OnboardSettings />} />
            <Route path="/adminSettings" element={<AdminSettings />} />
            <Route path="/contactInfo" element={<ContactInfo />} />
            <Route path="/users" element={<Users />} />
            <Route path="/userDetails/:id" element={<UserDetails />} />
            <Route path="/update/:id" element={<UpdateUser />} />
            <Route path="/update/:id" element={<UpdateUser />} />
          </Route>
        </Routes>
      </Router>
    </AdminSettingsProvider>
  );
};

export default App;
