import React from 'react'
import ReactDOM from 'react-dom'

class DateTime extends React.Component{
  time_now(){
    return(new Date().toLocaleString())
  }
  render(){
    return(<div>Hora: {this.time_now()}</div>)
  }
}

export default ReactDOM.render(
  <DateTime/>,
  document.getElementById('hello-world')
)
