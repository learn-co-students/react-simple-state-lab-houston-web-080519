import React, { Component } from 'react'

export default class Cell extends Component {

    constructor(props) {
        super(props)
        // console.log(props.value)
        this.state = {
            color: props.value
        }
    }

    render() {
        
        return (
          <div style={{backgroundColor: this.state.color}} className = 'cell' onClick={() => this.setState({
              color: '#333'
          })}>
              color
             
          </div>
        )
    }
}