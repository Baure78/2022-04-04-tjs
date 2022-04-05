import React, { useEffect, useState } from "react";
import style from "./Button.module.css";
import { PropTypes } from "prop-types";

function Button(props) {
  const [clicked, setClicked] = useState(false);
  //observation des changements /Montage de la valeur
  useEffect(() => {
    if(clicked){
      setTimeout(() =>{ setClicked(false) }, 300);
    }
  }, [clicked])

  console.log(props);
  return (
    <button
      onClick={(evt) => {
        setClicked(true);
        props.myClick();
      }}
      className={`${style.Button}${clicked ? ' '+style.clicked: ''}`}
      style={{ ...props.style, backgroundColor: props.bgColor, color: props.color }}
      type={props.type}
    >
      {props.children}
      {/* {clicked ? '{clicked}' : 'unclicked'} */}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object,
  myClick: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  type: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
Button.defaultProps = {
  myClick: () => {
    console.error("function not defined");
  },
  bgColor: "blue",
  type: "button",
  color: "white",
};
export default Button;
