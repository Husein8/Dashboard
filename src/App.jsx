import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { useState } from "react";
import OnboardSettings from "./components/OnboardSettings";
import AdminSettings from "./Pages/AdminSettings";
import ContactInfo from "./Pages/ContactInfo";
import { AdminSettingsProvider } from "./context/AdminSettingsContext";

const App = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <AdminSettingsProvider>
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={<Login login={login} setLogin={setLogin} />}
            />

            <Route
              path="/dashboard"
              element={<Dashboard login={login} setLogin={setLogin} />}
            />

            <Route
              path="/dashboard/settings"
              element={<OnboardSettings login={login} setLogin={setLogin} />}
            />

            <Route
              path="/adminSettings"
              element={<AdminSettings login={login} setLogin={setLogin} />}
            />

            <Route
              path="/contactInfo"
              element={<ContactInfo login={login} setLogin={setLogin} />}
            />
          </Routes>
        </BrowserRouter>
      </AdminSettingsProvider>
    </>
  );
};

export default App;
