import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import togggleIcon from "../assets/images/hamburger.png";
import { useState } from "react";
import RegModal from "./RegModal";

function NavBar() {
  const [loggedIn, setloggedIn] = useState(true);
  const [opened, setOpened] = useState(false);
  const [title, setTitle] = useState("");
  const [openSidebar, setOpensidebar] = useState(false);

  return (
    <>
      {/* {openSidebar && <Sidebar closeModal={() => setOpensidebar(false)} />}
      {opened && <RegModal name={title} closeModal={() => setOpened(false)} />} */}
      <nav className="bg-dark-secondary z-10 flex fixed justify-between px-16 py-8 w-full">
        <Link to="/" className="">
          <h3 className="text-gold-secondary text-4xl">Delightful Kitchen</h3>
          {/* <i className="fa fa-cutlery logo fa-2x" aria-hidden="true"></i> */}
          {/* <img src="images/home.png" alt="logo image" /> */}
        </Link>
        <div className="text-gray-white flex items-center">
          <Link to="/about" className="mx-4 hover:text-gold-secondary">
            <p>About</p>
          </Link>
          <Link to="/menu" className="mx-4 hover:text-gold-secondary">
            <div className="menu-dropdown">
              <p>Menu</p>
              {/* <img src="/images/down-arrow.png" alt="arrow-down" /> */}
            </div>
          </Link>
          <Link to="/chefs" className="mx-4 hover:text-gold-secondary">
            <p>Chefs</p>
          </Link>
          <Link to="/contact" className="mx-4 hover:text-gold-secondary">
            <p>Contact</p>
          </Link>
        </div>
        {loggedIn ? (
          <button className="bg-gold-secondary text-gray-white rounded-3xl px-8 py-2">
            Reserve Table
          </button>
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

        {/* <div
          className="w-12 h-8 flex flex-col items-center justify-between"
          onClick={() => setOpensidebar(true)}
        >
          <span className="w-full h-0.5 bg-slate-100"></span>
          <span className="w-full h-0.5 bg-slate-100"></span>
          <span className="w-full h-0.5 bg-slate-100"></span>
        </div> */}
      </nav>
    </>
  );
}

export default NavBar;
