// Code CoordinatesButton Component Here
import React, { Component } from "react";

export default class CoordinatesButton extends Component {

    state = {
        coordinates: []
    }

  mouseClick = (event) => {
    this.props.onReceiveCoordinates(event)
    this.setState({coordinates: [event.clientX, event.clientY]})
  }

  render() {
      console.log(this.state.coordinates)
    return (
      <div>
        <button onClick={(event) => this.mouseClick(event)}>Click</button>
      </div>
    )
  }
}
