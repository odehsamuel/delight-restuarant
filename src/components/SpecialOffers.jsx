import Noodles from "../assets/images/noodles.jpg";
import Pizza from "../assets/images/pizar.jpg";
import FriedRice from "../assets/images/ceb8478069c206a6d2e68fca82763fea.jpg";
import SausageRoll from "../assets/images/fa58340b287cb01d9c0779e190885f4e.jpg";
import ChineseRecipe from "../assets/images/b37299c474375bdf7c979d11caaa8917.jpg";
import Vegetables from "../assets/images/e5d42f4055e6cf0eb9bb8c42cddc8a8a.jpg";

function SpecialOffers() {
  return (
    <section id="main__services">
      <h1 className="text-center font-bold text-2xl mb-2 mt-6 text-slate-800">
        Special Offers
      </h1>
      <ul className="categories">
        <a href="#" className="py-2">
          <li className="text-restuarant-charcoal py-1 px-4 rounded-xl bg-gold-primary">
            All
          </li>
        </a>
        <a href="#" className="py-2 rounded-md text-gold-200">
          <li>Appetizers</li>
        </a>
        <a href="#" className="py-2 rounded-md text-gold-200">
          <li>Main Course</li>
        </a>
        <a href="#" className="py-2 rounded-md text-gold-200">
          <li>Desserts</li>
        </a>
        <a href="#" className="py-2 rounded-md text-gold-200">
          <li>Beverages</li>
        </a>
        {/* <a href="#">
          <li>Fast-Food</li>
        </a>
        <a href="#">
          <li>Cakes</li>
        </a>
        <a href="#">
          <li>Cafeteria</li>
        </a> */}
      </ul>
      {/* <div className="offer-services">
        <div className="services-container">
          <article className="dish-container">
            <img src={Noodles} alt="dish image" />
            <div className="discount__tag">
              <p>NEW</p>
            </div>
            <div className="dish-details">
              <h1 className="dish-name">Noodles</h1>
              <p>CATEGORY</p>
              <div className="dish__orders-btn">
                <p className="dish-price">$95.00</p>
                <div className="add-to-cart">
                  <a href="">
                    <i
                      className="fa fa-cart-arrow-down fa-lg"
                      aria-hidden="true"
                    ></i>
                    <button>ADD TO CART</button>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="services-container">
          <article className="dish-container">
            <img src={Pizza} alt="dish image" />
            <div className="discount__tag">
              <p>-30%</p>
            </div>
            <div className="dish-details">
              <h1 className="dish-name">Pizza</h1>
              <p>CATEGORY</p>
              <div className="dish__orders-btn">
                <p className="dish-price">$105.00</p>
                <div className="add-to-cart">
                  <a href="">
                    <i
                      className="fa fa-cart-arrow-down fa-lg"
                      aria-hidden="true"
                    ></i>
                    <button>ADD TO CART</button>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="services-container">
          <article className="dish-container">
            <img
              src={FriedRice}
              alt="dish image"
            />
            <div className="dish-details">
              <h1 className="dish-name">Fried Rice</h1>
              <p>CATEGORY</p>
              <div className="dish__orders-btn">
                <p className="dish-price">$99.00</p>
                <div className="add-to-cart">
                  <a href="">
                    <i
                      className="fa fa-cart-arrow-down fa-lg"
                      aria-hidden="true"
                    ></i>
                    <button>ADD TO CART</button>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="services-container">
          <article className="dish-container">
            <img
              src={SausageRoll}
              alt="dish image"
            />
            <div className="dish-details">
              <h1 className="dish-name">Sausage Roll</h1>
              <p>CATEGORY</p>
              <div className="dish__orders-btn">
                <p className="dish-price">$99.00</p>
                <div className="add-to-cart">
                  <a href="">
                    <i
                      className="fa fa-cart-arrow-down fa-lg"
                      aria-hidden="true"
                    ></i>
                    <button>ADD TO CART</button>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="services-container">
          <article className="dish-container">
            <img
              src={ChineseRecipe}
              alt="dish image"
            />
            <div className="dish-details">
              <h1 className="dish-name">Chinese Recipe</h1>
              <p>CATEGORY</p>
              <div className="dish__orders-btn">
                <p className="dish-price">$99.00</p>
                <div className="add-to-cart">
                  <a href="">
                    <i
                      className="fa fa-cart-arrow-down fa-lg"
                      aria-hidden="true"
                    ></i>
                    <button>ADD TO CART</button>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="services-container">
          <article className="dish-container">
            <img
              src={Vegetables}
              alt="dish image"
            />
            <div className="dish-details">
              <h1 className="dish-name">Vegetables</h1>
              <p>CATEGORY</p>
              <div className="dish__orders-btn">
                <p className="dish-price">$85.95</p>
                <div className="add-to-cart">
                  <a href="">
                    <i
                      className="fa fa-cart-arrow-down fa-lg"
                      aria-hidden="true"
                    ></i>
                    <button>ADD TO CART</button>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div> */}
    </section>
  );
}

export default SpecialOffers;
