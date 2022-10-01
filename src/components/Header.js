import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="info">
        <span className="email">definitlyyou@gmail.com</span>
        <span className="number">0304-34343434</span>
      </div>
      <nav>
        <div className="logo">
          <span>LOGO</span>
        </div>
        <div className="menuitems">
          <Link to={''}>Home</Link>
          <Link to={''}>About</Link>
          <Link to={''}>Shalwar Kameez</Link>
          <Link to={''}>Frocks</Link>
          <Link to={''}>Fancy dress</Link>
          <Link to={''}>unstitched fabric</Link>
        </div>
        <div className="profile">
          <span>cart</span>
          <span>
            <select name="profile" id="profile">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
