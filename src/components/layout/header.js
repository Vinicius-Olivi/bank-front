import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="container">
        <h1>Bank S/A</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
