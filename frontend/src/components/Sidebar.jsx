import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Sidebar({ closeModal }) {
  const sideVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {},
    },
  };

  const firstVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const secondVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const thirdVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.9,
      },
    },
  };

  const fourthVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        duration: 1.1,
      },
    },
  };

  return (
    <div>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-65 z-40"
        onClick={closeModal}
      ></div>
      <motion.div
        className="bg-gray-medium w-3/4 z-50 top-0 right-0 bottom-0 fixed p-8"
        variants={sideVariant}
        initial="hidden"
        animate="visible"
      >
        {/* list of navigation menues/links */}
        <span
          className="w-8 h-8 p-6 mb-4 flex justify-center items-center rounded-full text-3xl font-semibold text-gray-white bg-gold-primary cursor-pointer"
          onClick={closeModal}
        >
          X
        </span>
        <div className="text-gray-white flex flex-col space-y-4">
          <motion.span variants={firstVariant}>
            <Link
              to="/about"
              className="hover:text-gold-secondary w-fit list-item"
            >
              About
            </Link>
          </motion.span>
          <motion.span variants={secondVariant}>
            <Link
              to="/menu"
              className="hover:text-gold-secondary w-fit list-item"
            >
              Menu
            </Link>
          </motion.span>
          <motion.span variants={thirdVariant}>
            <Link
              to="/chefs"
              className="hover:text-gold-secondary w-fit list-item"
            >
              Chefs
            </Link>
          </motion.span>
          <motion.span variants={fourthVariant}>
            <Link
              to="/contact"
              className="hover:text-gold-secondary w-fit list-item"
            >
              Contact
            </Link>
          </motion.span>
        </div>
        <p className="absolute bottom-0 translate-x-1/3 text-gray-white py-4">
          &copy; {new Date().getFullYear()} Delightful Kitchen. All rights
          reserved.
        </p>
      </motion.div>
    </div>
  );
}

export default Sidebar;
