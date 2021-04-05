import React from 'react'
import {Redirect} from 'react-router-dom'
const Admin = ({isConnected}) => {
    return (
        <div>
       {  isConnected ? <h1>this is the admin page</h1> : <Redirect to="/login" />






       }





        </div>
    )
}

export default Admin
