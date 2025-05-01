import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-400 shadow-md px-6 flex justify-end">
      <ul className="flex flex-row list-none">
        <li>
          <Link to="/" className="text-2xl font-bold text-primary">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-primary">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-primary">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
