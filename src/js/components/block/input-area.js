import React from "react";

import TextField from "@material-ui/core/TextField";

import "style/block/InputArea.css";
class InputArea extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const num = 4 - this.props.isThreeMode;
    const mode = `inputs_${this.props.isThreeMode==0 ? "four" : "three"}`
    //console.log(num,100/num,toString(100/num),width);
    let list=[];
    for(let i=this.props.isThreeMode; i<4; i++){
      list.push(
        <TextField
          label={this.props.rarity[i]}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          className={mode}
          size="small"
          value={this.props.val[i]}
          onChange={this.props.onChange(this.props.var,this.props.val,i)}
        />
      )
    }
    return(
      <form className={this.props.classes.root} noValidate autoComplete="off">
        {list}
      </form>
    );
  }
}

export default InputArea;