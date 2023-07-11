import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footersectionhome">
      {/* about us footer page */}
      <div className="aboutandicons">
        <a className="aboutustxt" href="">
          About Us
        </a>
        <div className="abouticonsdiv">
          <a className="paddingrighticons" href="">
            <FontAwesomeIcon
              icon={faLocationDot}
              bounce
              style={{ color: "#ffffff", height: "25px", width: "25px" }}
            />
          </a>
          <a className="paddingrighticons" href="">
            <FontAwesomeIcon
              icon={faEnvelope}
              beatFade
              style={{ color: "#ffffff", height: "25px", width: "25px" }}
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faPhone}
              shake
              style={{ color: "#ffffff", height: "25px", width: "25px" }}
            />
          </a>
        </div>
      </div>
      <p className="copyright">Copyright @ 2023</p>
    </footer>
  );
};

export default Footer;
