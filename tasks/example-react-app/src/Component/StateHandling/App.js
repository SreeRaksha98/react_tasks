import React from "react";

class StateHandling extends React.Component {
    constructor(){
        super()
        this.state ={
            fullName : '',
            age : null
        }
        this.handleFullNameChange = this.handleFullNameChange.bind(this)
    }

    //normal function
    handleFullNameChange (event){
        this.setState ((prevState) => {
            return ({
                fullName : event.target.value,
            })
            
        })
    }

    //ES6 arrow function
    handleAgeChange = (event) => {
        this.setState((prevState) => {
            return({
                age: event.target.value
        })
        })
    }

    render(){
        return(
            <div>
                <label>Enter the name</label>
                <input type = 'text' onChange={this.handleFullNameChange} /> 
                <label>age</label>
                <input type = 'text' onChange={this.handleAgeChange} /> 
                {/* <p>{this.state.fullName}</p> */}
            </div>
        )
    }
}

export default StateHandling