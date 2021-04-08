import './App.css';
import {Route , Switch} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Help from './components/Help'
import Navbar from './components/Navbar'
import Admin from './components/Admin'
import Login from './components/Login'
import { useState } from 'react';
import Weather from './components/Weather';
import Users from './components/Users';
import Profil from './components/Profil';
function App() {

  const [isConnected , setIsConnected] = useState(false)
  return (
    <div className="App">
  
  
  <Navbar  isConnected={isConnected} setIsConnected={setIsConnected} />
  
  
  <Switch>


  <Route exact  path="/"  component={Home} />

  <Route path="/contact" render={(props)=> <Contact text="i ' am a contact page"  {...props} />}/>

  <Route path="/help/:info"  component={Help} />

  <Route path="/admin" render={(props) => <Admin isConnected={isConnected}/>} />

  <Route path="/login"  component={Login} />

  <Route path="/weather/:city"  component={Weather} />

  <Route path="/users"  component={Users} />

  <Route path="/profile/:id"  component={Profil} />
  </Switch>







    </div>
  );
}

export default App;
