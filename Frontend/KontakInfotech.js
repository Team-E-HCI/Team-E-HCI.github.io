import background from './Assets/kontak.png'
import gmail from './Assets/Gmail.png'
import './App.css';
import logo from './Assets/Logo.png';
import {Nav, NavItem, NavLink} from 'react-bootstrap'

const Kontak = () => {
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
          <h1 className="header">Kontak Kami</h1>
        </div>
        <p className="desc text-justify">Bila ada pertanyaan mengenai fitur, atau mengalami error pada fitur atau akun, atau ada saran untuk meningkatkan kenyamanan pengguna, Anda dapat menghubungi kami melalui:</p>
        <img src={gmail} width="5%" alt=""/>
        <p className="gml">timehci5@gmail.com</p>
      </div>
      <div className="col-sm-5">
        <img src={background} className="ktk" alt="" width="80%"/>
      </div>
    </div>
  </div>
</div>
  );
}

export default Kontak;