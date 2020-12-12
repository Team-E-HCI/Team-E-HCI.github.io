import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Navbar} from 'react-bootstrap';
import { FaBars } from "react-icons/fa";
import logo from "../Assets/Logo.png";
import '../App.css';

const Nav = ({ background, text }) => {
  const references = [
    {
      route: "/Masuk",
      text: "Masuk",
    },
    {
      route: "/Daftar",
      text: "Daftar",
    },
    {
      route: "/Tentang",
      text: "Tentang",
    },
    {
      route: "/Kontak-Kami",
      text: "Kontak Kami",
    },
  ];

  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow((prev) => !prev);
  };

  const getShow = show ? "show" : "";

  return (
    <div className="container-fluid p-0">
      <nav className={"navbar navbar-expand-md p-0 h-25 background"}>
        <Link to="/" className="navbar-brand m-2">
          <img src={logo} alt="InfoTech" className="img-fluid" width="70%"/>
        </Link>
        <button
          className="navbar-toggler m-2 toggle-button"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>
        <div className={"collapse navbar-collapse " + getShow}>
          <ul className="navbar-nav ml-auto">
            {references.map((reference) => (
              <li className="nav-item m-2">
                <Link
                  to={reference.route}
                  className={"nav-link ml-2 mr-2 font-weight-bold " + text}
                >
                  {reference.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
