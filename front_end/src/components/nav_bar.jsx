import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import "/Users/Taku/Documents/git_Workspace/takungweWebPortfolio/front_end/src/components/comp_contents/comp_contents_css/main_navbar.css";

export default function Nav_bar() {
  return (
    <nav className="navbar flex justify-between items-center px-8 py-4 bg-black bg-opacity-70">
      <div className="nav_links flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `my-custom-class ${
              isActive ? "text-blue-400" : "hover:text-blue-300"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `my-custom-class ${
              isActive ? "text-blue-400" : "hover:text-blue-300"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            `my-custom-class ${
              isActive ? "text-blue-400" : "hover:text-blue-300"
            }`
          }
        >
          Resume
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            `my-custom-class ${
              isActive ? "text-blue-400" : "hover:text-blue-300"
            }`
          }
        >
          Portfolio
        </NavLink>
      </div>
      <div className="text-sm">
        {" "}
        <FontAwesomeIcon icon={faMobile} /> +48 501 253 838
      </div>
    </nav>
  );
}
