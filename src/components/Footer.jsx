import React from "react";

function Footer() {
  return (
    <footer>
      <div className="bg-dark-secondary py-12 px-8">
        <div className="flex md:flex-row flex-col gap-4 md:justify-evenly">
          <div className="max-w-[20rem] text-gray-white">
            <h1 className="text-gold-primary text-3xl mb-8">Contact Info</h1>
            <ul className="list-none p-0 m-0">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li className="py-2">
                <i
                  className="fa fa-map-marker text-gold-primary mr-4"
                  aria-hidden="true"
                ></i>
                135b Kingstown city, State 12345
              </li>
              <li className="py-2">
                <i
                  className="fa fa-phone text-gold-primary mr-4"
                  aria-hidden="true"
                ></i>
                +234 813 4892 583
              </li>
              <li className="py-2">
                <i
                  className="fa fa-envelope text-gold-primary mr-4"
                  aria-hidden="true"
                ></i>
                delightfulkitchen@gmail.com
              </li>
            </ul>
          </div>
          <div className="max-w-[20rem] text-gray-white">
            <h1 className="text-gold-primary text-3xl mb-8">Hours</h1>
            <ul className="content-lists">
              <li>Monday - Thursday: 5:00PM - 10PM</li>
              <li className="py-2">Friday - Saturday: 5:00PM - 11PM</li>
              <li className="py-2">Sunday: 4:00PM - 9PM</li>
            </ul>
          </div>

          <div className="max-w-[20rem] text-gray-white">
            <h1 className="text-gold-primary text-3xl mb-8">Quick Links</h1>
            <ul className="content-lists">
              <li>Full Menu</li>
              <li className="py-2">Reservations</li>
              <li className="py-2">Private Events</li>
              <li className="py-2">Catering</li>
              <li className="py-2">Privacy Policy</li>
              {/* <li>Terms and Condition</li> */}
            </ul>
          </div>

          <div className="max-w-[20rem] text-gray-white">
            <h1 className="text-gold-primary text-3xl mb-8">Newsletter</h1>
            <ul className="content-lists">
              <p className="mb-4">
                Stay updated with our latest dishes and events
              </p>
              <div className="flex items-center justify-between text-dark-secondary">
                <input
                  type="email"
                  name="email"
                  placeholder="eg. delightfulkitchen@gmail.com"
                  className="text-lg px-2 py-[6px] border-[3px] border-transparent rounded-lg w-40 hover:outline-none focus-visible:border-gold-primary focus-visible:border-[3px] active:outline-none focus-visible:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-gold-primary text-gray-white px-6 py-2.5 rounded-lg"
                >
                  <i className="fa fa-envelope mr-2" aria-hidden="true"></i>
                  Subscribe
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-dark-secondary text-gray-light flex justify-center items-center py-4">
        <a href="#">
          <i
            className="fa fa-facebook fa-lg mx-12 text-2xl hover:text-gold-primary"
            aria-hidden="true"
          ></i>
        </a>
        <a href="#">
          <i
            className="fa fa-whatsapp fa-lg mx-12 text-2xl hover:text-gold-primary"
            aria-hidden="true"
          ></i>
        </a>
        <a href="#">
          <i
            className="fa fa-instagram fa-lg mx-12 text-2xl hover:text-gold-primary"
            aria-hidden="true"
          ></i>
        </a>
        <a href="#">
          <i
            className="fa fa-linkedin fa-lg mx-12 text-2xl hover:text-gold-primary"
            aria-hidden="true"
          ></i>
        </a>
      </div>
      <p className="text-center text-gray-light bg-dark-secondary pb-4">
        @ {new Date().getFullYear()} Delightful Kitchen. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
