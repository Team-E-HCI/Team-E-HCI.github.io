import React from "react";
import Home from "./Components/Home";
import Tentang from "./Components/Tentang";
import KontakKami from "./Components/KontakKami";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        {/* <Route path="/Masuk" component={Login}></Route>
        <Route path="/Daftar" component={Signup}></Route> */}
        <Route path="/Tentang" component={Tentang}></Route>
        <Route path="/Kontak-Kami" component={KontakKami}></Route>
        {/* <Route path="/Tentang-Infotech" component={TentangInfotech}></Route>
        <Route path="/Kontak-Infotech" component={KontakInfotech}></Route>
        <Route path="/Linimasa" component={Linimasa}></Route>
        <Route path="/Ajukan" component={Ajukan}></Route> */}
      </Switch>
    </Router>
  );
};

export default App;
