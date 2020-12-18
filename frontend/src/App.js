import React from 'react'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Tentang from './Components/Tentang.jsx'
import KontakKami from './Components/KontakKami'
import Content from './Components/Content'
import Timeline from './Components/Timeline'
import PostDetail from './Components/PostDetail'
import Profile from './Components/Profile'
import EditProfile from './Components/EditProfile'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/masuk' component={Login} />
        <Route path='/daftar' component={Signup} />
        <Route path='/tentang' component={Tentang} />
        <Route path='/kontak-kami' component={KontakKami} />
        <Route path='/linimasa' component={Timeline} />
        <Route path='/konten/:id' component={PostDetail} />
        <Route path='/pengguna/:id' component={Profile} />
        <Route path='/update-pengguna/:id' component={EditProfile} />
        {/* <Route path="/Tentang-Infotech" component={TentangInfotech}></Route>
        <Route path="/Kontak-Infotech" component={KontakInfotech}></Route>
        <Route path="/Linimasa" component={Linimasa}></Route>
        <Route path="/Ajukan" component={Ajukan}></Route> */}
      </Switch>
    </Router>
  )
}

export default App
