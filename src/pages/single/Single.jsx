import SinglePost from "../../components/singlePost/SinglePost.jsx";
import "./single.css";
import SideBar from "../../components/sidebar/Sidebar.jsx";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <SideBar />
    </div>
  );
}
