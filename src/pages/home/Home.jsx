import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts.jsx";
import "./home.css";
import SideBar from "../../components/sidebar/Sidebar.jsx";
import axiosInstance from "../../config.js";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axiosInstance.get(
          "https://aidenblog123.herokuapp.com/api/posts/" + search
        );
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  );
}
