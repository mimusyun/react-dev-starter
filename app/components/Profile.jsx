import React from 'react'


let Profile = props => (

    <div>
        <h3>Name : {props.name}</h3>
        <p>AGE: {props.age}</p>
        <p>BIO: {props.biography}</p>
        <h3>Hobbies</h3>
        <ul>
            {props.hobbies.map((hobby, idx) => <li key={idx}>{hobby}</li>)}
        </ul>
        <hr/>
    </div>

)

export default Profile

