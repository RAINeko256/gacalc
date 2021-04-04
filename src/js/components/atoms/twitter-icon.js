import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme) =>({
  root:{
    color: "#00acee"
  }
}))

function TwitterIcon(){
  const classes = useStyles();
  return(
    <IconButton>
      <FontAwesomeIcon icon={faTwitter} className={classes.root}/>
    </IconButton>
  )
}

export default TwitterIcon;