import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar bg-base-200 px-6">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold">My Portfolio</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal gap-4">
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}
