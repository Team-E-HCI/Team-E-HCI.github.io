import logo from './Assets/Logo.png';
import background from './Assets/tentang.png'
import './App.css';
import {Nav, NavItem, NavLink} from 'react-bootstrap'

const TentangInfotech = () => {
  return (
<div>
<Nav className="navbar fixed-top" id="nav-ask">
      <NavItem className="nav" id="left">
        <NavLink className="nav-link up" href="/"><img className="face" alt="" width="50%" src={logo} /></NavLink>
      </NavItem>
      <NavItem className="nav justify-content-end" id="right">
          <NavLink className="nav-link atas page-scroll" href='/Ajukan'>Profile</NavLink>
          <NavLink className="nav-link atas page-scroll" href='/Tentang-Infotech'>Tentang</NavLink>
          <NavLink className="nav-link atas page-scroll" href='/Kontak-Infotech'>Kontak Kami</NavLink>
      </NavItem>
    </Nav>

    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="head">
            <h1 className="header">Tentang</h1>
          </div>
          <p className="desc text-justify">InfoTech adalah tempat untuk bertanya segala sesuatu seputar dunia teknologi, seperti solusi dari perangkat gawai yang rusak, spesifikasi terbaik untuk sebuah gawai, solusi algoritma program yang mengalami error, tugas sekolah maupun kampus, atau sekadar berdiskusi ringan seperti masa depan teknologi</p>
        </div>
        <div className="col-sm-5">
          <img src={background} className="ft" alt="" width="100%"/>
        </div>
      </div>
    </div>
  </div>
  );
}

export default TentangInfotech;