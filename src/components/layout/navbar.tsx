import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className="">
      <Link to="/">
        <div className="">Build My Yoga Class</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
