import React from 'react'

const AnalogClock = function(props){
  let date = new Date(props.time)
  let dialStyle = {
    position: 'relative',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    borderRadius: '100%',
    borderStyle: 'solid',
    borderColor: 'black'
  }
  let secondHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    width: '40%',
    height: 1,
    border: '1px solid black',
    transformOrigin: '0 0',
    transform: "rotate("+ (date.getSeconds()/60*360-90) + "deg)"
  }
  let minuteHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    width: '40%',
    height: 3,
    border: '1px solid gray',
    transformOrigin: '0 0',
    backgroundColor: 'gray',
    transform: "rotate("+ (date.getMinutes()/60*360-90) + "deg)"
  }
  let hourHandStyle = {
    position: 'relative',
    top: 95,
    left: 100,
    width: '30%',
    height: 5,
    border: '1px solid blue',
    transformOrigin: '0 0',
    backgroundColor: 'blue',
    transform: "rotate("+ (date.getHours()/60*360-90) + "deg)"
  }
  return <div style={dialStyle}>
    <div style={secondHandStyle}/>
    <div style={minuteHandStyle}/>
    <div style={hourHandStyle}/>
  </div>
}

export default AnalogClock

