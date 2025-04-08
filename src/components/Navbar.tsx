import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const onHomePage = location.pathname === "/";

  return (
    <nav className="text-center max-w-200 mx-auto p-1 mt-10">
    <Link to="/">
    <h1 className="text-5xl font-bold mb-4 font-libre-caslon">Zack Sigel</h1></Link>
    <ul className="flex justify-center space-x-4">
        <li>
          {onHomePage ? (
            <a href="#writing" className="hover:underline">Writing & Journalism</a>
          ) : (
            <Link to="/#writing" className="hover:underline">Writing & Journalism</Link>
          )}
        </li>
        <li>
          {onHomePage ? (
            <a href="#C" className="hover:underline">Content Marketing</a>
          ) : (
            <Link to="/#C" className="hover:underline">Content Marketing</Link>
          )}
        </li>
        <li>
          {onHomePage ? (
            <a href="#S" className="hover:underline">SEO Content Strategy</a>
          ) : (
            <Link to="/#S" className="hover:underline">SEO Content Strategy</Link>
          )}
        </li>

      </ul>
    </nav>
  );
}