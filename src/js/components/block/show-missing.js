import React from "react";

import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';

import "style/block/ShowMissing.css";

class ShowMissing extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const color = ['gold','purple','blue','green'];
    const mode = "badge_container_" + (this.props.isThreeMode==0 ? "four" : "three");
    let list = [];
    console.log(this.props.isThreeMode);
    for(let i = this.props.isThreeMode; i<4; i++){
      console.log(this.props.surplus);
      console.log(color[i]);
      list.push(
        <div className={mode}>
          <Badge badgeContent={this.props.surplus[i]} color="primary">
            <Avatar className={color[i]}>{this.props.val[i]}</Avatar>
          </Badge>
        </div>
      )
    };
    return(
      <div className="missing_container">
        {list}
      </div>
    );
  }
}

export default ShowMissing;