import React from 'react';
import './Button.css';

//pre work// <props> //just testing props
const Work = (props) =>{
  return (
    <div>
    <button>{props.numbers.zero}</button>
    <button>{props.numbers.one}</button>
    <button>{props.numbers.two}</button>
    <button>{props.numbers.three}</button>
    <button>{props.numbers.four}</button>
    <button>{props.numbers.five}</button>
    <button>{props.numbers.six}</button>
    <button>{props.numbers.seven}</button>
    <button>{props.numbers.eight}</button>
    <button>{props.numbers.nine}</button>
    </div>
  )
}

const Button = () => {
  const ob = {
    zero:0,
    one:1,
    two:2,
    three:3,
    four:4,
    five:5,
    six:6,
    seven:7,
    eight:8,
    nine:9
  };

  return(
  <div className="But">
    <Work numbers={ob}/>
  </div>
  )
}

export default Button ;



      // {/* <button>{props.numob.one}</button>
      // <button>{props.numob.two}</button>
      // <button>{props.numob.three}</button>
      // <button>{props.numob.four}</button>
      // <button>{props.numob.five}</button>
      // <button>{props.numob.six}</button>
      // <button>{props.numob.seven}</button>
      // <button>{props.numob.eight}</button>
      // <button>{props.numob.nine}</button> */}