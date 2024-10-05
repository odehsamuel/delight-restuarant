import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-items">
      <Link to="/" className="logo-container">
        <i className="fa fa-cutlery logo fa-2x" aria-hidden="true"></i>
        {/* <img src="images/home.png" alt="logo image" /> */}
      </Link>
      <div className="navigations">
        <Link to="#main__services">
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
        <Link to="chefs/chef.html">
          <p>Chefs</p>
        </Link>
        <Link to="reviews/reviews.html">
          <p>Reviews</p>
        </Link>
        <Link to="about">
          <p>About</p>
        </Link>
      </div>
      <button className="navigations-btn">Order Now</button>

      {/* <div className="hamburger__container">
        <span></span>
        <span></span>
        <span></span>
      </div> */}
    </nav>
  );
}

export default NavBar;
