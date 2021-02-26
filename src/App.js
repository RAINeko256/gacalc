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
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function Calc() {
  const classes = useStyles();

  return (
    <div className="main">
      <p>所持素材</p>
      <form className={classes.root} noValidate autoComplete="off">
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
        />
      </form>
      <p>必要素材</p>
      <form className={classes.root} noValidate autoComplete="off">
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
        />
      </form>
      <p>不足素材</p>
      <form className={classes.root} noValidate autoComplete="off">
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
        />
      </form>
    </div>
  );
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
  return (
    <div className="App">
      <Header />
      <Calc />
      <Footer />
    </div>
  );
}

export default App;
