import React, { useEffect, useState } from "react";
import "../CSS/LoginPage.css";
import { useNavigate } from "react-router-dom";
import { users } from "../assets/userData";
// const users = [
//     { username: "John doe", password: "1234ga@bcd" },
//     { username: "jane smith", password: "pasets5678@" },
//     { username: "aie prya", password: "mySecurePfef@323" },

// ]

function LoginPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login Page | Ekkatta";

    const user = localStorage.getItem("loggedInUser");
    if (user) {
      navigate("/home/edureport");
    }
  }, [navigate]);

  const handleLogin = () => {
    if (!/^[A-Za-z\s]+$/.test(username)) {
      setMessage("Invalid Username. Only letters and spaces are allowed.");
      return;
    }

    const letters = (password.match(/[A-Za-z]/g) || []).length;
    const numbers = (password.match(/[0-9]/g) || []).length;
    const symbols = (password.match(/[!@#$%^&]/g) || []).length;

    if (letters < 4 || numbers < 3 || symbols < 1) {
      setMessage("Invalid Password");
      return;
    }

    const found = users.find(
      (user) => user.username === username && user.password === password
    );

    if (found) {
      // Store session in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify({ username }));

      navigate("/home");
    } else {
      setMessage("Username and Password are incorrect");
    }
  };

  return (
    <div>
      <div className="box">
        <h2 className="text">Login Page</h2>
        {message && <p className="error">{message}</p>}

        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="UserName"
          name=""
          id=""
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          name=""
          id=""
        />
        <button className="login-btn" onClick={handleLogin}>Login</button>
        <p>
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")}>Register</span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
