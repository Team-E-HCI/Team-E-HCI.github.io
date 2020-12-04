import logo from "../Assets/Logo.png";
import "../App.css";
import { Nav, NavItem, NavLink, a } from "react-bootstrap";

const Signup = () => {
  return (
    <div className="daftar">
      <div className="container">
        <div className="row">
          <div className="col-sm-7 dftr">
            <div className="akn">
              <h1 className="akun">Daftar</h1>
            </div>
            <div className="col-sm-3 fst">
              <label for="nama">Nama Lengkap</label>
              <input className="ipts" type="text" id="nama" />
              <label className="konf" for="email">
                E-mail
              </label>
              <input className="ipts" type="email" id="email" />
            </div>
            <div className="col-sm-3 offset-6 sec">
              <label for="password">Password</label>
              <input className="ipts" type="password" id="password" />
              <label className="konf" for="konpassword">
                Konfirmasi
              </label>
              <input className="ipts" type="password" id="konpassword" />
            </div>
            <button className="tbl" type="submit" name="submit">
              Daftar
            </button>
          </div>
          <div className="col-sm-5 txt">
            <div className="hd">
              <h1 className="hdr">Tak kenal maka</h1>
              <h1 className="hdr">Berkenalan.</h1>
            </div>
            <p className="text-justify dsc">
              Buat akun sebelum mengajukan pertanyaan, agar orang lain tahu
              bagaimana cara memanggil Anda ketika berdiskusi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
