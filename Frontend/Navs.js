import logo from './Assets/Logo.png';
import './App.css';
import {Nav, NavItem, NavLink} from 'react-bootstrap';
import { BrowserRouter as Link} from "react-router-dom";

const Navs = () => {
  return (
    <Nav className="navbar fixed-top" id="navigate">
      <NavItem className="nav" id="left">
        <NavLink className="nav-link up" href="/"><img className="face" alt="" width="50%" src={logo} /></NavLink>
      </NavItem>
      <NavItem className="nav justify-content-end" id="right">
          <NavLink className="nav-link atas page-scroll" href='/Masuk'>Masuk</NavLink>
          <NavLink className="nav-link atas page-scroll" href='/Daftar'>Daftar</NavLink>
          <NavLink className="nav-link atas page-scroll" href='/Tentang'>Tentang</NavLink>
          <NavLink className="nav-link atas page-scroll" href='/Kontak'>Kontak Kami</NavLink>
      </NavItem>
    </Nav>
  );
}

export default Navs;