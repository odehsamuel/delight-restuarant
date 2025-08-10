import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import food from "../assets/images/Logo2.jpg";
import delivery from "../assets/images/fast-delivery.png";
import payment from "../assets/images/secure-payment.png";
import sea from "../assets/images/fish.png";
import vegetables from "../assets/images/vegetables.png";
import meals from "../assets/images/serving-dish.png";
import fast from "../assets/images/fast-food.png";
import drinks from "../assets/images/cheers.png";

function Menu() {
  return (
    <>
      <NavBar />
      <section className="bg-gray-border py-24">
        <div className="w-3/4 mx-auto py-10 px-12">
          <div className="text-center rounded-t-xl text-gray-white space-y-2 bg-dark-primary py-16 px-60">
            <h3 className="text-4xl font-medium">Reserve Your table</h3>
            <p>
              Experience culinary excellence in an intimate setting. Book your
              table for an unforgettable evening of fine dining and exceptional
              service.
            </p>
          </div>
          <div className="flex shadow-xl">
            <div className="bg-gray-white w-1/2 p-6 rounded-bl-xl">
              <h3 className="text-2xl text-center font-medium pb-4">
                Reservation Details
              </h3>
              <ul className="grid grid-cols-2 gap-x-6 text-dark-secondary text-lg">
                <li>
                  <label htmlFor="" className="text-base font-medium">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="h-12 rounded-xl border-gray-border bg-gray border hover:shadow-lg hover:border-gold-primary py-1.5 px-2 outline-none"
                  />
                </li>
                <li>
                  <label htmlFor="" className="text-base font-medium">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="h-12 rounded-xl border-gray-border border hover:shadow-lg hover:border-gold-primary py-1.5 px-2 outline-none"
                  />
                </li>
                <li>
                  <label htmlFor="" className="text-base font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="h-12 rounded-xl border-gray-border border hover:shadow-lg hover:border-gold-primary py-1.5 px-2 outline-none"
                  />
                </li>
                <li>
                  <label htmlFor="" className="text-base font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    className="h-12 rounded-xl border-gray-border border hover:shadow-lg hover:border-gold-primary py-1.5 px-2 outline-none"
                  />
                </li>
                <li>
                  <label htmlFor="" className="text-base font-medium">
                    Prefered Date *
                  </label>
                  <input
                    type="date"
                    className="h-12 rounded-xl border-gray-border border hover:shadow-lg hover:border-gold-primary py-1.5 px-2 outline-none"
                  />
                </li>
                <li>
                  <label htmlFor="" className="text-base font-medium">
                    Number of Guests *
                  </label>
                  <select
                    name="guests"
                    id=""
                    className="h-12 w-full rounded-xl border-gray-border border hover:shadow-lg hover:border-gold-primary py-1.5 px-2 outline-none"
                  >
                    <option value="">Select Guest</option>
                    <option value="">1 Guest</option>
                    <option value="">2 Guests</option>
                    <option value="">3 Guests</option>
                    <option value="">4 Guests</option>
                    <option value="">5 Guests</option>
                    <option value="">6 Guests</option>
                    <option value="">7 Guests</option>
                    <option value="">8 Guests</option>
                  </select>
                </li>
                <li className="col-span-2">
                  <h3 className="font-medium text-sm pt-4">
                    Special Occasions & Dietarry Requirements
                  </h3>
                  <div className="grid grid-cols-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-[14px] mr-2 hover:shadow-lg"
                      />
                      <label htmlFor="" className="m-0">
                        Birthday Celebration
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-[14px] mr-2 hover:shadow-lg"
                      />
                      <label htmlFor="" className="m-0">
                        Vegetarian Options
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-[14px] mr-2 hover:shadow-lg"
                      />
                      <label htmlFor="" className="m-0">
                        Gluten-Free
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-[14px] mr-2 hover:shadow-lg"
                      />
                      <label htmlFor="" className="m-0">
                        Anniversary
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-[14px] mr-2 hover:shadow-lg"
                      />
                      <label htmlFor="" className="m-0">
                        Vegan options
                      </label>
                    </div>
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        className="w-[14px] mr-2 hover:shadow-lg"
                      />
                      <label htmlFor="" className="m-0">
                        Wheelchair Access
                      </label>
                    </div>
                  </div>
                </li>
                <li className="col-span-2">
                  <label htmlFor="" className="text-base font-medium">
                    Additional Requests *
                  </label>
                  <textarea
                    name="message"
                    id=""
                    placeholder="Please let us know about any special requests, allergies or seating preferences..."
                    className="w-full h-28 rounded-xl border hover:shadow-lg border-gray-border hover:border-gold-primary py-1.5 px-2 outline-none placeholder:text-base"
                  ></textarea>
                </li>
                <button className="bg-gold-primary rounded-xl my-2 py-3 text-gray-white text-center col-span-2 font-semibold">
                  Confirm Reservation
                </button>
                <p className="text-sm col-span-2 py-4 text-center">
                  By making a reservation, you agree to our{" "}
                  <span className="text-gold-primary hover:underline hover:cursor-pointer">
                    cancellation policy
                  </span>
                  . We require 24-hour notice for cancellations to avoid
                  charges.
                </p>
              </ul>
            </div>
            <div className="bg-gold-primary w-1/2 p-8 text-gray-white rounded-br-xl">
              <h3 className="text-2xl font-medium pb-4">
                Reservation Information
              </h3>
              <ul className=" space-y-4">
                <li className="flex items-center space-x-2">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-border p-4"></div>
                  <div>
                    <h3 className="font-medium">Call Us Direcrtly</h3>
                    <p>(+234)68 6244 7879</p>
                    <p>Available 24/7 for reservations</p>
                  </div>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-border p-4"></div>
                  <div>
                    <h3 className="font-medium">Restaurant Hours</h3>
                    <p>Mon - Thur: 5:00PM - 10:00PM</p>
                    <p>Fri - Sat: 5:00PM - 11:00PM</p>
                    <p>Sunday: 4:00PM - 9:00PM</p>
                  </div>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-border p-4"></div>
                  <div>
                    <h3 className="font-medium">Special Occasions</h3>
                    <p>Complimentary dessert for birthdays</p>
                    <p>Anniversary whine pairings available</p>
                  </div>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-border p-4"></div>
                  <div>
                    <h3 className="font-medium">Dress Code</h3>
                    <p>Business casual to formal</p>
                    <p>Jackets recommended for dinner</p>
                  </div>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-border p-4"></div>
                  <div>
                    <h3 className="font-medium">Parking & Location</h3>
                    <p>Valet parking available</p>
                    <p>135b Kingstown city, State 12345</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </section>
      <section id="newsletter" className="px-12 py-24">
        <h1 className="text-center text-4xl text-slate-500 pb-4">Our Menu</h1>
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 items-center justify-items-center pt-8">
          <li className="w-64">
            <img
              src={meals}
              alt="service-image"
              className="brightness-75 mx-auto max-h-36"
            />
            <h3 className="text-sm font-bold text-slate-400 text-center">
              Cooked Meals
            </h3>
            <p className="text-sm text-slate-400 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae, maxime!
            </p>
          </li>
          <li className="w-64">
            <img
              src={fast}
              alt="service-image"
              className="brightness-75 mx-auto max-h-36"
            />
            <h3 className="text-sm font-bold text-slate-400 text-center">
              Fast Food
            </h3>
            <p className="text-sm text-slate-400 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae, maxime!
            </p>
          </li>
          <li className="w-64">
            <img
              src={sea}
              alt="service-image"
              className="brightness-75 mx-auto max-h-36"
            />
            <h3 className="text-sm font-bold text-slate-400 text-center">
              Sea Foods
            </h3>
            <p className="text-sm text-slate-400 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae, maxime!
            </p>
          </li>
          <li className="w-64">
            <img
              src={vegetables}
              alt="service-image"
              className="brightness-75 mx-auto max-h-36"
            />
            <h3 className="text-sm font-bold text-slate-400 text-center">
              Vegetables
            </h3>
            <p className="text-sm text-slate-400 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae, maxime!
            </p>
          </li>
          <li className="w-64">
            <img
              src={drinks}
              alt="service-image"
              className="brightness-75 mx-auto max-h-36"
            />
            <h3 className="text-sm font-bold text-slate-400 text-center">
              Drinks
            </h3>
            <p className="text-sm text-slate-400 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae, maxime!
            </p>
          </li>
          <li className="w-64">
            <img
              src={delivery}
              alt="service-image"
              className="brightness-75 mx-auto max-h-36"
            />
            <h3 className="text-sm font-bold text-slate-400 text-center">
              Fast Delivery
            </h3>
            <p className="text-sm text-slate-400 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae, maxime!
            </p>
          </li>
          <li className="w-64">
            <img
              src={payment}
              alt="service-image"
              className="brightness-75 mx-auto max-h-36"
            />
            <h3 className="text-sm font-bold text-slate-400 text-center">
              Secured Payment
            </h3>
            <p className="text-sm text-slate-400 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae, maxime!
            </p>
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
}

export default Menu;
