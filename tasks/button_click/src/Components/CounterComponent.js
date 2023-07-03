import React from "react";

class CounterComponent extends React.Component {
  constructor(){
    super()
      this.state = {
        count: 0
      }
      this.toDisplay = this.toDisplay.bind(this)
  }

  toDisplay(){
    console.log('changed!')
    this.setState(prevState => {
      return {
        count : prevState.count + 1
      }
    })
  }

  render(){
    return(
      <div>
        <h2> {this.state.count} </h2>
        <button onClick={this.toDisplay}>change!</button>
      </div>
    )
  }
}

export default CounterComponent;
