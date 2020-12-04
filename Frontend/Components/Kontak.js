import background from "../Assets/kontak.png";
import gmail from "../Assets/Gmail.png";
import "../App.css";

const Kontak = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="head">
              <h1 className="header">Kontak Kami</h1>
            </div>
            <p className="desc text-justify">
              Bila ada pertanyaan mengenai fitur, atau mengalami error pada
              fitur atau akun, atau ada saran untuk meningkatkan kenyamanan
              pengguna, Anda dapat menghubungi kami melalui:
            </p>
            <img src={gmail} width="5%" alt="" />
            <p className="gml">timehci5@gmail.com</p>
          </div>
          <div className="col-sm-5">
            <img src={background} className="ktk" alt="" width="80%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
