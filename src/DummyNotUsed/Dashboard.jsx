// Dashboard.jsx
import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom"; // Import Routes and Outlet
import { headerLinks, sidebarLinks } from "../assets/NavLinks"; // Assuming you have the links in a separate file
// import Sidebar from "../Components/Sidebar";
// import Header from "../Components/Header";
// import "../CSS/Dashboard.css";
// import EduReport from "./EduReport";

// Dummy components for each route (You can replace them with actual content)
const HomeContent = () => <div>Home Content</div>;
const ProfileContent = () => <div>Profile Content</div>;
const SettingsContent = () => <div>Settings Content</div>;
const ReportsContent = () => <div>Reports Content</div>;

const Dashboard = () => {
  const [selectedHeader, setSelectedHeader] = useState("Home");

  const handleHeaderClick = (header) => {
    setSelectedHeader(header);
  };

  return (
    <div className="dashboard">
      <Header headerLinks={headerLinks} onHeaderClick={handleHeaderClick} />
      <div className="main-container">
        <Sidebar sidebarLinks={sidebarLinks[selectedHeader] || []} />
        <div className="content">
          <Routes>
            {/* Define nested routes for the selected section */}
            <Route path="/home" element={<HomeContent />}>
              <Route path="edureport" element={<EduReport />} />
            </Route>
            <Route path="/profile" element={<ProfileContent />} />
            <Route path="/settings" element={<SettingsContent />} />
            <Route path="/reports" element={<ReportsContent />} />
            {/* You can add other routes here based on sidebarLinks */}
          </Routes>
          <Outlet /> {/* This will render the matched route content */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
