import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import togggleIcon from "../assets/images/hamburger.png";
import { useState } from "react";
import RegModal from "./RegModal";
import { delay, motion, vw } from "framer-motion";

function NavBar() {
  const [loggedIn, setloggedIn] = useState(false);
  const [opened, setOpened] = useState(false);
  const [title, setTitle] = useState("");
  const [openSidebar, setOpensidebar] = useState(null);

  const navVariant = {
    hidden: {
      y: "-100vh",
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const logoVariant = {
    hidden: {
      y: "-100vh",
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const loaderVariant = {
    hidden: {
      // x: [0, 20],
      // y: [20, 0],
    },
    visible: {
      // transition: {
      //   x: [-20, 20],
      //   y: [20, -20],
      //   delay: 0.5,
      //   duration: 1,
      // },
    },
  };

  return (
    <>
      {openSidebar && <Sidebar closeModal={() => setOpensidebar(false)} />}
      {/* {opened && <RegModal name={title} closeModal={() => setOpened(false)} />} */}
      <motion.nav
        className="bg-dark-secondary z-10 flex fixed justify-between items-center px-16 py-8 w-full"
        variants={navVariant}
        initial="hidden"
        animate="visible"
      >
        <Link to="/" className="">
          <motion.h3
            className="text-gray-white text-4xl"
            variants={logoVariant}
          >
            Delightful
            <span className="text-gold-secondary">Kitchen</span>
            <motion.span
              className="rounded-full bg-gray-white w-2 h-2 flex"
              variants={loaderVariant}
              animate="hidden"
            ></motion.span>
            {/* <span className="rounded-full bg-gray-white w-2 h-2 flex"></span>
            <span className="rounded-full bg-gray-white w-2 h-2 flex"></span> */}
          </motion.h3>
          {/* <i className="fa fa-cutlery logo fa-2x" aria-hidden="true"></i> */}
          {/* <img src="images/home.png" alt="logo image" /> */}
        </Link>
        <>
          {" "}
          <div className="lg:flex hidden text-gray-white items-center space-x-6">
            <Link to="/about" className="hover:text-gold-secondary">
              About
            </Link>
            <Link to="/menu" className="hover:text-gold-secondary">
              Menu
              {/* <img src="/images/down-arrow.png" alt="arrow-down" /> */}
              {/* categories of the menu */}
            </Link>
            <Link to="/chefs" className="hover:text-gold-secondary">
              Chefs
            </Link>
            <Link to="/contact" className="hover:text-gold-secondary">
              Contact
            </Link>
          </div>
          {loggedIn ? (
            <Link
              to="/#reserve-table"
              className="lg:block hidden bg-gold-primary hover:bg-gold-secondary transition hover:-translate-y-1 text-gray-white rounded-3xl px-8 py-2"
            >
              Reserve Table
            </Link>
          ) : (
            <div className="lg:flex hidden items-center">
              <button
                onClick={() => {
                  setTitle("Login");
                  setOpened(true);
                }}
                className="px-6 py-2 border bg-blue-400 hover:bg-blue-600 transition hover:-translate-y-1 text-slate-100 rounded-3xl border-blue-600 mr-4"
              >
                Login
              </button>

              <button
                onClick={() => {
                  setTitle("Sign Up");
                  setOpened(true);
                }}
                className="px-6 py-2 border bg-neutral-200 hover:bg-neutral-400 transition hover:-translate-y-1 text-slate-800 rounded-3xl border-neutral-300"
              >
                Sign Up
              </button>
            </div>
          )}{" "}
        </>
        <div
          className="lg:hidden w-12 h-8 flex flex-col items-center justify-between"
          onClick={() => setOpensidebar(true)}
        >
          <span className="w-full h-0.5 bg-slate-100"></span>
          <span className="w-full h-0.5 bg-slate-100"></span>
          <span className="w-full h-0.5 bg-slate-100"></span>
        </div>
      </motion.nav>
    </>
  );
}

export default NavBar;
