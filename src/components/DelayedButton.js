import React, { Component } from "react";

export default class DelayedButton extends Component {
  handleClick = e => {
    e.persist();
    setTimeout(() => {
      this.props.onDelayedClick(e);
    }, this.props.delay);
  };
  render() {
    return <button onClick={this.handleClick}>Delayed</button>;
  }
}

// event.persist();
// setTimeout(() => {
//   this.props.onDelayedClick(event);
// }, this.props.delay);
// };
