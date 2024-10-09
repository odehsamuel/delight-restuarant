import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import togggleIcon from "../assets/images/hamburger.png";
import { useState } from "react";
import RegModal from "./RegModal";

function NavBar() {
  const [loggedIn, setloggedIn] = useState(false);
  const [opened, setOpened] = useState(false);
  const [title, setTitle] = useState("");
  const [openSidebar, setOpensidebar] = useState(false);

  return (
    <>
      {openSidebar && <Sidebar closeModal={() => setOpensidebar(false)} />}
      {opened && <RegModal name={title} closeModal={() => setOpened(false)} />}
      <nav className="nav-items w-full">
        <Link to="/" className="logo-container">
          <i className="fa fa-cutlery logo fa-2x" aria-hidden="true"></i>
          {/* <img src="images/home.png" alt="logo image" /> */}
        </Link>
        <div className="navigations">
          <Link to="/services">
            <div className="service-dropdown">
              <p>Services</p>
              {/* <img src="/images/down-arrow.png" alt="arrow-down" /> */}
            </div>
          </Link>
          <ul className="services">
            <li>Reservations</li>
            <li>Delivery</li>
            <li>Bookings</li>
          </ul>
          <Link to="/chefs">
            <p>Chefs</p>
          </Link>
          <Link to="/reviews">
            <p>Reviews</p>
          </Link>
          <Link to="/about">
            <p>About</p>
          </Link>
        </div>
        {loggedIn ? (
          <button className="navigations-btn">Order Now</button>
        ) : (
          <div className="flex items-center">
            <button
              onClick={() => {
                setTitle("Login");
                setOpened(true);
              }}
              className="px-4 py-1.5 border bg-blue-400 hover:bg-blue-600 text-slate-100 rounded-md border-blue-600 mr-4"
            >
              Login
            </button>

            <button
              onClick={() => {
                setTitle("Sign Up");
                setOpened(true);
              }}
              className="px-4 py-1.5 border bg-neutral-200 hover:bg-neutral-400 text-slate-800 rounded-md border-neutral-300"
            >
              Sign Up
            </button>
          </div>
        )}

        <div
          className="w-12 h-8 flex flex-col items-center justify-between"
          onClick={() => setOpensidebar(true)}
        >
          <span className="w-full h-0.5 bg-slate-100"></span>
          <span className="w-full h-0.5 bg-slate-100"></span>
          <span className="w-full h-0.5 bg-slate-100"></span>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
