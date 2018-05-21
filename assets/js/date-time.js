import React from 'react'
import ReactDOM from 'react-dom'

class DateTime extends React.Component{
  time_in_days(plusDays, ...extraTexts){
    let join_extras = extraTexts.join(" ")
    let plus_days = 1000 * 60 * 60 * 24 * plusDays || 0
    let plus_date = 
      new Date(Date.now() + plus_days)
      .toLocaleString()
    return(plus_date + " " + join_extras)
  }
  render(){
    let time_in_days = this.time_in_days(this.props.plusDays, "In Spain", this.props.title)
    return( React.createElement('div', this.props, `Hora: ${time_in_days}`))
  }
}

export default ReactDOM.render(
  <div>
    <DateTime title="Right Now" />
    <DateTime plus-days="3" title="In 3 days"/>
  </div>,
  document.getElementById('hello-world')
)
