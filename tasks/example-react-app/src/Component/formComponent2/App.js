import React, { Component } from "react";

class FormComponent2 extends Component{
    constructor(){
        super()
        this.state = {
            fName : '',
            lName : '',
            isFriendly : true,
            gender : ''
        }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmitButton = this.handleSubmitButton.bind(this)
    }

    handleChange(event){
        console.log('event',event)
        const {name, value, type, checked} = event.target
        type === "checkbox" ?
        this.setState({
            [name] : checked 
        }):
        this.setState({
            [name] : value
        })
    }

    handleSubmitButton(event){
        console.log('oopss!... you have insufficient space to store data')
    }

    render(){
        return(
            <form onSubmit={this.handleSubmitButton}>
                <input type='text' value={this.state.fName} name="fName" placeholder="Enter your first name" onChange={this.handleChange}/>
                <h3>Your first name is : {this.state.fName}</h3>

                <input type="text" value={this.state.lName} name="lName" placeholder="Enter the last name" onChange={this.handleChange}/>
                <h3>Your last name is : {this.state.lName}</h3>
                <textarea placeholder="some value"/>

                <input type="checkbox" name="isFriendly" checked={this.state.isFriendly} onChange={this.handleChange}/>

                <label>
                    <input type="radio" name="gender" value='female' checked={this.state.gender === 'female'} onChange={this.handleChange} />
                    female
                </label>

                <label>
                    <input type="radio" name="gender" value='male' checked={this.state.gender === 'male'} onChange={this.handleChange}/>
                    male
                </label>
                <h3>your are a {this.state.gender}</h3>

                <select onChange={this.handleChange} value={this.state.favColor}>
                    <option value='red' >red</option>
                    <option value='green' >green</option>
                    <option value='blue' >blue</option>
                </select>

                <button>Submit</button>
            </form>
        )
    }
}

export default FormComponent2