import React from 'react'
import {useHistory} from 'react-router-dom'


import {Link} from 'react-router-dom'

const Navbar = ({isConnected , setIsConnected}) => {

    const history=useHistory()
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/" >Home</Link>
        <Link class="nav-link" to="/contact">Contact</Link>
        <Link class="nav-link" to="/help/hakim">Help</Link>
        <Link class="nav-link " to="/admin">Admin</Link>
        <Link class="nav-link " to="/weather/Tunis">Weather</Link>
        <Link class="nav-link " to="/users">Users</Link>
        <button onClick={()=> {
            
        setIsConnected(!isConnected);
        
        history.push('/admin')
        
        
        } }> {isConnected ? "Logout" : "Login" }</button>
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
