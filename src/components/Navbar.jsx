import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-200 shadow-md px-6">
      {/* Mobile menu button */}
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden lg:flex justify-end w-full">
        <ul className="menu menu-horizontal px-1 gap-x-4">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li><Link to="/projects" className="hover:text-primary">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}
