import React, { Component } from "react";
// import addIcon from '../images/addIcon.png'
import './App.css'
import deleteIcon from "../images/deleteIcon.png"

class App extends Component {
  constructor() {
    super()
    this.state = {
      todoList: [],
      errorStatus : false
    }
    this.handleAddIcon = this.handleAddIcon.bind(this)
    this.parsedDataFromLocalStorage = this.parsedDataFromLocalStorage.bind(this)
    this.handleClickDelete = this.handleClickDelete.bind(this)
    this.handleCompleted = this.handleCompleted.bind(this)
  }

  //this function helps in displaying data even after reloading the page 
  componentDidMount() {
    let localStorageStoredData = this.parsedDataFromLocalStorage()
    this.setState({
      todoList: localStorageStoredData ? localStorageStoredData : []
    })

  }

  parsedDataFromLocalStorage() {
    let localStorageStoredData = localStorage.getItem('toDo')
    // output : localStorageStoredData = "['ank']" (which will be in string format)
    let parsedArrayDataFromLocalStorage = JSON.parse(localStorageStoredData)
    // output : parsedArrayDataFromLocalStorage = ['ank']  (after parsing)
    return parsedArrayDataFromLocalStorage
  }

  handleAddIcon(event) {
    event.preventDefault()
    // or var userInput = event.target.querySelector(".inputTagTodoClass").value
    let userValue = event.target[0].value
    // localStorage.setItem ("toDo", JSON.stringify([userInput]))

    //to store data in local storage as api format
    let userInput = {
      value : userValue,
      completed : false,
      created_at : new Date().toLocaleString('en-in')
    }

    let dataFromLocalStorage = []
    if (userValue.trim()!== '') {
      if (localStorage.getItem('toDo')) {  //if the data already exists in local storage
        dataFromLocalStorage = this.parsedDataFromLocalStorage()
        dataFromLocalStorage.push(userInput)
        /* since the output is in array format we are using push method 
        output : ['ank', 'rak'] */
      } else {
        dataFromLocalStorage.push(userInput)
      }
      localStorage.setItem('toDo', JSON.stringify(dataFromLocalStorage))
      // output : "['ank', 'rak']"

      this.setState({
        todoList: dataFromLocalStorage
      })
    }
    else{
      this.setState({
        errorStatus : true
      })
      setTimeout(()=>{
        this.setState({
          errorStatus : false
        })
      } ,5000)
    }
  }

  handleClickDelete(index) {
    let localStorageStoredData = this.parsedDataFromLocalStorage() 
    localStorageStoredData.splice(index, 1)
    localStorage.setItem('toDo', JSON.stringify(localStorageStoredData))
    // output : "['ank', 'rak']"
    this.setState({
      todoList: localStorageStoredData
    })
  }

  handleCompleted(index) {
    let localStorageStoredData = this.parsedDataFromLocalStorage() 
    localStorageStoredData[index].completed = !localStorageStoredData[index].completed
    localStorage.setItem('toDo', JSON.stringify(localStorageStoredData))
    // output : "['ank', 'rak']"
    this.setState({
      todoList: localStorageStoredData
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddIcon}>
          <div className="main-container">
            <div className="titleClass">
              ToDo Lists
            </div>
            <div className="userInputClassContainer">
              <div className="userInputClassSubContainer">
                <input name="inputTodo" type="text" className="inputTagTodoClass" />
                <button name="addButton" className="submitButtonClass" type='submit'> 
                  Submit
                </button>
              </div>
            </div>
            <div className="errorMessage">
              {this.state.errorStatus ? 'please enter correct value' : ''}
            </div>
          </div>
        </form>
        <div className="displayUserDataClass">
          {this.state.todoList.map((toDo, index) => {            
            return (
              <div key={index}>
                <input type="checkbox" checked={toDo.completed} onChange={() => this.handleCompleted(index)} className="checkBoxClass"/>
                <div class="checkmark"></div>
                <div className={toDo.completed ? 'todo-completed' : 'todo-notCompleted'}>{toDo.value}</div>
                <button name="deleteButton" className="Delete" onClick={ () => this.handleClickDelete(index) }>
                  <img className="deleteIconClass" src={deleteIcon} alt="delete todo" />
                </button>
                <div>created at: {toDo.created_at}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default App