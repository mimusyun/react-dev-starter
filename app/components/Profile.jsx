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

// export default class Profile extends React.Component {
//     render() {
        
//         let hobbies = this.props.hobbies.map((hobby, index) => {
//             return (
//                 <li key={index}>
//                     {hobby}
//                 </li>
//             )
//         })
        
//         return (
//             <div>
//                 <h3>Name : {this.props.name}</h3>
//                 <p>AGE: {this.props.age}</p>
//                 <p>BIO: {this.props.biography}</p>
//                 <h3>Hobbies</h3>
//                 <ul>
//                     {hobbies}
//                 </ul>
//                 <hr/>
//             </div>
//         )
//     }
// }