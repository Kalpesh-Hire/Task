import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../assets/userData";
import "../CSS/LoginPage.css"; // reuse CSS

function RegisterPage() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleRegister = () => {
        if (!/^[A-Za-z\s]+$/.test(username)) {
            setMessage("Invalid Username. Only letters and spaces are allowed.");
            return;
        }

        const letters = (password.match(/[A-Za-z]/g) || []).length;
        const numbers = (password.match(/[0-9]/g) || []).length;
        const symbols = (password.match(/[!@#$%^&]/g) || []).length;

        if (letters < 4 || numbers < 3 || symbols < 1) {
            setMessage("Password must have 4 letters, 3 digits, and 1 symbol (!@#$%^&)");
            return;
        }

        const exists = users.some((user) => user.username === username);
        if (exists) {
            setMessage("Username already exists.");
            return;
        }



        users.push({ username, password });
        setMessage("Registration successful!");
        setTimeout(() => navigate("/"), 1000);

        // try {
        //     const response = await fetch("", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({ username, password }),
        //     });

        //     const data = await response.json();

        //     if (response.ok) {
        //         setMessage("Registration successful!");
        //         setTimeout(() => navigate("/"), 1000);
        //     } else {
        //         setMessage(data.error || "Registration failed.");
        //     }
        // } catch (error) {
        //     console.error("Registration error:", error);
        //     setMessage("Something went wrong. Please try again.");
        // }
    };

    return (
        <div className="box">
            <h2 className="text">Register</h2>
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
            <button onClick={handleRegister}>Register</button>
            <p>
                Already have an account? <span onClick={() => navigate("/") }>Login</span>
            </p>
        </div>
    );
}

export default RegisterPage;
