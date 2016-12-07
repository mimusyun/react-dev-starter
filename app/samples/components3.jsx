import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'

class Profile extends React.Component {
    render() {
        
        console.log(this.props)
        let hobbies = this.props.hobbies.map((hobby, index) => {
            return (
                <li key={index}>
                    {hobby}
                </li>
            )
        })
        
        return (
            <div>
                <h3>Name : {this.props.name}</h3>
                <p>AGE: {this.props.age}</p>
                <p>BIO: {this.props.biography}</p>
                <h3>Hobbies</h3>
                <ul>
                    {hobbies}
                </ul>
            </div>
        )
    }
}



class App extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            profiles : [
                {
                    id: 0,
                    name: 'David', 
                    age: 30,
                    biography: 'enjoys swimming and biking',
                    hobbies: ['swimming', 'biking']
                },
                {
                    id: 1,
                    name: 'Bill', 
                    age: 42,
                    biography: 'enjoys long walks on the beach',
                    hobbies: ['gardening', 'gaming']
                }
            ]
        }
    }

    addUser(e) {
        var user = {
            name: 'Tom',
            age: 22,
            biography: 'enjoys sports',
            hobbies: ['basketball', 'baseball']
        }
        this.setState({
            profiles: this.state.profiles.concat([user])
        })
    } 

    render() {
        let profiles = this.state.profiles.map((profile, index) => {
            return (
            <div>
                <Profile
                key={profile.id}
                name={profile.name}
                age={profile.age}
                biography={profile.biography}
                hobbies={profile.hobbies}
                />
            </div>
            )
        })
        return (
            <div>
            { profiles }
             <button onClick={this.addUser.bind(this)}>Add new profile</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

