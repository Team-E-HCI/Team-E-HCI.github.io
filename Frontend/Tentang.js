import logo from './Assets/Logo.png';
import background from './Assets/tentang.png'
import './App.css';
import {Nav, NavItem, NavLink} from 'react-bootstrap'

const Tentang = () => {
  return (
<div>
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

export default Tentang;