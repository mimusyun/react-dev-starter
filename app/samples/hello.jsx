import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'

var X = React.createClass({

    render: function() {
        return (
            <p> XXX </p>
        )
    }

})

var Hello = React.createClass({
    render: function() {
        return (
            React.createElement('p', {}, 'Hello World!!!')
        )
    }
})

var App = React.createClass({
    render: function() {
        return (
            <div>
                <h1>More cool stuff</h1>
                <p>Render things :)</p>
                <Hello></Hello>
                <X></X>
            </div>
        )
    }
});

ReactDOM.render(<App />, document.getElementById('app'))
