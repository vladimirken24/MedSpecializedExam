import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    if (localStorage.getItem("isLoggedIn")) {
        navigate('/users');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        axios.post('http://localhost:3001/', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") {
                    localStorage.setItem("isLoggedIn", true);
                    navigate('/');
                } else {
                    setError("Invalid email or password.");
                }
            })
            .catch(err => {
                console.log(err);
                setError("Something went wrong. Please try again.");
            });
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="form-title">Login</h2>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text"
                        id="email"
                        placeholder="Enter Email"
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {error && <p className="error-message">{error}</p>}

                <button type="submit" className="submit-btn">Login</button>

                <p className="bottom-text">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
