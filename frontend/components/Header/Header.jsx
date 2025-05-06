import "./header.css";
export default function Header() {
  return (
    <header>
      <div className="left">GBIGEBEYA</div>
      <div className="right">
        <div className="center">
          <li>
            <a href="#">Homes</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </div>
        <div className="btn-container">
          <button className="btn-logout">Logout</button>
          <button className="btn-login">Login</button>
        </div>
      </div>
      <div className="mobile-menu">
        <div className="menu-icon">&#9776;</div>
        <div className="menu-content">
          <li>
            <a href="#">Homes</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </div>
      </div>
    </header>
  );
}
