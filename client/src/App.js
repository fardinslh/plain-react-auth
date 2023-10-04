import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import useToken from "./components/App/useToken";


function App() {

  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </div>
  );
}

export default App;
