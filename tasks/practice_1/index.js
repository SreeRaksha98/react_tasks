import React from "react"
import ReactDOM from "react-dom"

//new method
ReactDOM.render(<div><h1>Hello world!</h1><p>This is a paragraph</p></div>, document.getElementById("root"))

//old method
var myNewP = document.createElement("p")
myNewP.innerHTML = "This is a paragraph."
