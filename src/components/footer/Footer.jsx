import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoTime } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";
import "./footer.css"
const Footer = () => {
  return (
    <section className="footer-container">
        <div className="upper-wrapper">
            <div className="contact-info">
                <FaPhoneAlt className="icon"/>
                <div className="info-wrapper">
                    <p>Contact Us:</p>
                    <p>+3154658956</p>  
                </div>
            </div>
            <div className="contact-info">
                <HiOutlineMail className="icon"/>
                <div className="info-wrapper">
                    <p>Email Us</p>
                    <p>bookle@bookle.com</p>  
                </div>
            </div>
            <div className="contact-info">
                <IoTime className="icon"/>
                <div className="info-wrapper">
                    <p>Open At</p>
                    <p>Monday untill Firday</p>  
                </div>
            </div>
            <div className="contact-info">
                <FaLocationDot className="icon"/>
                <div className="info-wrapper">
                    <p>Location</p>
                    <p>KinkerStraart Amsterdam</p>  
                </div>
            </div>
        </div>
        <div className="middle-wrapper">
            <div className="main-info">
                <div className="logo">
                    <img src="./images/logo.png" alt="LOGO" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Facere soluta eum vitae.</p>
                <div className="social-media">
                    <FaFacebookF className="social-icon"/>
                    <FaInstagram className="social-icon"/>
                    <FaTiktok className="social-icon"/> 
                </div>
            </div>
            <div className="footer-kick-tabs">
                <h2>Custumers support</h2>
                <ul>
                    <li>Store List</li>
                    <li>openning Hours</li>
                    <li>Contact Us</li>
                    <li>Protocols and Policy</li>
                </ul>
            </div>
            <div className="footer-kick-tabs">
                <h2>Catagories</h2>
                <ul>
                    <li>Novel Fiction</li>
                    <li>Poetry Books</li>
                    <li>POletical Books</li>
                    <li>History Books</li>
                    <li>History Books</li>
                </ul>
            </div>
            <div className="newsletter">
                <h2>Newsletter</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates id sint optio.</p>
                <div className="form-wrapper">
                    <input type="text" placeholder="subscribe!using email"/>
                    <BsFillSendFill className="newsletter-icon"/>
                </div>
            </div>

        </div>
        <div className="bottom-footer-wrapper">
            <p>© 2025 Bookle. All Rights Reserved.</p>
            <div className='payment-cards'>
                <img src="./images/ing.png" alt="" />
                <img src="./images/mastercard.png" alt="" />
                <img src="./images/paypal.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export  {Footer}