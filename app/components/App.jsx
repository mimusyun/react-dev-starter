import React from 'react'
import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx'

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
            profiles : [
                // {
                //     id: 0,
                //     name: 'David', 
                //     age: 30,
                //     biography: 'enjoys swimming and biking',
                //     hobbies: ['swimming', 'biking']
                // },
                // {
                //     id: 1,
                //     name: 'Bill', 
                //     age: 42,
                //     biography: 'enjoys long walks on the beach',
                //     hobbies: ['gardening', 'gaming']
                // }
            ]
        }
        this.addUser = this.addUser.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8888/profiles')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                profiles : data
            })
        })
        .catch(err => {
            console.log(err)
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
            <div key={profile.id}>
                <Profile
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