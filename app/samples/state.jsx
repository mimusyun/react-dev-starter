import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'

var App = React.createClass({

    getInitialState: function() {
        return {
            profiles : [
                {name: 'David'},
                {name: 'Sarah'}
            ]
        }
    },

    render: function() {
        console.log('Out state')
        console.log(this.state)
        return (
            <section>
            { 
                // Some Comment 
            }
            { 
                /*
                More Comments!!
                */
            }
                <p>Simple Math : 2 + 2 = {2 + 2}</p>
                <section>
                    <h3>Profile 1</h3>
                    <p>Name { this.state.profiles[0].name }</p>
                </section>
                <section>
                    <h3>Profile 2</h3>
                    <p>Name { this.state.profiles[1].name }</p>
                </section>
            </section>
        )
    }
});

ReactDOM.render(<App />, document.getElementById('app'))

