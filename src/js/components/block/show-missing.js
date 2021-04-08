import React from "react";

import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';

import "style/block/ShowMissing.css";

class ShowMissing extends React.Component{
  constructor(props){
    super(props);
    this.state={
    }
  }
  render(){
    const color = ['gold','purple','blue','green'];
    let list = [];
    console.log(this.props.isThreeMode);
    for(let i = this.props.isThreeMode; i<4; i++){
      console.log(this.props.surplus);
      console.log(color[i]);
      list.push(
        <Badge badgeContent={this.props.surplus[i]} color="primary">
          <Avatar className={color[i]}>{this.props.val[i]}</Avatar>
        </Badge>
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