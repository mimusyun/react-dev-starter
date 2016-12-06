import React from 'react'
export default class AddProfile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            biography: '',
            hobby: ''
        }
        this.handleName = this.handleName.bind(this)
        this.handleAge = this.handleAge.bind(this)
        this.handleBio = this.handleBio.bind(this)
        this.handleHobby = this.handleHobby.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleName(e) {
        this.setState({
            name: e.target.value,
        })
    }

    handleAge(e) {
        this.setState({
            age: e.target.value,
        })
    }

    handleBio(e) {
        this.setState({
            biography: e.target.value,
        })
    }

    handleHobby(e) {
        this.setState({
            hobby: e.target.value,
        })
    }

    handleClick(e) {
        let newProfile = {
            name: this.state.name,
            age: this.state.age,
            biography: this.state.biography,
            hobbies: [this.state.hobby]
        }
        this.props.addUser(newProfile)
    }

    render() {
        return (
            <div>
                <p>Name: <input onChange={this.handleName} value={this.state.name} /></p>
                <p>Age: <input onChange={this.handleAge} value={this.state.age} /></p>
                <p>Bio: <input onChange={this.handleBio} value={this.state.biography} /></p>
                <p>Hobbies: <input onChange={this.handleHobby} value={this.state.hobby} /></p>
                <button onClick={this.handleClick}>Add new profile</button>
            </div>
        )
    }
}