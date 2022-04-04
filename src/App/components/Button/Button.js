import React from "react";
import style from './Button.module.css';
import { PropTypes } from "prop-types"; 

function Button(props){
    console.log(props);
    return <button 
    onClick= {(evt)=>{
        props.myClick("hello")
    }}
     className="Button" style={{backgroundColor: props.bgColor}}>{props.text}</button>
}

Button.propTypes={
    text: PropTypes.string.isRequired,
    myClick:  PropTypes.func.isRequired,
    bgColor: PropTypes.string,
}
Button.defaultProps={
    myClick: ()=>{console.error('function not defined')}
}
export default Button;