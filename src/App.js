import { useState } from "react";
import "./styles/App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from './pages/Home.jsx'
import Login from './pages/AuthPages/Login.jsx'
import Signup from './pages/AuthPages/Signup.jsx'
import AuthBase from "./pages/AuthPages/Authbase";
export default function App(props) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
      {isLogin ? (
        <Routes>
          <Route path="/" element={<AuthBase />} />

          {/* <Route path="attendance" element={<Attendance />} />
          <Route path="courses" element={<Courses />} />
          <Route path="students" element={<Students />} /> */}
          {/* <Route path="profile" element={<Profile />} /> */}

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
          {/* <Route
            path="/login"
            element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}
          /> */}
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Routes>
      )}
    </div>
  );
}
