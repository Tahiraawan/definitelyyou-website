import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  PhoneOutlined,
  MailTwoTone,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons";

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <div className="info">
        <div className="email">
          <MailTwoTone className="input-icon" />
          <span>definitlyyou@gmail.com</span>
        </div>
        <div className="number">
          <PhoneOutlined className="input-icon" />
          <span>0304-34343434</span>
        </div>
      </div>
      <nav>
        <div className="logo">
          <span>LOGO</span>
        </div>
        <div className="menu-container">
          <div className="menu">
            <ul className="menuitems">
              <li>
                <Link to={"/login"}>Home</Link>
              </li>
              <li>
                <Link to={""}>About</Link>
              </li>
              <li>
                <Link to={""}>Shalwar Kameez</Link>
              </li>
              <li>
                <Link to={""}>Frocks</Link>
              </li>
              <li>
                <Link to={""}>Fancy dress</Link>
              </li>
              <li>
                <Link to={""}>unstitched fabric</Link>
              </li>
            </ul>

            <MenuOutlined className="menu-icon" />
          </div>
          <div className="left-menu">
            <div className="cart-container" onClick={() => navigate("/cart")}>
              <ShoppingCartOutlined className="input-icon" />
              <div className="badge">
                <span>1</span>
              </div>
            </div>
            <select name="profile" id="profile">
              <option value="mercedes">
                <Link to={"/login"}>Profile</Link>
              </option>
              <option value="mercedes">
                <Link to={"/logout"}>Logout</Link>
              </option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
