import menu from "../assets/images/menu.png";
import flower from "../assets/images/flower.png";
import { Link } from "react-router-dom";

function Reservation() {
  return (
    // <div className="py-10 px-4 bg-slate-200 relative">
    //   <h1 className="text-center text-slate-800 font-bold text-3xl pb-8">
    //     Book A Reservation
    //   </h1>
    //   <img
    //     src={flower}
    //     alt="flower"
    //     className="sm:w-36 sm:h-36 w-28 h-28 opacity-30 absolute top-2 left-2"
    //   />
    //   <div className="flex items-center justify-center justify-items-center relative py-8">
    //     <img
    //       src={menu}
    //       alt="background-image"
    //       className="object-cover md:mr-20 sm:h-96 sm:w-80 h-72 w-54 opacity-30 sm:opacity-30"
    //     />
    //     <form className="sm:w-96 w-72 rounded-md sm:bg-neutral-300 border-2 border-slate-300 px-3 py-2 absolute sm:relative">
    //       <div className="py-1.5">
    //         <label htmlFor="name" className="text-slate-700 pb-2">
    //           Full Name:
    //         </label>
    //         <input
    //           type="text"
    //           placeholder="e.g Finn Mark"
    //           className="rounded-md outline-none bg-slate-200 border-2 border-slate-400/50 text-slate-700 hover/active:bg-blue-100 px-2 py-1"
    //         />
    //       </div>
    //       <div className="py-1.5">
    //         <label htmlFor="phone" className="text-slate-700 pb-2">
    //           Phone:
    //         </label>
    //         <input
    //           type="text"
    //           placeholder="e.g +234 1234567890"
    //           className="rounded-md outline-none bg-slate-200 border-2 border-slate-400/50 text-slate-700 hover/active:bg-blue-100 px-2 py-1"
    //         />
    //       </div>
    //       <div className="py-1.5">
    //         <label htmlFor="date" className="text-slate-700 pb-2">
    //           Date & Time:
    //         </label>
    //         <input
    //           type="datetime-local"
    //           className="rounded-md outline-none bg-slate-200 border-2 border-slate-400/50 text-slate-700 hover/active:bg-blue-100 px-2 py-1"
    //         />
    //       </div>
    //       <div className="py-1.5">
    //         <label htmlFor="table" className="text-slate-700 pb-2">
    //           Table for:
    //         </label>
    //         <input
    //           type="number"
    //           placeholder="e.g 1"
    //           className="rounded-md outline-none bg-slate-200 border-2 border-slate-400/50 text-slate-700 hover/active:bg-blue-100 px-2 py-1"
    //           max={5}
    //           min={1}
    //         />
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div id="reserve-table" className="bg-gray-border py-32">
      <div className="bg-dark-secondary w-3/6 rounded-2xl px-10 pt-8 pb-16 mx-auto text-center">
        <h2 className="text-4xl text-gray-white my-6 font-semibold">
          Reserve Your Table Today!
        </h2>
        <p className="text-gray-white text-lg mb-8">
          Experience culinary excellence in an intimate setting. Book your table
          for an unforgettable evening.
        </p>
        <Link
          to="/menu"
          className="bg-gold-primary text-gray-white rounded-3xl px-6 py-2 text-lg"
        >
          Make a Reservation
        </Link>
      </div>
      {/* <section className="bg-gray-border py-24">
        <div className="w-3/4 mx-auto py-10">
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
                    className="h-12 rounded-xl border-gray-border bg-gray border hover:shadow-lg hover:border-gold-primary hover:bg-[var(--gold-bg)] active:bg-[var(--gold-bg)] py-1.5 px-2 outline-none"
                  />
                </li>
                <li>
                  <label htmlFor="" className="text-base font-medium">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="h-12 rounded-xl border-gray-border border hover:shadow-lg hover:border-gold-primary hover:bg-[var(--gold-bg)] active:bg-[var(--gold-bg)] py-1.5 px-2 outline-none"
                  />
                </li>
                <li>
                  <label htmlFor="" className="text-base font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="h-12 rounded-xl border-gray-border border hover:shadow-lg hover:border-gold-primary hover:bg-[var(--gold-bg)] active:bg-[var(--gold-bg)] py-1.5 px-2 outline-none"
                  />
                </li>
                <li>
                  <label htmlFor="" className="text-base font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    className="h-12 rounded-xl border-gray-border border hover:shadow-lg hover:border-gold-primary hover:bg-[var(--gold-bg)] active:bg-[var(--gold-bg)] py-1.5 px-2 outline-none"
                  />
                </li>
                <li>
                  <label htmlFor="" className="text-base font-medium">
                    Prefered Date *
                  </label>
                  <input
                    type="date"
                    className="h-12 rounded-xl border-gray-border border hover:shadow-lg hover:border-gold-primary hover:bg-[var(--gold-bg)] active:bg-[var(--gold-bg)] py-1.5 px-2 outline-none"
                  />
                </li>
                <li>
                  <label htmlFor="" className="text-base font-medium">
                    Number of Guests *
                  </label>
                  <select
                    name="guests"
                    id=""
                    className="h-12 w-full rounded-xl border-gray-border border hover:shadow-lg hover:border-gold-primary hover:bg-[var(--gold-bg)] active:bg-[var(--gold-bg)] py-1.5 px-2 outline-none"
                  >
                    <option value="">Select Guests</option>
                    <option value="">1 Guest</option>
                    <option value="">2 Guests</option>
                    <option value="">3 Guests</option>
                    <option value="">4 Guests</option>
                    <option value="">5 Guests</option>
                    <option value="">6 Guests</option>
                    <option value="">7 Guests</option>
                    <option value="">8+ Guests</option>
                  </select>
                </li>
                <li className="col-span-2">
                  <h3 className="font-medium text-base pt-4">
                    Special Occasions & Dietarry Requirements
                  </h3>
                  <ul className="grid grid-cols-4 gap-4 pt-4">
                    <li className="rounded-lg p-1.5 text-center text-gray-light hover:border bg-[var(--border-bg)] hover:border-gold-primary hover:bg-[var(--gold-bg)]">
                      5:00PM
                    </li>
                    <li className="rounded-lg p-1.5 text-center border hover:border-gold-primary hover:bg-[var(--gold-bg)]">
                      5:30PM
                    </li>
                    <li className="rounded-lg p-1.5 text-center border hover:border-gold-primary hover:bg-[var(--gold-bg)]">
                      6:00PM
                    </li>
                    <li className="rounded-lg p-1.5 text-center text-gray-light hover:border bg-[var(--border-bg)] hover:border-gold-primary hover:bg-[var(--gold-bg)]">
                      6:30PM
                    </li>
                    <li className="rounded-lg p-1.5 text-center text-gray-white bg-gold-primary border hover:border-gold-primary hover:bg-[var(--gold-bg)]">
                      7:00PM
                    </li>
                    <li className="rounded-lg p-1.5 text-center border hover:border-gold-primary hover:bg-[var(--gold-bg)]">
                      7:30PM
                    </li>
                    <li className="rounded-lg p-1.5 text-center border hover:border-gold-primary hover:bg-[var(--gold-bg)]">
                      8:00PM
                    </li>
                    <li className="rounded-lg p-1.5 text-center text-gray-light hover:border bg-[var(--border-bg)] hover:border-gold-primary hover:bg-[var(--gold-bg)]">
                      8:30PM
                    </li>
                    <li className="rounded-lg p-1.5 text-center border hover:border-gold-primary hover:bg-[var(--gold-bg)]">
                      9:00PM
                    </li>
                    <li className="rounded-lg p-1.5 text-center text-gray-light hover:border bg-[var(--border-bg)] hover:border-gold-primary hover:bg-[var(--gold-bg)]">
                      9:30PM
                    </li>
                  </ul>
                </li>
                <li className="col-span-2">
                  <h3 className="font-medium text-base pt-4">
                    Special Occasions & Dietarry Requirements
                  </h3>

                  <div className="grid grid-cols-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-[14px] mr-2 hover:shadow-lg accent-gold-primary"
                      />
                      <label htmlFor="" className="m-0">
                        Birthday Celebration
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-[14px] mr-2 hover:shadow-lg accent-gold-primary"
                      />
                      <label htmlFor="" className="m-0">
                        Vegetarian Options
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-[14px] mr-2 hover:shadow-lg accent-gold-primary"
                      />
                      <label htmlFor="" className="m-0">
                        Gluten-Free
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-[14px] mr-2 hover:shadow-lg accent-gold-primary"
                      />
                      <label htmlFor="" className="m-0">
                        Anniversary
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-[14px] mr-2 hover:shadow-lg accent-gold-primary"
                      />
                      <label htmlFor="" className="m-0">
                        Vegan options
                      </label>
                    </div>
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        className="w-[14px] mr-2 hover:shadow-lg accent-gold-primary"
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
            <div className="bg-gold-primary w-1/2 py-56 px-14 text-gray-white rounded-br-xl">
              <h3 className="text-4xl font-medium pb-4">
                Reservation Information
              </h3>
              <ul className=" space-y-4">
                <li className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--border-bg)] p-4">
                    🌶️
                  </div>
                  <div>
                    <h3 className="font-medium">Call Us Direcrtly</h3>
                    <p>(+234)68 6244 7879</p>
                    <p>Available 24/7 for reservations</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--border-bg)] p-4">
                    ⏱️
                  </div>
                  <div>
                    <h3 className="font-medium">Restaurant Hours</h3>
                    <p>Mon - Thur: 5:00PM - 10:00PM</p>
                    <p>Fri - Sat: 5:00PM - 11:00PM</p>
                    <p>Sunday: 4:00PM - 9:00PM</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--border-bg)] p-4">
                    🥜
                  </div>
                  <div>
                    <h3 className="font-medium">Special Occasions</h3>
                    <p>Complimentary dessert for birthdays</p>
                    <p>Anniversary whine pairings available</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--border-bg)] p-4">
                    ⏱️
                  </div>
                  <div>
                    <h3 className="font-medium">Dress Code</h3>
                    <p>Business casual to formal</p>
                    <p>Jackets recommended for dinner</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--border-bg)] p-4">
                    🥜
                  </div>
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
        <div className="w-3/4 mx-auto bg-gray-white rounded-xl py-8 text-center">
          <h3 className="font-medium text-xl pb-2">
            Need a Quick Reservation?
          </h3>
          <p>Popular time slots for today and tomorrow</p>
          <ul className="flex justify-center items-center text-sm text-gold-primary space-x-4">
            <li className="rounded-2xl border border-gold-primary py-1 px-3">
              Tonight 7:00 PM
            </li>
            <li className="rounded-2xl border border-gold-primary py-1 px-3">
              Tonight 8:00 PM
            </li>
            <li className="rounded-2xl border border-gold-primary py-1 px-3">
              Tonight 8:30 PM
            </li>
            <li className="rounded-2xl border border-gold-primary py-1 px-3">
              Tonight 9:00 PM
            </li>
          </ul>
        </div>
      </section> */}
    </div>
  );
}

export default Reservation;
