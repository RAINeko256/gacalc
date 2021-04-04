import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme) =>({
  root:{
    color: "#000"
  }
}))

function GitHubIcon(){
  const classes = useStyles();
  return(
    <IconButton>
      <FontAwesomeIcon icon={faGithub} className={classes.root}/>
    </IconButton>
  )
}

export default GitHubIcon;