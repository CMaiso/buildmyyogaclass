import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header
      className="
      flex-none
      bg-white
      sm:flex sm:items-center sm:justify-between sm:px-4 sm:py-3
    "
    >
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <span className="text-xl font-semibold tracking-tight">
            Build My Yoga Class
          </span>
        </div>
      </div>
      <nav className="px-2 pt-2 pb-4 sm:flex sm:p-0">
        <ul className="sm:flex sm:items-center">
          <li className="text-teal-200 mr-4 block hover:text-pink-700">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="text-teal-200 mr-4 block hover:text-pink-700">
            <Link to="/register">S'enregistrer</Link>
          </li>
        </ul>
        <button
          className="
          block
          rounded-md
          border border-pink-700
          bg-white
          px-2
          py-1
          font-semibold
          text-pink-600
          hover:bg-pink-700 hover:text-white
        "
        >
          <Link to="/login">Se connecter</Link>
        </button>
        <button
          className="
          mt-1
          block
          rounded-md
          px-2
          py-1
          font-semibold
          text-pink-600
          hover:bg-pink-700 hover:text-white
          sm:mt-0 sm:ml-2
        "
        >
          Déconnexion
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
