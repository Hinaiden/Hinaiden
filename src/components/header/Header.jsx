import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://static.dezeen.com/uploads/2019/09/barbican-apartment-interiors-minimalist-john-pawson-london_pinterest-hero.jpg"
        alt=""
      />
    </div>
  );
}
