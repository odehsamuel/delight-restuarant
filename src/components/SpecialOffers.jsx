import Noodles from "../assets/images/noodles.jpg";
import Pizza from "../assets/images/pizar.jpg";
import FriedRice from "../assets/images/ceb8478069c206a6d2e68fca82763fea.jpg";
import SausageRoll from "../assets/images/fa58340b287cb01d9c0779e190885f4e.jpg";
import ChineseRecipe from "../assets/images/b37299c474375bdf7c979d11caaa8917.jpg";
import Vegetables from "../assets/images/e5d42f4055e6cf0eb9bb8c42cddc8a8a.jpg";

function SpecialOffers() {
  return (
    <section className="bg-[var(--border-color)]">
      <div className="container mx-auto px-4">
        <h1 className="text-center font-bold text-4xl pb-6 pt-6 text-slate-800">
          Special Offers
        </h1>
        <ul className="flex justify-center text-gold-primary pb-16">
          <a
            href="#"
            className="py-2 px-8 mx-4 rounded-3xl border-2 border-gold-primary bg-gold-primary text-gray-white"
          >
            <li className="">All</li>
          </a>
          <a
            href="#"
            className="py-2 px-8 mx-4 rounded-3xl border-2 border-gold-primary hover:bg-gold-primary hover:text-gray-white"
          >
            <li>Appetizers</li>
          </a>
          <a
            href="#"
            className="py-2 px-8 mx-4 rounded-3xl border-2 border-gold-primary hover:bg-gold-primary hover:text-gray-white"
          >
            <li>Main Course</li>
          </a>
          <a
            href="#"
            className="py-2 px-8 mx-4 rounded-3xl border-2 border-gold-primary hover:bg-gold-primary hover:text-gray-white"
          >
            <li>Desserts</li>
          </a>
          <a
            href="#"
            className="py-2 px-8 mx-4 rounded-3xl border-2 border-gold-primary hover:bg-gold-primary hover:text-gray-white"
          >
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
      </div>
      <div className="offer-services">
        <div className="transition hover:-translate-y-4">
          <article className="shadow-lg rounded-xl overflow-hidden">
            <div className="relative">
              <img
                src={Pizza}
                alt="Dish Image"
                className="object-cover w-full h-80"
              />
              <div className="bg-[var(--info)] text-gray-white px-3 py-1 rounded-2xl absolute top-1 right-1">
                <p>New</p>
              </div>
            </div>
            <div className="dish-details">
              <div className="flex justify-between mb-4">
                <h1 className="text-4xl">Truffle Margherita Pizza</h1>
                <p className="text-gold-primary text-3xl">$18</p>
              </div>
              <p className="mb-8">
                Hand-pulled noodles tossed in our signature spicy Szechuan sauce
                with fresh vegetables, tender beef, and aromatic spices. A
                perfect balance of heat and flavor
              </p>
              <div className="food-labels">
                <div className="flex items-center">
                  <span className="rounded-full bg-gold-primary w-6 h-6 flex items-center justify-center">
                    ⏱️
                  </span>
                  <p>15-20mins</p>
                </div>
                <div className="flex items-center">
                  <span className="rounded-full bg-gold-primary w-6 h-6 flex items-center justify-center">
                    🥜
                  </span>
                  <p>Peanut Sauce</p>
                </div>
                <div className="flex items-center">
                  <span className="rounded-full bg-gold-primary w-6 h-6 flex items-center justify-center">
                    🌶️
                  </span>
                  <p>Medium Spicy</p>
                </div>
              </div>
              <div className="dietary-tags">
                <p className="text-[var(--vegan-text)] bg-[var(--vegan-bg)] text-center px-2 py-1 text-[16px] rounded-3xl">
                  Vegan
                </p>

                <p className="text-[var(--gluten-free-text)] bg-[var(--gluten-free-bg)] text-center px-2 py-1 text-[16px] rounded-3xl">
                  Gluton Free
                </p>
                <p className="text-[var(--spicy-text)] bg-[var(--spicy-bg)] text-center px-2 py-1 text-[16px] rounded-3xl">
                  Spicy
                </p>
              </div>
              <div className="flex justify-between items-center mb-8">
                <p>
                  <span className="text-gold-primary">⭐⭐⭐⭐⭐</span>(4.89)
                  128 reviews
                </p>
                <p className="text-gold-primary">Chefs signature</p>
              </div>
              <div className="flex justify-between">
                <p className="bg-gold-primary text-gray-white border-2 py-2 px-6 rounded-3xl">
                  Add to Cart
                </p>
                <p className="texrt-gold-primary border-2 border-gold-primary py-2 px-6 rounded-3xl">
                  Customize
                </p>
                <p className="border-2 rounded-full w-12 h-12 flex items-center justify-center">
                  <i className="fa fa-heart-o"></i>
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="transition hover:-translate-y-4">
          <article className="shadow-lg rounded-xl overflow-hidden">
            <div className="relative">
              <img
                src={FriedRice}
                alt="Dish Image"
                className="object-cover w-full h-80"
              />
              <div className="bg-[var(--success)] text-gray-white px-3 py-1 rounded-2xl absolute top-1 right-1">
                <p>Popular</p>
              </div>
            </div>
            <div className="dish-details">
              <div className="flex justify-between mb-4">
                <h1 className="text-4xl">Seafood Fried Rice</h1>
                <p className="text-gold-primary text-3xl">$18</p>
              </div>
              <p className="mb-8">
                Hand-pulled noodles tossed in our signature spicy Szechuan sauce
                with fresh vegetables, tender beef, and aromatic spices. A
                perfect balance of heat and flavor
              </p>
              <div className="food-labels">
                <div className="flex items-center">
                  <span className="rounded-full bg-gold-primary w-6 h-6 flex items-center justify-center">
                    ⏱️
                  </span>
                  <p>15-20mins</p>
                </div>
                <div className="flex items-center">
                  <span className="rounded-full bg-gold-primary w-6 h-6 flex items-center justify-center">
                    🥜
                  </span>
                  <p>Peanut Sauce</p>
                </div>
                <div className="flex items-center">
                  <span className="rounded-full bg-gold-primary w-6 h-6 flex items-center justify-center">
                    🌶️
                  </span>
                  <p>Medium Spicy</p>
                </div>
              </div>
              <div className="dietary-tags">
                <p className="text-[var(--vegan-text)] bg-[var(--vegan-bg)] text-center px-2 py-1 text-[16px] rounded-3xl">
                  Vegan
                </p>

                <p className="text-[var(--gluten-free-text)] bg-[var(--gluten-free-bg)] text-center px-2 py-1 text-[16px] rounded-3xl">
                  Gluton Free
                </p>
                <p className="text-[var(--spicy-text)] bg-[var(--spicy-bg)] text-center px-2 py-1 text-[16px] rounded-3xl">
                  Spicy
                </p>
              </div>
              <div className="flex justify-between items-center mb-8">
                <p>
                  <span className="text-gold-primary">⭐⭐⭐⭐⭐</span>(4.89)
                  128 reviews
                </p>
                <p className="text-gold-primary">Chefs signature</p>
              </div>
              <div className="flex justify-between">
                <p className="bg-gold-primary text-gray-white border-2 py-2 px-6 rounded-3xl">
                  Add to Cart
                </p>
                <p className="texrt-gold-primary border-2 border-gold-primary py-2 px-6 rounded-3xl">
                  Customize
                </p>
                <p className="border-2 rounded-full w-12 h-12 flex items-center justify-center">
                  <i className="fa fa-heart-o"></i>
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="transition hover:-translate-y-4">
          <article className="shadow-lg rounded-xl overflow-hidden">
            <div className="relative">
              <img
                src={SausageRoll}
                alt="Dish Image"
                className="object-cover w-full h-80"
              />
              <div className="bg-[var(--error)] text-gray-white px-3 py-1 rounded-2xl absolute top-1 right-1">
                <p>-30%</p>
              </div>
            </div>
            <div className="dish-details">
              <div className="flex justify-between mb-4">
                <h1 className="text-4xl">Vietnamese Spring Rolls</h1>
                <p className="text-gold-primary text-3xl">$18</p>
              </div>
              <p className="mb-8">
                Hand-pulled noodles tossed in our signature spicy Szechuan sauce
                with fresh vegetables, tender beef, and aromatic spices. A
                perfect balance of heat and flavor
              </p>
              <div className="food-labels">
                <div className="flex items-center">
                  <span className="rounded-full bg-gold-primary w-6 h-6 flex items-center justify-center">
                    ⏱️
                  </span>
                  <p>15-20mins</p>
                </div>
                <div className="flex items-center">
                  <span className="rounded-full bg-gold-primary w-6 h-6 flex items-center justify-center">
                    🥜
                  </span>
                  <p>Peanut Sauce</p>
                </div>
                <div className="flex items-center">
                  <span className="rounded-full bg-gold-primary w-6 h-6 flex items-center justify-center">
                    🌶️
                  </span>
                  <p>Medium Spicy</p>
                </div>
              </div>
              <div className="dietary-tags">
                <p className="text-[var(--vegetarian-text)] bg-[var(--vegetarian-bg)] text-center px-2 py-1 text-[16px] rounded-3xl">
                  Vegetarrian
                </p>

                <p className="text-[var(--gluten-free-text)] bg-[var(--gluten-free-bg)] text-center px-2 py-1 text-[16px] rounded-3xl">
                  Gluton Free
                </p>
                {/* <p className="text-[var(--spicy-text)] bg-[var(--spicy-bg)] text-center px-2 py-1 text-[16px] rounded-3xl">
                  Spicy
                </p> */}
              </div>
              <div className="flex justify-between items-center mb-8">
                <p>
                  <span className="text-gold-primary">⭐⭐⭐⭐⭐</span>(4.89)
                  128 reviews
                </p>
                <p className="text-gold-primary">Chefs signature</p>
              </div>
              <div className="flex justify-between">
                <p className="bg-gold-primary text-gray-white border-2 py-2 px-6 rounded-3xl">
                  Add to Cart
                </p>
                <p className="texrt-gold-primary border-2 border-gold-primary py-2 px-6 rounded-3xl">
                  Customize
                </p>
                <p className="border-2 rounded-full w-12 h-12 flex items-center justify-center">
                  <i className="fa fa-heart-o"></i>
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="transition hover:-translate-y-4">
          <article className="shadow-lg rounded-xl overflow-hidden">
            <div className="relative">
              <img
                src={Vegetables}
                alt="Dish Image"
                className="object-cover w-full h-80"
              />
              {/* <div className="bg-[var(--error)] text-gray-white px-3 py-1 rounded-2xl absolute top-1 right-1">
                <p>-30%</p>
              </div> */}
            </div>
            <div className="dish-details">
              <div className="flex justify-between mb-4">
                <h1 className="text-4xl">Meditarranean Grilled Vegetables</h1>
                <p className="text-gold-primary text-3xl">$18</p>
              </div>
              <p className="mb-8">
                Hand-pulled noodles tossed in our signature spicy Szechuan sauce
                with fresh vegetables, tender beef, and aromatic spices. A
                perfect balance of heat and flavor
              </p>
              <div className="food-labels">
                <div className="flex items-center">
                  <span className="rounded-full bg-gold-primary w-6 h-6 flex items-center justify-center">
                    ⏱️
                  </span>
                  <p>15-20mins</p>
                </div>
                <div className="flex items-center">
                  <span className="rounded-full bg-gold-primary w-6 h-6 flex items-center justify-center">
                    🥜
                  </span>
                  <p>Peanut Sauce</p>
                </div>
                <div className="flex items-center">
                  <span className="rounded-full bg-gold-primary w-6 h-6 flex items-center justify-center">
                    🌶️
                  </span>
                  <p>Medium Spicy</p>
                </div>
              </div>
              <div className="dietary-tags">
                <p className="text-[var(--vegan-text)] bg-[var(--vegan-bg)] text-center px-2 py-1 text-[16px] rounded-3xl">
                  Vegan
                </p>

                <p className="text-[var(--gluten-free-text)] bg-[var(--gluten-free-bg)] text-center px-2 py-1 text-[16px] rounded-3xl">
                  Gluton Free
                </p>
                <p className="text-[var(--spicy-text)] bg-[var(--spicy-bg)] text-center px-2 py-1 text-[16px] rounded-3xl">
                  Spicy
                </p>
              </div>
              <div className="flex justify-between items-center mb-8">
                <p>
                  <span className="text-gold-primary">⭐⭐⭐⭐⭐</span>(4.89)
                  128 reviews
                </p>
                <p className="text-gold-primary">Chefs signature</p>
              </div>
              <div className="flex justify-between">
                <p className="bg-gold-primary text-gray-white border-2 py-2 px-6 rounded-3xl">
                  Add to Cart
                </p>
                <p className="texrt-gold-primary border-2 border-gold-primary py-2 px-6 rounded-3xl">
                  Customize
                </p>
                <p className="border-2 rounded-full w-12 h-12 flex items-center justify-center">
                  <i className="fa fa-heart-o"></i>
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="transition hover:-translate-y-4">
          <article className="shadow-lg rounded-xl overflow-hidden">
            <div className="relative">
              <img
                src={SausageRoll}
                alt="Dish Image"
                className="object-cover w-full h-80"
              />
              <div className="bg-[var(--error)] text-gray-white px-3 py-1 rounded-2xl absolute top-1 right-1">
                <p>-30%</p>
              </div>
            </div>
            <div className="dish-details">
              <div className="flex justify-between mb-4">
                <h1 className="text-4xl">Vietnamese Spring Rolls</h1>
                <p className="text-gold-primary text-3xl">$18</p>
              </div>
              <p className="mb-8">
                Hand-pulled noodles tossed in our signature spicy Szechuan sauce
                with fresh vegetables, tender beef, and aromatic spices. A
                perfect balance of heat and flavor
              </p>
              <div className="food-labels">
                <div className="flex items-center">
                  <span className="rounded-full bg-gold-primary w-6 h-6 flex items-center justify-center">
                    ⏱️
                  </span>
                  <p>15-20mins</p>
                </div>
                <div className="flex items-center">
                  <span className="rounded-full bg-gold-primary w-6 h-6 flex items-center justify-center">
                    🥜
                  </span>
                  <p>Peanut Sauce</p>
                </div>
                <div className="flex items-center">
                  <span className="rounded-full bg-gold-primary w-6 h-6 flex items-center justify-center">
                    🌶️
                  </span>
                  <p>Medium Spicy</p>
                </div>
              </div>
              <div className="dietary-tags">
                <p className="text-[var(--vegan-text)] bg-[var(--vegan-bg)] text-center px-2 py-1 text-[16px] rounded-3xl">
                  Vegan
                </p>

                <p className="text-[var(--gluten-free-text)] bg-[var(--gluten-free-bg)] text-center px-2 py-1 text-[16px] rounded-3xl">
                  Gluton Free
                </p>
                <p className="text-[var(--spicy-text)] bg-[var(--spicy-bg)] text-center px-2 py-1 text-[16px] rounded-3xl">
                  Spicy
                </p>
              </div>
              <div className="flex justify-between items-center mb-8">
                <p>
                  <span className="text-gold-primary">⭐⭐⭐⭐⭐</span>(4.89)
                  128 reviews
                </p>
                <p className="text-gold-primary">Chefs signature</p>
              </div>
              <div className="flex justify-between">
                <p className="bg-gold-primary text-gray-white border-2 py-2 px-6 rounded-3xl">
                  Add to Cart
                </p>
                <p className="texrt-gold-primary border-2 border-gold-primary py-2 px-6 rounded-3xl">
                  Customize
                </p>
                <p className="border-2 rounded-full w-12 h-12 flex items-center justify-center">
                  <i className="fa fa-heart-o"></i>
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="transition hover:-translate-y-4">
          <article className="shadow-lg rounded-xl overflow-hidden">
            <div className="relative">
              <img
                src={Pizza}
                alt="Dish Image"
                className="object-cover w-full h-80"
              />
              {/* <div className="bg-[var(--error)] text-gray-white px-3 py-1 rounded-2xl absolute top-1 right-1">
                <p>-30%</p>
              </div> */}
            </div>
            <div className="dish-details">
              <div className="flex justify-between mb-4">
                <h1 className="text-4xl">Truffle Margherita Pizza</h1>
                <p className="text-gold-primary text-3xl">$18</p>
              </div>
              <p className="mb-8">
                Hand-pulled noodles tossed in our signature spicy Szechuan sauce
                with fresh vegetables, tender beef, and aromatic spices. A
                perfect balance of heat and flavor
              </p>
              <div className="food-labels">
                <div className="flex items-center">
                  <span className="rounded-full bg-gold-primary w-6 h-6 flex items-center justify-center">
                    ⏱️
                  </span>
                  <p>15-20mins</p>
                </div>
                <div className="flex items-center">
                  <span className="rounded-full bg-gold-primary w-6 h-6 flex items-center justify-center">
                    🥜
                  </span>
                  <p>Peanut Sauce</p>
                </div>
                <div className="flex items-center">
                  <span className="rounded-full bg-gold-primary w-6 h-6 flex items-center justify-center">
                    🌶️
                  </span>
                  <p>Medium Spicy</p>
                </div>
              </div>
              <div className="dietary-tags">
                <p className="text-[var(--vegan-text)] bg-[var(--vegan-bg)] text-center px-2 py-1 text-[16px] rounded-3xl">
                  Vegan
                </p>

                <p className="text-[var(--gluten-free-text)] bg-[var(--gluten-free-bg)] text-center px-2 py-1 text-[16px] rounded-3xl">
                  Gluton Free
                </p>
                <p className="text-[var(--spicy-text)] bg-[var(--spicy-bg)] text-center px-2 py-1 text-[16px] rounded-3xl">
                  Spicy
                </p>
              </div>
              <div className="flex justify-between items-center mb-8">
                <p>
                  <span className="text-gold-primary">⭐⭐⭐⭐⭐</span>(4.89)
                  128 reviews
                </p>
                <p className="text-gold-primary">Chefs signature</p>
              </div>
              <div className="flex justify-between">
                <p className="bg-gold-primary text-gray-white border-2 py-2 px-6 rounded-3xl">
                  Add to Cart
                </p>
                <p className="texrt-gold-primary border-2 border-gold-primary py-2 px-6 rounded-3xl">
                  Customize
                </p>
                <p className="border-2 rounded-full w-12 h-12 flex items-center justify-center">
                  <i className="fa fa-heart-o"></i>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
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
