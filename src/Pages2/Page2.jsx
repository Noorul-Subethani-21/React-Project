import React from "react";
import "./Page2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <div className="box">
      <br />
      <div className="navbar">
        <h3 className="heading">Step 1 : Niche Products</h3>
        <div className="icons">
          <FontAwesomeIcon icon={faAngleDown} className="arrow-down-icon" />
        </div>
      </div>
      <br />
      <div className="navbar">
        <h3 className="heading">Step 2 : Get Hosting & Domain</h3>
        <div className="icon">
          <FontAwesomeIcon icon={faAngleDown} className="arrow-down-icon" />
        </div>
      </div>
      <div className="column">
        <div className="bar">
          <div className="left-bar">
            <h5>Choosing your Hosting and Domain</h5>
            <p>1.Pick a name of Your Site</p>
            <button className="button1">QuickTschy.com</button>
            <button className="button2">Check Availability</button>
            <div className="green-box">
            <div className="icon">
            <FontAwesomeIcon  icon={faCheck}  className="ml-4 text-4" /> 
            QuickTschy.com
            </div>
             <p className="ml-4">Avaliable Now</p>
              <button className="ml-4">Get In Now</button>
            </div>
            <div className="green-box">
            <div className="icon">
            <FontAwesomeIcon  icon={faCheck}  className="ml-4 text-4" /> 
            QuickTschy.co
            </div>
              <p className="ml-4">Avaliable Now</p>
              <button className="ml-4">Get In Now</button>
            </div>
            <div className="green-box">
            <div className="icon">
            <FontAwesomeIcon  icon={faCheck}  className="ml-4 text-4" /> 
            QuickTschy.in
            </div>
              <p className="ml-4">Avaliable Now</p>
              <button className="ml-4">Get In Now</button>
            </div>
            <div className="content">
              <h5>2. Get Hosting with Free Domain.</h5>
              <p>
                Once you find your site the name next step is to get Hosting
                &domain. The domain is the name of your site and hosting
                Products your website on the internet
              </p>
              <button>Get Hosting & Free Domain</button>
            </div>
          </div>
        </div>
        <div className="bars">
          <div className="right-bar">
            <h5>Choosing your Hosting and Domain</h5>
            <p>1.Pick a name of Your Site</p>
            <button className="button1">QuickTschy.com</button>
            <button className="button2">Check Availability</button>
            <div className="red-box">
            <div className="icon">
            <FontAwesomeIcon  icon={faTimes}  className="ml-4 text-4" /> 
            example.com
            </div>
              <p>Not Available</p>
            </div>
            <div className="red-box">
            <div className="icon">
            <FontAwesomeIcon  icon={faTimes}  className="ml-4 text-4" /> 
            example.co
            </div>
              <p>Not Available</p>
            </div>
            <div className="red-box">
            <div className="icon">
            <FontAwesomeIcon  icon={faTimes} className="ml-4 text-4" /> 
            example.in
            </div>
              <p>Not Available</p>
            </div>
          </div>
          <div className="content">
            <h5>2. Get Hosting with Free Domain.</h5>
            <p>
              Once you find your site the name next step is to get Hosting
              &domain. The domain is the name of your site and hosting Products
              your website on the internet
            </p>
            <button>Get Hosting & Free Domain</button>
          </div>
        </div>
      </div>
      <br />
      <div className="navbar">
        <h3 className="heading">Step 3 : Finding keywords</h3>
        <div className="icons">
          <FontAwesomeIcon icon={faAngleDown} className="arrow-down-icon" />
        </div>
      </div>
      <br />
      <div className="navbar">
        <h3 className="heading">Step 4 : Find tha number of Searches</h3>
        <div className="icons">
          <FontAwesomeIcon icon={faAngleDown} className="arrow-down-icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
