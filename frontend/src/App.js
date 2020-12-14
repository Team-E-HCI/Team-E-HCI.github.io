import React from 'react'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Tentang from './Components/Tentang.jsx'
import KontakKami from './Components/KontakKami'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/masuk' component={Login} />
        <Route path='/daftar' component={Signup} />
        <Route path='/tentang' component={Tentang} />
        <Route path='/kontak-kami' component={KontakKami} />
        {/* <Route path="/Tentang-Infotech" component={TentangInfotech}></Route>
        <Route path="/Kontak-Infotech" component={KontakInfotech}></Route>
        <Route path="/Linimasa" component={Linimasa}></Route>
        <Route path="/Ajukan" component={Ajukan}></Route> */}
      </Switch>
    </Router>
  )
}

export default App
