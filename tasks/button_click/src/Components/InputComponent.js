import React from "react";

class InputComponent extends React.Component {
  constructor(){
    super()
      this.state = {
        inputValue : ''
      }
      this.toDisplay = this.toDisplay.bind(this)
      this.toDisplayInputValue = this.toDisplayInputValue.bind(this)
  }

  toDisplayInputValue(event){
    console.log(event.target.value)
    this.setState(state => {
        return {
            inputValue : event.target.value
        }
    })
  }

  toDisplay(){
    console.log('submitted!')
  }

  render(){
    return(
      <div>
        <input type="text" placeholder="type something" onChange={this.toDisplayInputValue} />
        <button onClick={this.toDisplay}>submit!</button>
        <p>{this.state.inputValue}</p>
      </div>
    )
  }
}

export default InputComponent;
