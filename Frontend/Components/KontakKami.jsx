import React from "react";
import ilustration from "../Assets/kontak.png";
import Navbar from "./Navbar";
import { SiGmail } from "react-icons/si";

const KontakKami = () => {
  return (
    <div className="container-fluid p-0">
      <Navbar background="" text="text-blue" />
      <div className="row">
        <div className="col-md pl-5 mt-5">
          <div className="container m-auto">
            <h1 className="m-2 mb-4 text-blue home-title">Kontak Kami</h1>
            <p className="m-2 home-tagline text-justify">
              Bila ada pertanyaan mengenai fitur, atau mengalami eror pada fitur
              atau akun, atau ada saran untuk meningkatkan kenyamanan pengguna.
              Anda dapat menghubungi kami melalui:
            </p>
            <p className="m-2 mt-4 home-tagline font-weight-bold">
              <SiGmail className="mr-2 text-danger" />
              timehci5@gmail.com
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

export default KontakKami;
