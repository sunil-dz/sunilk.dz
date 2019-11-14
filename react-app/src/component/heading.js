import React, { Component } from 'react';
class Heading extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="title">
            <h2>My Name is {this.props.name}</h2>
            </div>
        )
    }
}

export default Heading;
