import React from "react";
import PropTypes from "prop-types";
import style from "./MemeViewer.module.scss";


const MemeViewer = (props) => {
  return (
    <svg className={style.MemeViewer} data-testid="MemeViewer" viewBox={`0 0 ${props.image?props.image.w:'1000'} ${props.image?props.image.h:'675'}`}>
      {undefined !== props.image&&<image href={`/img/${props.image.url}`} x="0" y="0"/>}
      <text 
        x={props.meme.x} 
        y={props.meme.y} 
        fontSize={props.meme.fontSize} 
        fill={props.meme.color} 
        textDecoration={props.meme.underline? 'underline' : 'none'}
        fontStyle={props.meme.italic? 'italic': 'normal'}>{props.meme.text}</text>
    </svg>
  );
};
MemeViewer.propTypes = {
  meme: PropTypes.object.isRequired,
  image: PropTypes.any.isRequired,
};
MemeViewer.defaultProps = {};

export default MemeViewer;