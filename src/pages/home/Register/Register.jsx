import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { axiosInstance } from "../../../config.js";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const res = await axiosInstance.post(
        "https://aidenblog123.herokuapp.com/api/auth/register/",
        {
          username,
          email,
          password,
        }
      );
      res.data &&
        window.location.replace("https://aidenblog123.herokuapp.com/api/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>UserName</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your user name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && (
        <span style={{ marginTop: "10px" }}>Something went wrong!</span>
      )}
    </div>
  );
}
