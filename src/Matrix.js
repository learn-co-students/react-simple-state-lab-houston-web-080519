

import React, { Component } from 'react';
import Cell from './cell.js';

export default class Matrix extends Component {

  static defaultProps = {
      values: [
        [ '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
        [ '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
        [ '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
        [ '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
        [ '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
        [ '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
        [ '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
        [ '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
        [ '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
        [ '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ]
    ]
  }
  
  genRow = (vals) => (
    vals.map(val => <Cell value = {val} stuff="stuff"/>
    ) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    // debugger
    return (
      <div id="matrix">
        
        {this.genMatrix()}
      </div>
    )
  }
  
}
