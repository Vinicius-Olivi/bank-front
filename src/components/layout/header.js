import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <header>
        <h1>Bank {props.name}</h1>
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
