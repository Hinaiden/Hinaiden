import TopBar from "./components/topbar/Topbar.jsx";
import Single from "./pages/single/Single.jsx";
import Home from "./pages/home/Home.jsx";
import Write from "./pages/write/Write.jsx";
import Setting from "./pages/settings/Setting.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/home/Register/Register.jsx";
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./components/post/Post.jsx";
import { Context } from "./context/Context.js";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";

function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={user ? <Home /> : <Register />} />
        <Route path="login" element={user ? <Home /> : <Login />} />
        <Route path="write" element={user ? <Write /> : <Register />} />
        <Route path="setting" element={user ? <Setting /> : <Register />} />
        <Route path="post/:postId" element={((<Post />), (<Single />))} />
        <Route path="post" element={((<Post />), (<Single />))} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
