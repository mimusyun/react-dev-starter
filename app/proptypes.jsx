import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'


class MyComponent extends React.Component {
    render() {
        return (
            <div>
                Name: {this.props.name} <br/>
                Count: {this.props.count}
            </div>
        )
    }
}

MyComponent.proptypes  = {
    name: React.PropTypes.string,
    count: React.PropTypes.number.isRequired
}

MyComponent.defaultProps = {
    name: 'Joe'
}


class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <MyComponent name={'Bill'} count={10} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))