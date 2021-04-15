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
          <p>キャラの
            <strong>突破素材・天賦素材・武器強化素材</strong>
            などを必要数と合成により作れる数とを考慮して計算し、
            <strong>不足している素材の個数を確認できる</strong>
            ツールです。
          </p>
          <p>足りている素材については「ok」と表示されます。</p>
          <h3>使い方</h3>
          <p>素材の
            <em>所持数と必要数とを入力</em>し、<em>Calculateボタンを押す</em>と、不足数が表示されます。</p>
          <p>レア度が３段階しかない天賦素材などについては、天賦素材モードをオンにしてご利用ください。</p>
          <p>合成できない分(1,2個の端数)については、不足数の右上に小さく表示されます。</p>
          <h3>注意</h3>
          <p>初期状態で、<em>必要素材はlv1→lv90までに必要な突破素材の数</em>になっております。必要に応じてご変更ください。</p>
          <p>(その列の入力を消去するボタンを用意してあります)</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Explain;