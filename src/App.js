import "./App.css";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button'
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
    this.handleChange = this.handleChange.bind(this);
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
      //s*は合成により作れる個数（表示する素材の個数)
    };
  }

  calculate=()=>{
    //let pm,pp,pb,pg,nm,np,nb,ng,sm,sp,sb,sg;
    let [pm,pp,pb,pg,nm,np,nb,ng,tsm,tsp,tsb,tsg]=
      [this.state.pm,this.state.pp,this.state.pb,this.state.pg,this.state.nm,this.state.np,this.state.nb,this.state.ng,this.state.sm,this.state.sp,this.state.sb,this.state.sg];
    let make_b,make_p,make_m;
    let poss_b,poss_p,poss_m;
    //p*はposession_*、所持している素材
    //n*はnecessary_*、必要素材
    //s*はshortage_*、不足素材 ←現在、所持数を表示させる仕様になっているため、要変更！
    //make_*は合成した分
    //ts*はtemporary_shortage_[color_head_letter]で、setStateするときに文字が被らないようにしてる
    //
    //必要数以上の素材を持っている場合((make_*+p*)>=n*)は、
    //必要素材が集まっているので、所持数は必要数と等しい(n*)
    //そうでない場合は、所持数は(make_* + p*)と等しい

    //緑は合成で作れないので、make_gという値はない
    tsg = (pg >= ng) ? (ng) : (pg);
    
    make_b=Math.floor((((pg - ng)>=0)?(pg-ng):0)/3);
    make_b=parseInt(make_b);
    pb=parseInt(pb);
    tsb = ((make_b + pb)>=nb)?(nb):(make_b + pb);

    make_p=Math.floor(((((pb + make_b)- nb)>=0)?((pb+make_b)-nb):0)/3);
    make_p=parseInt(make_p);
    pp=parseInt(pp);
    tsp = ((make_p + pp)>=np)?(np):(make_p + pp);

    make_m=Math.floor(((((pp + make_p)- np)>=0)?((pp+make_p)-np):0)/3)
    make_m=parseInt(make_m);
    pm=parseInt(pm);
    tsm = ((make_m + pm)>=nm)?(nm):(make_m + pm);

    console.log(make_b,make_p,make_m);
    
    //setState
    this.setState({
      sg : tsg
      });
    this.setState({
      sb : tsb
      });
    this.setState({
      sp : tsp
      });
    this.setState({
      sm : tsm
      });
  }

  handleChange = props => event =>{
    this.setState({
    [props] : event.target.value
    });
    
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
        <p>合成により作れる素材</p>
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
        <Button variant="contained" onClick={()=>{this.calculate()}}>Calculate!</Button>
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
