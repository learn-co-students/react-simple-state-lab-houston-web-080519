import React, { Component } from 'react';

export default class Cell extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
           color: this.props.value
        }
    }

    increment = () => {
        console.log(`before setState: ${this.state.color}`)

        this.setState({
            color: '#333'
        })
        console.log(`after setState: ${this.state.color}`)
    }

    render() {
        return (
            <div onClick={this.increment} className="cell" style={{backgroundColor: `${this.state.color}`}}></div>
        );
    }
}