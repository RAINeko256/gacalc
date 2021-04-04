import "style/block/Footer.css";

import TwitterIcon from "js/components/atoms/twitter-icon";
import GitHubIcon from "js/components/atoms/github-icon";

function Footer() {
  return (
      <div className="footer">
        <div>
        <p>
            ※当サイトの内容により生じた損害等の一切について責任を負いかねますのでご了承ください。
          </p>
          <p>お問い合わせ等はDMまで</p>
          <div className="f_item_box">
            <div className="f_item">
              <a href="https://twitter.com/RAINEKO256">
                <TwitterIcon/>
              </a>
            </div>
            <div className="f_item">
              <a href="https://github.com/RAINeko256/gacalc">
                <GitHubIcon/>
              </a>
            </div>
          </div>
          
          <p className="copyright">Copyrights (c) RAINeko</p>
        </div>
      </div>
  );
}

export default Footer;
