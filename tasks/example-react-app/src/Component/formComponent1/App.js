import React, {Component} from "react"

class FormComponent2 extends Component {
    constructor(){
        super()
        this.state = {
            fName : '',
            lName : '',
            age : 20,
            gender : '',
            isSubscribed : true
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    handleOnChange(event){
        const {type, name, value, checked} = event.target
        console.log('aaa change',event, name, type, value, checked)
        if(type === 'checkbox') {
            this.setState({
                [name] : checked
            })
        } else if(type === 'radio') {
            this.setState({
                [name] : parseInt(value)
            })
        } else {
            this.setState({
                [name] : value
            })
        }
       

    }

    handleOnSubmit(event){
        console.log('aaa submit working', event)
        event.preventDefault()
    }

    render(){

        return(
            <form onSubmit={this.handleOnSubmit}>
                <div>
                    <input type="text" name="fName" value={this.state.fName} onChange={this.handleOnChange} placeholder="Type your first name"/>
                </div>

                <div>
                    <input type="text" name="lName" value={this.state.lName} onChange={this.handleOnChange} placeholder="Type your last name"/>
                </div>

                <div>
                    <textarea placeholder='write about you'/>
                </div>

                <div>
                    <select name="gender" value={this.state.gender} onChange={this.handleOnChange} > 
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='others'>others</option>
                    </select>
                </div>

                <div>
                    Subscribe
                    <input type="checkbox" name="isSubscribed" value={this.state.isSubscribed} onChange={this.handleOnChange}/>
                </div>
                {console.log('aaa', this.state.age >= 20 && this.state.age <= 30)}
                <div>
                    <label>
                        <input type="radio" name="20-30" value='21' checked={this.state.age >= 20 && this.state.age <= 30} onChange={this.handleOnChange}/>
                    </label>
                    <label>
                        <input type="radio" name="30-40" value='31' checked={this.state.age >= 30 && this.state.age <= 40} onChange={this.handleOnChange}/>
                    </label>
                    <label>
                        <input type="radio" name="40-50" value='41' checked={this.state.age >= 40 && this.state.age <= 50} onChange={this.handleOnChange}/>
                    </label>
                    <label>
                        <input type="radio" name="50-60" value='51' checked={this.state.age >= 50 && this.state.age <= 60} onChange={this.handleOnChange}/>
                    </label>
                </div>

                <div>
                    <button type='submit'> submit </button>
                </div>

                <div>
                    ----------------------------------------------------------------
                    <h3>Your first name is : {this.state.fName}, </h3>
                    <h3>Your last name is : {this.state.lName}, </h3>
                    <h3>your are a {this.state.gender}</h3>
                </div>
            </form>
        )
    }
}

export default FormComponent2