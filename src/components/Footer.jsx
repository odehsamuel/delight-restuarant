import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__container-content">
          <div className="content">
            <h1>ABOUT US</h1>
            <ul className="content-lists">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>
                <i className="fa fa-map-marker" aria-hidden="true"></i>35b
                Kingstown city
              </li>
              <li>
                <i className="fa fa-phone" aria-hidden="true"></i>+234 813 4892
                583
              </li>
              <li>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                restuarantname@gmail.com
              </li>
            </ul>
          </div>
          <div className="content">
            <h1>CATEGORIES</h1>
            <ul className="content-lists">
              <li>Home-made Delicacies</li>
              <li>Cakes</li>
              <li>Sea Food</li>
              <li>Drinks</li>
            </ul>
          </div>

          <div className="content">
            <h1>INFORMATION</h1>
            <ul className="content-lists">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms and Condition</li>
            </ul>
          </div>

          <div className="content">
            <h1>SERVICES</h1>
            <ul className="content-lists">
              <li>Fast Delivery</li>
              <li>Secured Payment</li>
              <li>Hosting of Parties, Ceremonies, Birthdays etc</li>
              <li>Gifts and More...</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="social-media">
        <a href="#">
          <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-whatsapp fa-lg" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
