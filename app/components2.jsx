import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'

class Profile extends React.Component {
    render() {
        
        let hobbies = this.props.hobbies.map((hobby, index) => {
            return (
                <li key={index}>
                    {hobby}
                </li>
            )
        })
        
        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>
                    {this.props.name} {this.props.bio}
                </p>
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
                    bio: 'enjoys swimming and biking',
                    hobbies: ['swimming', 'biking']
                },
                {
                    id: 1,
                    name: 'Bill', 
                    age: 42,
                    bio: 'enjoys long walks on the beach',
                    hobbies: ['gardening', 'gaming']
                }
            ]
        }
    }

    render() {
        let profiles = this.state.profiles.map(profile => {
            return (
                <Profile
                key={profile.id}
                name={profile.name}
                age={profile.age}
                profile={profile.bio}
                hobbies={profile.hobbies}
                />
            )
        })
        return (
            <div>
            { profiles }
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

