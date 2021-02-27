import "./App.css";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

//ヘッダー
function Header() {
  return (
    <div className="header">
      <div>
        <p className="h_title">GAcalc</p>
        <p className="h_sub_title">Genshin Ascensions calculator</p>
      </div>
    </div>
  );
}

//コンテンツ



class Calc extends React.Component{
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
    this.state={
      pm : 0,
      pp : 0,
      pb : 0,
      pg : 0,
      //p*は所持している素材の個数
      nm : 6,
      np : 9,
      nb : 9,
      ng : 1,
      //n*は必要な素材の個数
      sm : 0,
      sp : 0,
      sb : 0,
      sg : 0,
      //s*は不足分（表示する素材の個数)
    };
  }

  async calculate(){
    //const m_shotage , p_shortage , b_shortage , g_shortage;
    this.state.sg = (this.state.pg < this.state.ng) ? (this.state.ng - this.state.pg) : 0;
    console.log(this.state.sg);
  }

  handleChange = props => event =>{
    this.setState({
    [props] : event.target.value
    });
    this.calculate();
  };

  render(){
    return (
      <div className="main">
        <p>所持素材</p>
        <form className={this.props.classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-number"
            label="金"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            className="input"
            style={{width : '20%'}}
            size="small"
            value={this.state.pm}
            onChange={this.handleChange('pm')}
          />
          <TextField
            id="outlined-number"
            label="紫"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            className="input"
            style={{width : '20%'}}
            size="small"
            value={this.state.pp}
            onChange={this.handleChange('pp')}
          />
          <TextField
            id="outlined-number"
            label="青"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            className="input"
            style={{width : '20%'}}
            size="small"
            value={this.state.pb}
            onChange={this.handleChange('pb')}
          />
          <TextField
            id="outlined-number"
            label="緑"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            className="input"
            style={{width : '20%'}}
            size="small"
            value={this.state.pg}
            onChange={this.handleChange('pg')}
          />
        </form>
        <p>必要素材</p>
        <form className={this.props.classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-number"
            label="金"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            className="input"
            style={{width : '20%'}}
            size="small"
            defaultValue={this.state.nm}
            value={this.state.nm}
            onChange={this.handleChange('nm')}
          />
          <TextField
            id="outlined-number"
            label="紫"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            className="input"
            style={{width : '20%'}}
            size="small"
            defaultValue={this.state.np}
            value={this.state.np}
            onChange={this.handleChange('np')}
          />
          <TextField
            id="outlined-number"
            label="青"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            className="input"
            style={{width : '20%'}}
            size="small"
            defaultValue={this.state.nb}
            value={this.state.nb}
            onChange={this.handleChange('nb')}
          />
          <TextField
            id="outlined-number"
            label="緑"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            className="input"
            style={{width : '20%'}}
            size="small"
            defaultValue={this.state.ng}
            value={this.state.ng}
            onChange={this.handleChange('ng')}
          />
        </form>
        <p>不足素材</p>
        <form className={this.props.classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-number"
            label="金"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            className="input"
            style={{width : '20%'}}
            size="small"
            disabled="true"
            value={this.state.sm}
          />
          <TextField
            id="outlined-number"
            label="紫"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            className="input"
            style={{width : '20%'}}
            size="small"
            disabled="true"
            value={this.state.sp}
          />
          <TextField
            id="outlined-number"
            label="青"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            className="input"
            style={{width : '20%'}}
            size="small"
            disabled="true"
            value={this.state.sb}
          />
          <TextField
            id="outlined-number"
            label="緑"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            className="input"
            style={{width : '20%'}}
            size="small"
            disabled="true"
            value={this.state.sg}
          />
        </form>
      </div>
    );
  }
  }
//フッター
function Footer() {
  return (
    <div className="footer">
      <p>お問い合わせはDMまで</p>
      <div className="item">
        <a href="https://twitter.com/RAINEKO256">
          <div>
            <i class="fab fa-twitter fa-2x twitter"></i>
            <p>@RAINeko256</p>
          </div>
        </a>
      </div>
      <p>Copyrights RAINeko</p>
    </div>
  );
}

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
    <div className="App">
      <Header />
      <Calc classes={classes}/>
      <Footer />
    </div>
  );
}

export default App;
