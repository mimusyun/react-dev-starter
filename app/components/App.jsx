import React from 'react'
import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx'
import {getProfiles} from '../utils/profileApi.jsx'

/*Functional Component example*/
// var MyFunctionalComponent = props => (
//     <div>
//         <p>I am a functional Component!!!</p>
//         <p> {props.x } </p>
//     </div>
// )

export default class App extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            profiles : []
        }
        this.addUser = this.addUser.bind(this);
    }

    componentDidMount() {
        getProfiles().then(profiles => {
            this.setState({
                profiles: profiles
            })
        })
    }

    addUser(newProfile) {
        this.setState({
            profiles: this.state.profiles.concat([newProfile])
        })
    } 

    render() {
        let profiles = this.state.profiles.map((profile, index) => {
            return (
            <Profile
            key={index}
            name={profile.name}
            age={profile.age}
            biography={profile.biography}
            hobbies={profile.hobbies}
            />
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