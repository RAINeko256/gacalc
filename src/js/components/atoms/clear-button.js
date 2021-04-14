import React from "react";

import BackspaceIcon from "@material-ui/icons/Backspace";
import IconButton from "@material-ui/core/IconButton";

import "style/atoms/clear-button.css";

class ClearButton extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const array_name = this.props.var;
    return(
      <div className="clear-button-container">
        <IconButton onClick={()=>{this.props.onClick(array_name)}}>
          <BackspaceIcon/>
        </IconButton>
        <p>Clear</p>
      </div>
    );
  }
}

export default ClearButton;