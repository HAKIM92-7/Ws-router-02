import './App.css';
import {Route , Switch} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Help from './components/Help'
import Navbar from './components/Navbar'
import Admin from './components/Admin'
import Login from './components/Login'
import { useState } from 'react';
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
  </Switch>







    </div>
  );
}

export default App;
