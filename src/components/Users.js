import React, { useState , useEffect } from 'react'
import Card from './Card'
const Users = () => {

useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err) => console.log(err))

 
}, [])




const [users , setUsers] = useState(null)

    return (
        <div style={{display:"flex" , justifyContent:"space-between" , flexWrap:"wrap" , margin:"50px 10px" }}>

    {  users ?  users.map((el,i) => (

    <Card key={i} user={el} />

    )) : <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>








    }
    



            
        </div>
    )
}

export default Users
