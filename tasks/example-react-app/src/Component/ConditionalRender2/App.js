import React, {Component} from "react";
import msgFromOtherFile from "./messages";

class ConditionalComponent2 extends Component{
    constructor(){
        super()
        this.state = {
            message : []
        }
        this.messageToDisplay = this.messageToDisplay.bind(this)
    }
    componentDidMount() {
        this.messageToDisplay()
    }

    messageToDisplay(){
        setTimeout(()=>{
            this.setState({
                message : msgFromOtherFile
            })
        },3000)
    }

    render(){
        return(
            <>
                <div>
                {
                    this.state.message.length === 0 ? 
                    <h3> {"oops... you don't have any message"} </h3> :
                    <h3>You have {this.state.message.length} new messages</h3>
                }
                </div>
                <div>
                    <h3>{"message to be displayed is -> "} {this.state.message.join(' ,')}</h3>
                </div>
            </>
                
        )
    }
}

export default ConditionalComponent2