import Tentang from './Tentang';
import TentangInfotech from './TentangInfotech';
import Kontak from './Kontak';
import KontakInfotech from './KontakInfotech';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Navs from './Navs';
import Ajukan from './Ajukan';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navs />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Masuk" component={Login}></Route>
          <Route path="/Daftar" component={Signup}></Route>
          <Route path="/Tentang" component={Tentang}></Route>
          <Route path="/Kontak" component={Kontak}></Route>
          <Route path="/Tentang-Infotech" component={TentangInfotech}></Route>
          <Route path="/Kontak-Infotech" component={KontakInfotech}></Route>
          {/* <Route path="/Linimasa" component={Linimasa}></Route> */}
          <Route path="/Ajukan" component={Ajukan}></Route>
        </Switch>
  </Router>
  );
}

export default App;
