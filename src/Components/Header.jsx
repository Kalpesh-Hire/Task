import { GiHamburgerMenu } from "react-icons/gi";
import { headerLinks } from "../assets/NavLinks";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Header = ({
  activeHeader,
  setActiveHeader,
  toggleSidebar,
  sidebarOpen,
}) => {
  const navigate = useNavigate();

  const handleHeaderClick = (title, route) => {
    setActiveHeader(title);
    navigate(route);
  };
  const handleLogout = () => {
    // localStorage.clear()
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };
  return (
    <header
      className={`header ${sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}
    >
      <div className="toggle-header" onClick={toggleSidebar}>
        {sidebarOpen ? <GiHamburgerMenu /> : <RxCross2 />}
      </div>

      <div className="header-links">
        {headerLinks.map((link) => (
          <div
            key={link.title}
            onClick={() => handleHeaderClick(link.title, link.route)}
            className={`header-link ${
              activeHeader === link.title ? "active" : ""
            }`}
          >
            {link.title}
          </div>
        ))}

        <div className="logout-header">
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
