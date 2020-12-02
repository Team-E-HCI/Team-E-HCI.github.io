import background from './Assets/Home.png';

const Home = () => {
  return(
<div className="container">
    <div className="row">
      <div className="col-sm-7">
        <div className="head">
          <h1 className="header">Lemparkan</h1>
          <h1 className="header">Pertanyaanmu.</h1>
        </div>
        <p className="desc">Tanyakan apapun. Malu tersesat, bertanya di forum.</p>
        <br/>
        <a className="pdh"><button className="ref" type="submit" href='/Linimasa'>Linimasa</button></a>
        <a className="pdh" href='/Ajukan'><button className="ref" type="submit">Ajukan Pertanyaan</button></a>
      </div>
      <div className="col-sm-5">
        <img src={background} className="foto" alt="" width="130%"/>
      </div>
    </div>
  </div>
  );
}

export default Home;