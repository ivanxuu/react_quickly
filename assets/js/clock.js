import React from 'react'
import ReactDOM from 'react-dom'
import DigitalClock from './digital-clock'
import AnalogClock from './analog-clock'

class Clock extends React.Component{
  constructor(props){
    super(props)
    // You can't call `this.setState()` here
    this.state = {currentTime: this.currentTimeNow()}
    this.startTickingDaemon()
  }
  render(){
    return <div {...this.props}>
      <DigitalClock time={this.state.currentTime} />
      <AnalogClock time={this.state.currentTime} />
    </div>
  }
  startTickingDaemon(){
    setInterval(()=>{
      this.triggerTick()
    }, 1000)
  }
  triggerTick(){
    console.log('Ticking time')
    this.setState({currentTime: this.currentTimeNow()})
  }
  currentTimeNow(){
    return (new Date).toLocaleString()
  }
}

export default ReactDOM.render(
  <Clock title='This is a clock' />,
  document.getElementById('content')
)
