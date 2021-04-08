import React , {useState} from 'react'
import axios from  'axios'

const Profil = ({match}) => {

axios.get(`https://jsonplaceholder.typicode.com/users?id=${match.params.id}`)
.then((res)=> setUser(res.data))
.catch((err)=>console.log(err))


const [user , setUser] = useState(null) 


    return (
        <div>
            {user ?
            <div> 
            <h1>{user[0].name}</h1>
            <h2>{user[0].email}</h2>
             <h3>{user[0].address.city}</h3> </div>: <div class="spinner-border" role="status">
             <span class="visually-hidden">Loading...</span>
           </div>                    

            
        
    
}
</div>
)}
export default Profil
