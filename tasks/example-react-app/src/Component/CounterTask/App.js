import React from "react"
import IncDecComponent from "./IncDecComponent"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            count : 0
        }
        this.countInc=this.countInc.bind(this)
        this.countDec=this.countDec.bind(this)
    
    }

    countInc(){
        this.setState((prevState) => ({ 
            count: prevState.count + 1 
         }))
    }
    
    countDec(){
        this.setState((prevState) => ({
            count: prevState.count ? prevState.count - 1 : prevState.count
        }))
    }

    componentDidMount() {
        console.log("Mounted")
    }
    
    componentDidUpdate() {
        console.log("Did Update")
    }

    render(){
        return(
            <div>
                <p>count: {this.state.count} </p>
                <IncDecComponent countInc = {this.countInc} count={this.state.count} title='increment'/>
                <IncDecComponent countInc = {this.countDec} count={this.state.count} title="decrement" />
            </div>
        )
    }
}

export default App