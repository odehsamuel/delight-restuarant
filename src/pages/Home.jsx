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

function Home() {
  return (
    <div className="bg-gray-background">
      <NavBar />
      <section>
        <div className="hero-section">
          <div className="text-gray-white mx-auto py-[4rem] w-[42rem]">
            <p className="bg-[var(--circle-1)] rounded-full h-24 w-24"></p>
            <div className="text-center w-[36rem] mx-auto ml-20">
              <h3 className="text-5xl font-bold">
                Welcome to Culinary Excellence
              </h3>
              <p className="py-8 font-bold">
                Experience extraordinary flavors crafted by world-class chefs in
                an elegant atmosphere.
              </p>
              <div>
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
              </div>
            </div>
            <p className="bg-[var(--circle-2)] rounded-full h-24 w-24 ml-[40rem]"></p>
          </div>
        </div>
      </section>
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
