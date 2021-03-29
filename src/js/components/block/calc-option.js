import "style/block/CalcOption.css";

import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class CalcOption extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state={
      three_mode_is_checked : false,
    }
  }
  handleChange(event){
    this.setState({
      three_mode_is_checked : event.target.checked
    });
    this.props.onChange(!this.state.three_mode_is_checked);
  }
  render(){
    return(
      <FormGroup row>
        <FormControlLabel
        control={
          <Switch
            checked={this.state.three_mode_is_checked}
            onChange={this.handleChange}
            color="primary"
          />
        }
        label="天賦素材モード"
      />
      </FormGroup>
    );
  }
}

export default CalcOption;