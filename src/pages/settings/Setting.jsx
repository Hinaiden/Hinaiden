import SideBar from "../../components/sidebar/Sidebar.jsx";
import "./setting.css";
import { useContext, useState } from "react";
import axiosInstance from "../../config.js";
import { Context } from "../../context/Context.js";

export default function Setting() {
  const [file, setFile] = useState(null);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axiosInstance.post(
          "https://aidenblog123.herokuapp.com/api/upload",
          data
        );
      } catch (err) {}
    }
    try {
      await axiosInstance.put(
        "https://aidenblog123.herokuapp.com/api/users/" + user._id,
        updatedUser
      );
      setSuccess(true);
    } catch (err) {}
  };
  return (
    <div className="settings">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Account</span>
          <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form className="settingForm" onSubmit={handleSubmit}>
          <label>Profile Pic</label>
          <div className="settingPP">
            <img
              src="https://conquest-tech.com/wp-content/uploads/2020/09/Never-do-thse-things-on-your-work-computer.jpeg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingProIcon fa-solid fa-address-book"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>UserName</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated.....
            </span>
          )}
        </form>
      </div>
      <SideBar />
    </div>
  );
}
