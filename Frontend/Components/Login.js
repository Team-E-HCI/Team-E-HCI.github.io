import logo from "../Assets/Logo.png";
import background from "../Assets/Login.png";
import "../App.css";
import { Nav, NavItem, Button, NavLink, a } from "react-bootstrap";

const Login = () => {
  return (
    <body className="body">
      <nav className="navbar fixed-top" id="all">
        <NavItem className="nav" id="left">
          <a className="nav-link up" href="/">
            <img className="face" width="50%" src={logo} />
          </a>
        </NavItem>
        <NavItem className="nav justify-content-end" id="right">
          <NavLink className="nav-link ataslog" href="/Masuk">
            Masuk
          </NavLink>
          <NavLink className="nav-link ataslog" href="/Daftar">
            Daftar
          </NavLink>
          <NavLink className="nav-link ataslog" href="/Tentang">
            Tentang
          </NavLink>
          <NavLink className="nav-link ataslog" href="/Kontak">
            Kontak Kami
          </NavLink>
        </NavItem>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-sm-12 full">
            <div className="wrap">
              <h1 className="hdl">Masuk</h1>
              <label className="form" for="username">
                Email/Username
              </label>
              <br />
              <input className="ipt" type="text" id="username" />
              <br />
              <label for="password">Password</label>
              <br />
              <input className="ipt" type="password" id="password" />
              <br />
              <div className="akhir">
                <button className="refl">Login</button>
                <a className="link" href="#">
                  Lupa Password?
                </a>
              </div>
              <img className="logo" src={background} alt="" width="30%" />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Login;
