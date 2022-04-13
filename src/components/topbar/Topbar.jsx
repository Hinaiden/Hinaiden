import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context.js";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="TopIcon fa-brands fa-facebook"></i>
        <i className="TopIcon fa-brands fa-twitter"></i>
        <i className="TopIcon fa-brands fa-pinterest"></i>
        <i className="TopIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="TopList">
          <li className="TopListItem">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="TopListItem">
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li className="TopListItem">
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li className="TopListItem">
            <Link to="/write" className="link">
              Write
            </Link>
          </li>
          <li className="TopListItem" onClick={handleLogout}>
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/setting">
            <img
              className="topImg"
              src="https://i0.wp.com/amodrn.com/wp-content/uploads/2017/05/minimalist-1.jpg?fit=770%2C513&ssl=1"
              alt=""
            />
          </Link>
        ) : (
          <ul className="TopList">
            <li className="TopListItem">
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
            <li className="TopListItem">
              <Link to="/register" className="link">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
