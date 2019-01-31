// Code DelayedButton Component Here
import React, { Component } from "react";


export default class DelayedButton extends Component{

    constructor(props){
        super(props)
        this.state = {
        delay: props.delay
    }
    }


    // onDelayedClick = (e) => {
    //     setTimeout(() => console.log("hello"), this.state.delay)
    // }


    render(){
        return(
        <div>
            <button onClick={(e) => this.props.onDelayedClick(e,this.state.delay)}>DelayedButton</button>
        </div>
        )
        
    }

}