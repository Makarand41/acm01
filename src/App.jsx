import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import File from "./pages/File/File";
import Construction from "./pages/Construction/Construction";
import Layout from "./pages/Layout/Layout";
import Functions from "./pages/Functions/Functions";
import Report from "./pages/Report/Report";
import Login from "./pages/Login/Login";
import Welcome from "./pages/Welcome/Welcome";

// ✅ Wrapper component to conditionally show Navbar
const AppLayout = () => {
  const location = useLocation();

  // Hide navbar on login & welcome
  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/welcome" ||
    location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}{" "}
      {/* Render Navbar only if not login/welcome */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/file" element={<File />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/function" element={<Functions />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
};

export default App;
