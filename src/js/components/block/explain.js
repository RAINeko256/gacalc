import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import "style/block/Explain.css"

function Explain(){
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
  const classes = useStyles();

  return(
    <div className="classes.root">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>サイトの説明</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h3>紹介</h3>
          <p>原神の素材の所持数を、必要数と合成により作れる数とを考慮して計算し、確認できるツールです。</p>
          <h3>使い方</h3>
          <p>素材の所持数と必要数とを入力し、Calculateボタンを押すと、総合所持数が表示されます。</p>
          <p>レア度が３段階しかない素材については、最もレア度の低い(もしくは高い)入力を0にしてご利用ください。</p>
          <h3>注意</h3>
          <p>現段階では合成数が3である素材についてのみ対応しております。ご了承ください。</p>
          <p>必要素材は初期状態ではlv1→lv90までに必要な突破素材の数になっております。</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Explain;