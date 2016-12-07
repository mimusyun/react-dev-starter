import React from 'react'
export default class Outer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h3>Some information</h3>
                {this.props.children}
                <p>Some more information</p>
            </div>
        )
    }
}