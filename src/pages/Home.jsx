import SpecialOffers from "../components/SpecialOffers";
import ChefList from "../components/ChefList";
import Newsletter from "../components/Newsletter";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Services from "./Services";
import Reservation from "../components/Reservation";
import Story from "../components/Story";
import Guests from "../components/Guests";

function Home() {
  return (
    <div className="bg-gray-background">
      <NavBar />
      <section>
        {/* <div className="content-container">
          <div className="content-header">
            <div className="discount__loading-2"></div>
            <div className="discount__loading-1"></div>
            <div className="discount__announcer">
              <p>
                <span>-30</span>% off sales
              </p>
            </div>
            <h1 className="content-header-title">What do you Delight...?</h1>
          </div>
        </div> */}
        <div className="hero-section">
          <div className="text-gray-white mx-auto py-[4rem] w-[42rem]">
            <p className="bg-[var(--brown-warm)] rounded-full h-24 w-24"></p>
            <div className="text-center w-[36rem] mx-auto ml-20">
              <h3 className="text-5xl font-bold">
                Welcome to Culinary Excellence
              </h3>
              <p className="py-8 font-bold">
                Experience extraordinary flavors crafted by world-class chefs in
                an elegant atmosphere.
              </p>
              <p>
                <span className="bg-gold-secondary text-gray-white rounded-3xl px-6 py-3 mr-4">
                  View Our Menu
                </span>
                <span className="border-2 border-gray-border text-gray-white rounded-3xl px-6 py-3 ml-4">
                  Make Reservation
                </span>
              </p>
            </div>
            <p className="bg-[var(--brown-warm)] rounded-full h-24 w-24 ml-[40rem]"></p>
          </div>
        </div>
      </section>
      <Story />
      <SpecialOffers />
      <Services />
      <Guests />
      <ChefList />
      <Reservation />
      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
}

export default Home;
