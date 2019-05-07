import React from 'react';
import './Button.css';

//pre work// <props> //just testing props
const work = props =>{
  console.log(props);
  return (
    <button>
      {props.ob.zero}
    </button>
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
    <div className = "But">
      <button>0</button>
      <work ob={ob}/>
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