import { useState } from "react";
import "./styles/App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
// import Home from "./pages/other/Home.jsx";
// import Login from "./pages/AuthPages/Login.jsx";
// import Signup from "./pages/AuthPages/Signup.jsx";
import AuthBase from "./pages/AuthPages/Authbase";
import Welcome from "./pages/other/Welcome.jsx";
import BaseSetupBackground from "./pages/BaseSetupPages/BaseSetupBackground";
import Congrats from "./pages/other/Congrats";
import Dashboard from "./pages/dashboard";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
      {isLogin ? (
        <Routes>
          <Route path="auth" element={<AuthBase />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="setup" element={<BaseSetupBackground />} />
          <Route path="congrats" element={<Congrats />} />
          {/* <Route path="profile" element={<Profile />} /> */}
          {/* <Route path="dashboard" element={<Congrats />} /> */}
          <Route path="/" element={<Dashboard />} />

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/auth" element={<AuthBase />} />
          {/* <Route
            path="/login"
            element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}
          /> */}
          <Route path="*" element={<Navigate to="/auth" replace={true} />} />
        </Routes>
      )}
    </div>
  );
}
