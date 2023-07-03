import React, {Component} from "react";

class ExampleComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: 'Ankith',
            lastname: 'G'
        }
        console.log('1. constructor')
    }
    componentDidMount() {
        console.log('3. did the component mounted?')
        this.setState(prevState=>({
            firstName: 'Sreeraksha',
            lastname: 'M R'
        }))
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('aaa did the component update', prevProps, prevState)
        if(prevState.firstName === 'Sreeraksha') {
            this.setState({
                firstName:this.state.firstName,
                lastname: 'muddhu'
            })
        }
    }

    handleClick = (event) => {
        this.setState(prevState=>({
            firstName: 'My Wifyyyy',
            lastname: 'M R'
        }))
    }

    render() { 
        console.log('2, 4, 6 render', this.props, this.state)
        return ( 
        <div>
            {`My Name is ${this.state.firstName} ${this.state.lastname}`}
            <button onClick={this.handleClick} >Change My name</button>
        </div> )
    }
}
 
export default ExampleComponent;