import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navigation container">
      <ul className="list-non-bullets nav-pills">
        <li className="inline-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "link link-active" : "link"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="inline-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "link link-active" : "link"
            }
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li className="inline-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "link link-active" : "link"
            }
            to="/blogs"
          >
            Blogs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
