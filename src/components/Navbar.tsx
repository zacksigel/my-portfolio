import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const onHomePage = location.pathname === "/";
    const onArticlesPage = location.pathname === "/AllArticles"
    const onProjectPage = location.pathname.includes("/projects")

  return (
    <nav className="text-center max-w-200 mx-auto p-1 mt-10">
    <Link to="/">
    <h1 className="text-5xl font-bold mb-4 font-libre-caslon">Zack Sigel</h1></Link>
    <ul className="flex justify-center space-x-4">
        <li>
          {
            onArticlesPage ? (<a href="#" className="hover:underline">Writing & Journalism</a>) :
          onHomePage ? (
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
      
      {onProjectPage ? ( <div className="mt-3"><Link 
    to="/" 
    className="text-blue-800 underline text-center p-1 z-50 bg-white bg-opacity-90 rounded"
  >
    Back
  </Link></div> ) : (<div className="hidden"></div>)
      }
    </nav>
  );
}