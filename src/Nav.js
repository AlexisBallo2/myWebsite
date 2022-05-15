import "./css/default.css";
import "./css/fonts.css";
import "./css/layout.css";
import "./css/magnific-popup.css";
import "./css/media-queries.css";
import AnchorLink from "antd/lib/anchor/AnchorLink";

import { HashLink as Link } from "react-router-hash-link";

function Nav() {
  return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#" title="Hide navigation">
        Hide navigation
      </a>
      <ul id="nav" className="nav">
        <li className="navoptions">
          <Link to="/home#home">home</Link>
        </li>
        <li className="navoptions">
          <Link to="/home#resume">resume</Link>
        </li>
        <li className="navoptions">
          <Link to="/home#testimonials">testimonials</Link>
        </li>
        <li className="navoptions">
          <Link to="/home#contact">contact</Link>
        </li>
        <li className="navoptions">
          <Link to="/portfolio">portfolio</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
