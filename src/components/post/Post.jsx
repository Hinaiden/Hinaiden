import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "https://aidenblog123.herokuapp.com/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}

      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCats" key="c.name">
              {c.name}
            </span>
          ))}
        </div>
        <Link
          to={`https://aidenblog123.herokuapp.com/api/post/${post._id}`}
          className="link"
        >
          <span className="postTitle" key="post.title">
            {post.title}
          </span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc" key="post.desc">
        {post.desc}
      </p>
    </div>
  );
}
