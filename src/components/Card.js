import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({user}) => {
    return (
        <div> 
            <div class="card text-center" style={{width:"400px" , heigh:"400px"}}>
  <div class="card-header">
    {user.name}
  </div>
  <div class="card-body">
    <h5 class="card-title">{user.email}</h5>
    <p class="card-text">{user.address.city}</p>
    <Link to={`/profile/${user.id}`} class="btn btn-primary">Go Profile</Link>
  </div>
  <div class="card-footer text-muted">
  
  </div>
</div>
        </div>
    )
}

export default Card
