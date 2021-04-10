import "style/App.css";
import React from "react";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/core/styles';

import Header from "js/components/block/header";
import Explain from "js/components/block/explain";
import CalcOption from "js/components/block/calc-option";
import Footer from "js/components/block/footer";
import InputArea from "js/components/block/input-area";
import ShowMissing from "js/components/block/show-missing";
import theme from "style/theme.js";

//コンテンツ

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleModeChange = this.handleModeChange.bind(this);
    this.calculate = this.calculate.bind(this);
    this.state = {
      possess: [0, 0, 0, 0],
      //所持している素材の個数
      necessary: [6, 9, 9, 1],
      //必要な素材の個数
      missing_part: [0, 0, 0, 0],
      //合成により作れる個数を含めた所持数（表示する素材の個数)
      surplus: [0, 0, 0, 0],
      //剰余(3で割るから2以下になる)
      three_mode: false,
      //天賦素材モード(デフォはオフ)
    };
  }

  calculate = () => {
    let pos, neces, total_pos, compound, surp, t_green, t_blue, t_purple, t_gold;
    pos = this.state.possess.map(x => parseInt(x));
    neces = this.state.necessary.map(x => parseInt(x));
    total_pos = this.state.missing_part.map(x => parseInt(x));
    compound = Array(3);//緑は合成で作れないので、compoundはない
    surp = Array(3);
    //compoundは合成した分
    //
    //pos,neces,total_posは3,2,1,0の順に緑、青、紫、金
    //compoundは0,1,2の順に青、紫、金の合成物
    //必要数以上の素材を持っている場合((compound+pos)>=neces)は、
    //必要素材が集まっているので、所持数は必要数と等しい(neces)
    //そうでない場合は、所持数は(compound + pos)と等しい
    //不足分を表示する仕様になったので、必要数から所持数を引いて求める形にした
    t_green = (pos[3] >= neces[3]) ? (neces[3]) : (pos[3]);

    compound[0] = Math.floor((((pos[3] - neces[3]) >= 0) ? (pos[3] - neces[3]) : 0) / 3);
    surp[3] = Math.floor((((pos[3] - neces[3]) >= 0) ? (pos[3] - neces[3]) : 0) % 3);
    t_blue = ((compound[0] + pos[2]) >= neces[2]) ? (neces[2]) : (compound[0] + pos[2]);

    compound[1] = Math.floor(((((pos[2] + compound[0]) - neces[2]) >= 0) ? ((pos[2] + compound[0]) - neces[2]) : 0) / 3);
    surp[2] = Math.floor(((((pos[2] + compound[0]) - neces[2]) >= 0) ? ((pos[2] + compound[0]) - neces[2]) : 0) % 3);
    t_purple = ((compound[1] + pos[1]) >= neces[1]) ? (neces[1]) : (compound[1] + pos[1]);

    compound[2] = Math.floor(((((pos[1] + compound[1]) - neces[1]) >= 0) ? ((pos[1] + compound[1]) - neces[1]) : 0) / 3)
    surp[1] = Math.floor(((((pos[1] + compound[1]) - neces[1]) >= 0) ? ((pos[1] + compound[1]) - neces[1]) : 0) % 3)
    t_gold = ((compound[2] + pos[0]) >= neces[0]) ? (neces[0]) : (compound[2] + pos[0]);

    console.log(compound[0], compound[1], compound[2]);
    //setState
    this.setState({
      //necesからt_*を引いた数が不足数になる
      missing_part: [(neces[0] - t_gold), (neces[1] - t_purple), (neces[2] - t_blue), (neces[3] - t_green)],
      surplus: surp
    });
  }

  handleChange = (list_name, list, rarity) => event => {
    let t_list = list;
    t_list[rarity] = event.target.value;
    this.setState({
      [list_name]: t_list
    });

  };

  handleModeChange(mode) {
    this.setState({
      three_mode: mode
    });
  }
  /*          <InputArea
              classes={this.props.classes}
              rarity={["金","紫","青","緑"]}
              val={this.state.possess}
              var={'possess'}
              onChange={this.handleChange}
              talent_mode={this.state.three_mode}
            />
  */
  render() {
    return (
      <div className="calc">
        <Paper >
          <p>設定</p>
            <CalcOption onChange={this.handleModeChange} />
          <p>所持素材</p>
            <InputArea
              classes={this.props.classes}
              rarity={["金", "紫", "青", "緑"]}
              val={this.state.possess}
              var={'possess'}
              onChange={this.handleChange}
              isThreeMode={this.state.three_mode ? 1 : 0}
            />
          <p>必要素材</p>
            <InputArea
              classes={this.props.classes}
              rarity={["金", "紫", "青", "緑"]}
              val={this.state.necessary}
              var={'necessary'}
              onChange={this.handleChange}
              isThreeMode={this.state.three_mode ? 1 : 0}
            />
          <p>不足数 , 剰余(右上)</p>
            <ShowMissing
              isThreeMode={this.state.three_mode ? 1 : 0}
              val={this.state.missing_part}
              surplus={this.state.surplus}
              var={'total_possess'}
              onChange={this.handleChange}
            />
          <Button variant="contained" onClick={() => { this.calculate() }} color="secondary">Calculate!</Button>
        </Paper>
      </div>
    );
  }
}

//App
function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <div className="main">
          <Explain />
          <Calc classes={classes} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
