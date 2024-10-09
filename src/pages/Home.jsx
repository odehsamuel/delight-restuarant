import SpecialOffers from "../components/SpecialOffers";
import ChefList from "../components/ChefList";
import Newsletter from "../components/Newsletter";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Services from "./Services";
import Reservation from "../components/Reservation";

function Home() {
  return (
    <div>
      <NavBar/>
      <section>
        <div className="content-container">
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
        </div>
      </section>
      <SpecialOffers />
      <Services/>
      <ChefList />
      <Reservation/>
      <Newsletter />
      <Footer/>
    </div>
  );
}

export default Home;
