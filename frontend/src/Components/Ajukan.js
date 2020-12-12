import "../App.css";
import logo from "../Assets/Logo.png";
import { Nav, NavLink, NavItem } from "react-bootstrap";
import ajukan from "../Assets/Pertanyaan.png";
import { FormControl } from "react-bootstrap";

const Ajukan = () => {
  return (
    <div>
      <Nav className="navbar fixed-top" id="nav-ask">
        <NavItem className="nav" id="left">
          <NavLink className="nav-link up" href="/">
            <img className="face" alt="" width="50%" src={logo} />
          </NavLink>
        </NavItem>
        <NavItem className="nav justify-content-end" id="right">
          <NavLink className="nav-link atas page-scroll" href="/Ajukan">
            Profile
          </NavLink>
          <NavLink
            className="nav-link atas page-scroll"
            href="/Tentang-Infotech"
          >
            Tentang
          </NavLink>
          <NavLink
            className="nav-link atas page-scroll"
            href="/Kontak-Infotech"
          >
            Kontak Kami
          </NavLink>
        </NavItem>
      </Nav>

      <div className="container">
        <div className="row">
          <div className="col-sm-7 full-ask">
            <div className="wrap">
              <h1 className="hd-ask">Ajukan Pertanyaan</h1>
              <label className="form-ask" for="username">
                Judul
              </label>
              <br />
              <FormControl
                className="ipt-ask"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
              <br />
              <label className="form-ask" for="konten">
                Konten
              </label>
              <br />
              <FormControl
                as="textarea"
                className="ipt-ask-cntn"
                aria-label="With textarea"
              />
              <br />
              <input className="ipt-file-ask" type="file" placeholder="foto" />
              <br />
              <div className="akhir-ask">
                <button className="ref-ask">Ajukan</button>
              </div>
            </div>
          </div>
          <div className="col-sm-5 wrap">
            <img src={ajukan} className="foto-ask" width="65%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ajukan;
