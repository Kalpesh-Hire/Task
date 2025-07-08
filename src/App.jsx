import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Page/LoginPage";
import RegisterPage from "./Page/Regestration";
import EduReport from "./Page/HomePages/EduReport";
import Layout from "./Page/Layout";
import ProtectedRoute from "./Components/ProtectedRoute";
import TimeReport from "./Page/HomePages/TimeReport";
import TimeAnalysis from "./Page/AnalysyisPages/TimeAnalysis";
import AddTask from "./Page/Services/AddTask";
import TimeManage from "./Page/Services/TimeManage";
import PreviousDetail from "./Page/Services/PreviusDetails";
import Dashboard from "./Page/Services/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          {/* HomeSidebar */}
          <Route path="home/edureport" element={<EduReport />} />
          <Route path="home/time" element={<TimeReport />} />

          {/* Service Sidebar Links */}
          <Route path="profile/task-manage" element={<AddTask />} />
          <Route path="profile/time-manage" element={<TimeManage />} />
          <Route path="profile/previous" element={<PreviousDetail />} />
          <Route path="profile/dashboard" element={<Dashboard />} />

          {/* Time Sidevar */}
          <Route path="analysis/time-analysis" element={<TimeAnalysis />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
