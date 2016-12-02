import React from 'react'
import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx'

export default class App extends React.Component {
    
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
        this.addUser = this.addUser.bind(this);
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
            <AddProfile addUser={this.addUser}/>
            </div>
        )
    }
}