import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import togggleIcon from "../assets/images/hamburger.png";
import { useState } from "react";
import RegModal from "./RegModal";

function NavBar() {
  const [loggedIn, setloggedIn] = useState(false);
  const [opened, setOpened] = useState(false);
  const [title, setTitle] = useState("");

  return (
    <>
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
        {/* <div>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <img src={togggleIcon} alt="toggle-icon" className="w-10 h-10" />
        </button> */}

        {/* <div
          class="offcanvas offcanvas-start"
          data-bs-scroll="true"
          tabindex="-1"
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
              Backdrop with scrolling
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <p>
              Try scrolling the rest of the page to see this option in action.
            </p>
          </div>
        </div> */}
        {/* </div> */}
        {/* <div className="hamburger__container">
        <span></span>
        <span></span>
        <span></span>
      </div> */}
        {/* <Sidebar/> */}
      </nav>
    </>
  );
}

export default NavBar;
