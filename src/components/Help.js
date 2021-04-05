import React from 'react'
import {useHistory} from 'react-router-dom'

const Help = (props) => {

    const history = useHistory()


    return (
        <div>
            <h1>Help</h1>
            <p>{props.match.params.info}</p>

            <button onClick={()=>history.goBack()}   >Go Back </button>
            <button  onClick={()=> history.push('/')}  >Go Home</button>


        </div>
    )
}

export default Help
