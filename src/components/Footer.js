import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-main-menu">
      <div className="about-container">
        <h3>Logo</h3>
        <p>
          <span>DefinitelYou Store</span> was created in 2009 in the United
          Kingdom setting out on a mission to bring vintage inspired clothing to
          the general public at an affordable price and unmatched quality. Not
          just for women but kids too! Tell me more.
        </p>
      </div>
      <div className="useful-links">
        <h3>Useful Links</h3>
        <div className="links">
          <Link>About Us</Link>
          <Link>Search</Link>
          <Link>Account</Link>
        </div>
      </div>
      <div className="help">
        <h3>Help</h3>
        <div className="help-links">
          <Link>Contact Us</Link>
          <Link>FAQ's</Link>
        </div>
      </div>
      <div className="joinus-container">
        <h3>Join Us</h3>
        <p>
          Be the first to know about sales, new product launches and exclusive
          offers!
        </p>
        <div className="input-container">
        <input type="email" placeholder="Your Email" />
        <button className="join-btn">Join</button>
      </div>
      </div>
      </div>

        <p className="copy-right">Definitely You &copy;copyright 2023.</p>
      
     
    </footer>
  );
}

export default Footer;
