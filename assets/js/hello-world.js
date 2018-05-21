import React from "react"
import ReactDOM from "react-dom"

class HelloWorld extends React.Component{
  render(){
    return(<h1>Hello World!</h1>)
  }
}

export default ReactDOM.render(
  <HelloWorld/>,
  document.getElementById("hello-world")
)
