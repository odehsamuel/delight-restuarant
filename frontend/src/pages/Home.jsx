import SpecialOffers from "../components/SpecialOffers";
import ChefList from "../components/ChefList";
import Newsletter from "../components/Newsletter";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Services from "./Menu";
import Reservation from "../components/Reservation";
import Story from "../components/Story";
import Guests from "../components/Guests";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const heroVariants = {
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

  const headerTextVariant = {
    hidden: {
      y: "-100vh",
    },
    visible: {
      y: 0,
      transition: {
        // delay: 0.5,
        duration: 0.8,
      },
    },
  };

  const textVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        // delay: 0.5,
        duration: 0.8,
      },
    },
  };

  const reserveVariants = {
    hidden: {
      y: "100vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        // delay: 0.5,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="bg-gray-background">
      <NavBar />
      <motion.section
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-section">
          <div className="text-gray-white mx-auto py-[4rem] w-[42rem]">
            <p className="bg-[var(--circle-1)] rounded-full h-24 w-24"></p>
            <div className="text-center w-[36rem] mx-auto ml-20">
              <motion.h3
                className="text-5xl font-bold"
                variants={headerTextVariant}
              >
                Welcome to Culinary Excellence
              </motion.h3>
              <motion.p className="py-8 font-bold" variants={textVariant}>
                Experience extraordinary flavors crafted by world-class chefs in
                an elegant atmosphere.
              </motion.p>
              <motion.div variants={reserveVariants}>
                <Link
                  to={"/menu"}
                  className="bg-gold-primary hover:bg-gold-secondary inline-block transition hover:-translate-y-1 text-gray-white rounded-3xl px-6 py-3 mr-4"
                >
                  View Our Menu
                </Link>
                <Link
                  to={"/#reserve"}
                  className=" transition inline-block hover:-translate-y-1 border-2 border-gray-border text-gray-white rounded-3xl px-6 py-3 ml-4"
                >
                  Make Reservation
                </Link>
              </motion.div>
            </div>
            <p className="bg-[var(--circle-2)] rounded-full h-24 w-24 ml-[40rem]"></p>
          </div>
        </div>
      </motion.section>
      <Story />
      <SpecialOffers />
      {/* <Services /> */}
      <Guests />
      <ChefList />
      <Reservation />
      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
}

export default Home;
