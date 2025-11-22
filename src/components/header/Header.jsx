import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import "./header.css";

const Header = () => {
  return (
    <section className="header-container">
      <div className="logo-container">
        <img src="./images/logo.png" alt="Logo" />
      </div>

      <div className="right-side-wrapper">
        {/* TOP HEADER */}
        <div className="top-header">
          <div className="contact-info">
            <p>+3163568745</p>

            <span className="contact-info-braker"></span>
            <p>bookle@bookle.scom</p>
            <span className="contact-info-braker"></span>

            <p>Open from Monday - Friday</p>
          </div>
          <div className="middle-header">
            <button className="top-btn">Add Cart</button>
            <button className="top-btn">Login</button>
          </div>
        </div>

        {/* BOTTOM HEADER */}
        <div className="bottom-header">
          <nav className="menu-list-wrapper">
            <ul className="menu-list">
              <li>
                <select name="homelist" id="homelist" defaultValue="">
                  <option value="" disabled>
                    Home
                  </option>
                  <option value="home1">Home 1</option>
                  <option value="home2">Home 2</option>
                </select>
              </li>
              <li>
                <select name="shoplist" id="shoplist" defaultValue="">
                  <option value="" disabled>
                    Shop
                  </option>
                  <option value="shop1">Shop 1</option>
                  <option value="shop2">Shop 2</option>
                </select>
              </li>
              <li>
                <select name="pageslist" id="pageslist" defaultValue="">
                  <option value="" disabled>
                    Pages
                  </option>
                  <option value="page1">Page 1</option>
                  <option value="page2">Page 2</option>
                </select>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>

            <div className="cart-fav-wrapper">
              <FaRegHeart className="icon-style" />
              <FaCartArrowDown className="icon-style" />
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export { Header };
