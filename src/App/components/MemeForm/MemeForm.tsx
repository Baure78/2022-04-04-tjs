import React, { FC } from "react";
// import PropTypes from "prop-types";
import style from "./MemeForm.module.scss";
import I_Meme, { I_Image } from "../../interfaces/common";
import Button from "../Button/Button";
// const initialState = {};

interface I_MemeFormProps{
  currentMeme: I_Meme;
  images:Array<I_Image>;
  onValueChange:Function;
}

const MemeForm:FC<I_MemeFormProps> = (props) => {
  // const [state, setstate] = useState(initialState);
  return (
    <div className={style.MemeForm} data-testid="MemeForm">
      <form>
        <input type="text" name="" id="" placeholder="Texte du meme" 
        value={props.currentMeme.text} 
        onChange={evt=>{props.onValueChange({text:evt.target.value})}}/>
        <div className="flexCol">
          <Button type="submit" bgColor="skyblue">Valider</Button>
          <Button type="reset" bgColor="tomato">Reset</Button>
        </div>
      </form>
    </div>
  );
};
// MemeForm.propTypes = {};
// MemeForm.defaultProps = {};

export default MemeForm;