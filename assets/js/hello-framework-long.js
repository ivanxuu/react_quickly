import React from "react"
import ReactDOM from "react-dom"

class HelloWorld extends React.Component{
  render(){
    return(React.createElement('h1', null, `Hello ${this.props.framework} World!`))
  }
}

export default ReactDOM.render(
  React.createElement('div', null,
    React.createElement(HelloWorld, {framework: 'React'}),
    React.createElement(HelloWorld, {framework: 'React'})
  ) ,
  document.getElementById("hello-world")
)
