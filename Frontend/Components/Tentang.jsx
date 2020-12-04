import React from "react";
import ilustration from "../Assets/tentang.png";
import Navbar from "./Navbar";

const Tentang = () => {
  return (
    <div className="container-fluid p-0">
      <Navbar bavkground="" text="text-blue" />
      <div className="row">
        <div className="col-md pl-5 mt-5">
          <div className="container m-auto">
            <h1 className="m-2 mb-4 text-blue home-title">Tentang</h1>
            <p className="m-2 home-tagline text-justify">
              Infotech adalah tempat bertanya segala sesuatu seputar dunia
              teknologi, seperti solusi dari perangkat gawai yang rusak,
              spesifikasi terbaik untuk sebuah gawai, solusi algoritma program
              yang mengalami eror, tugas sekolah maupun kampus, atau sekedar
              berdiskusi ringan seperti masa depan teknologi.
            </p>
          </div>
        </div>
        <div className="col-md p-5 mt-3">
          <img src={ilustration} alt="Ilustration" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Tentang;
