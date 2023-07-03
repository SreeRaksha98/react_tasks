import React, { Component }  from "react";
import Conditional from "./Conditional"

class ConditionalComponent extends Component {

    constructor(){
        super()
        console.log('constructor')
        this.state = {
            isLoading : true
        }
    }

    componentDidMount(){
        console.log('timeout')
        setTimeout(() => {
            this.setState({
                isLoading : false
            })
        }, 2500)
    }

    render(){
        // console.log('render')
        return(
            <div>
                <Conditional isLoading = {this.state.isLoading} />
            </div>
        )
    }
}

export default ConditionalComponent