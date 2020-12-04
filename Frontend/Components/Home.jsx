import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import ilustration from "../Assets/Home.png";

const Home = () => {
  return (
    <div className="container-fluid p-0">
      <Navbar background="" text="text-blue" />
      <div className="row">
        <div className="col-md-5 pl-5 mt-5">
          <div className="container m-auto">
            <h1 className="m-2 text-blue home-title">
              Lemparkan Pertanyaanmu.
            </h1>
            <p className="m-2 home-tagline">
              Tanyakan apa pun. Malu tersesat, bertanya di forum.
            </p>
            <Link
              to="/Linimasa"
              className="btn btn-md text-white font-weight-bold home-button m-2"
            >
              Linimasa
            </Link>
            <Link
              to="/Ajukan-Pertanyaan"
              className="btn btn-md text-white font-weight-bold home-button m-2"
            >
              Ajukan Pertanyaan
            </Link>
          </div>
        </div>
        <div className="col-md-7 p-5 mt-3">
          <img src={ilustration} alt="Home-Ilustration" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Home;
