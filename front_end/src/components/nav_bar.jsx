import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile } from "@fortawesome/free-solid-svg-icons";

export default function Nav_bar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black bg-opacity-70">
      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "hover:text-blue-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "hover:text-blue-300"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "hover:text-blue-300"
          }
        >
          Resume
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "hover:text-blue-300"
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
