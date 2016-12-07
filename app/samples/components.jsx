import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'

class App extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            profiles : [
                {name: 'David'},
                {name: 'Sarah'}
            ]
        }
    }

    render() {
        return (
            <div>
                <p>{ this.state.profiles[0].name }</p>
                <p>{ this.state.profiles[1].name }</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

