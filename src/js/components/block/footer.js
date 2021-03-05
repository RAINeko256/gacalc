import "style/block/Footer.css";

import Button from "@material-ui/core/Button";

function Footer() {
    return (
      <div className="footer">
        <div>
        <p>お問い合わせはDMまで</p>
        <div className="f_item">
          <a href="https://twitter.com/RAINEKO256">
            <Button variant="contained">
              <i class="fab fa-twitter fa-2x twitter"></i>
              <p>@RAINeko256</p>
            </Button>
          </a>
        </div>
        <p>Copyrights RAINeko</p>
        </div>
      </div>
    );
}

export default Footer;