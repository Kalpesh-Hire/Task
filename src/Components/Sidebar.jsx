import { sidebarLinks } from "../assets/NavLinks";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ activeHeader, sidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // localStorage.clear()
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
    <aside className={`sidebar ${sidebarOpen ? "" : "closed"}`}>
      {sidebarOpen && (
        <div className="container">
          <div className="top-section">
            <div className="side-div-headline">
              <h3 className="sidebar-title">{activeHeader} Menu</h3>
            </div>
            <nav className="sidebar-links">
              {sidebarLinks[activeHeader]?.map((link) => (
                <div
                  key={link.title}
                  onClick={() => navigate(link.route)}
                  className={`sidebar-link ${
                    location.pathname === link.route ? "active" : ""
                  }`}
                >
                  {link.title}
                </div>
              ))}
            </nav>
          </div>

         <div className="logout-div">
           <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
         </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
