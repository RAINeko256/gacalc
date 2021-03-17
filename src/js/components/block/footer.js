import "style/block/Footer.css";

import Button from "@material-ui/core/Button";

function Footer() {
    return (
      <div className="footer">
        <div>
          <p>お問い合わせはDMまで</p>
          <div className="f_item_box">
            <div className="f_item">
              <a href="https://twitter.com/RAINEKO256">
                <Button variant="contained">
                  <i class="fab fa-twitter fa-2x"></i>
                  <p>@RAINeko256</p>
                </Button>
              </a>
            </div>
            <div className="f_item">
              <a href="https://github.com/RAINeko256/gacalc">
                <Button variant="contained">
                  <i class="fab fa-github fa-2x"></i>
                  <p>@RAINeko256</p>
                </Button>
              </a>
            </div>
          </div>
          <p>※当サイトの内容により生じた損害等の一切について責任を負いかねますのでご了承ください。</p>
          <p>Copyrights (c) RAINeko</p>
        </div>
      </div>
    );
}

export default Footer;