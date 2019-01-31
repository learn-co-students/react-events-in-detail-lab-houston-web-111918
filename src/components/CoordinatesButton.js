import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
  render() {
    return (
      <div>
        <button onClick={e => {
          let array = [e.clientX, e.clientY]
          this.props.onReceiveCoordinates(array)
        }}></button>
      </div>
    );
  }
}
