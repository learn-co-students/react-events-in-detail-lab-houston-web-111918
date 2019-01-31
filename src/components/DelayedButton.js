// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
    handleClick = (e) => {
        e.persist() //event being pooled
        setTimeout(()=> {this.props.onDelayedClick(e)}, this.props.delay)
    }

    render(){
        
    return(<button onClick={(e) => this.handleClick(e)}></button>)
}
}