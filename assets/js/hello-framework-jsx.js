import React from "react"
import ReactDOM from "react-dom"

class HelloWorld extends React.Component{
  render(){
    return(<h1>Hello {this.props.framework} World!</h1>)
  }
}

export default ReactDOM.render(
  <div>
    <HelloWorld framework='React'/>
    <HelloWorld framework='Angular'/>
  </div>,
  document.getElementById("hello-world")
)
