import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <h6>Contact Information</h6>
      <div className="portfolio-resume-contact-info">
        <a href={"mailto:#"}><i className="fa fa-envelope" aria-hidden="true"></i>vssteere@gmail.com</a>
      </div>
      <div className="portfolio-resume-contact-info">
        {/* <a href="tel:+18036068902"><i className="fa fa-phone" aria-hidden="true"></i>803.606.8902</a> */}
        <a href={"tel:+18036068902"}><i className="fa fa-phone" aria-hidden="true"></i>803.606.8902</a>
      </div>
                
    </footer>
  );
}

export default Footer;