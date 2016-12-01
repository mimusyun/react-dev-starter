import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'

var App = React.createClass({

    render: function() {
        return (
            <div>
                <h1>More of cool stuff</h1>
                <p>hello world</p>
            </div>
        );
    }

});

ReactDOM.render(<App />, document.getElementById('app'))