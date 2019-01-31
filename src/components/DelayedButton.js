// Code DelayedButton Component Here

import React, { Component } from 'react';

export default class DelayedButton extends Component {

    delayThis = (e) => {
        e.persist()
        setTimeout( () => this.props.onDelayedClick(e), this.props.delay)
        // console.log(this.props.onDelayedClick)
    }

    
    render() {
        return (
            <button onClick={(e)=> this.delayThis(e) }>
            Delayed Button
            </button>

            /* <button onClick={(e)=> {
                e.persist();
                setTimeout( () => this.props.onDelayedClick(e), this.props.delay)
                }}> 
                Delayed Button
            </button> */
        )
    }
}
