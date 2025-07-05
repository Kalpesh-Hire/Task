import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import '../CSS/Layout.css';

const Layout = () => {
  const [activeHeader, setActiveHeader] = useState('Home');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toglleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="layout">
      <Sidebar activeHeader={activeHeader} sidebarOpen={sidebarOpen} />

      <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Header 
          activeHeader={activeHeader} 
          setActiveHeader={setActiveHeader} 
          toggleSidebar={toglleSidebar} 
          sidebarOpen={sidebarOpen} 
        />

        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
