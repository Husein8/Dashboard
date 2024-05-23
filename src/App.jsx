import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { useState } from "react";

const App = () => {
  const [login, setLogin] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login login={login} setLogin={setLogin} />} />

          <Route
            path="/dashboard"
            element={<Dashboard login={login} setLogin={setLogin} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
