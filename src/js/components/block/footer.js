import "style/block/Footer.css";

import Fab from "@material-ui/core/Fab";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter , faGithub} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div>
        <p>お問い合わせ等はDMまで</p>
        <div className="f_item_box">
          <div className="f_item">
            <a href="https://twitter.com/RAINEKO256">
              <Fab
                variant="extended"
                size="medium"
                color="secondary"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
                RAINEKO256
              </Fab>
            </a>
          </div>
          <div className="f_item">
            <a href="https://github.com/RAINeko256/gacalc">
              <Fab
                variant="extended"
                size="medium"
                color="secondary"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} size="2x"/>
                RAINeko256
              </Fab>
            </a>
          </div>
        </div>
        <p>
          ※当サイトの内容により生じた損害等の一切について責任を負いかねますのでご了承ください。
        </p>
        <p>Copyrights (c) RAINeko</p>
      </div>
    </div>
  );
}

export default Footer;
