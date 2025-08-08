import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <NavBar />
      <div className="bg-[var(--hero-bg)] relative top-[6.6rem] mb-[6.6rem] h-[15rem]">
        <div className="text-gray-white mx-auto pb-[6rem] w-[42rem] relative top-20">
          <p className="bg-[var(--circle-1)] rounded-full h-20 w-20 absolute top-3"></p>
          <div className="text-center w-[36rem] mx-auto ">
            <h3 className="text-5xl font-bold">Contact US</h3>
            <p className="py-8 text-lg">
              Get in touch with us for reservations, inquires or to plan your
              perfect dining experience
            </p>
          </div>
          <p className="bg-[var(--circle-2)] rounded-full h-24 w-24 absolute right-0 -top-6"></p>
        </div>
      </div>
      <section className="bg-gray-border py-16">
        <div className="flex justify-around w-3/4 mx-auto">
          <div className="bg-gray-white p-8 rounded-xl shadow-xl w-2/5">
            <h3 className="text-gold-primary pb-10 text-4xl font-medium text-center">
              Get In Touch
            </h3>
            <ul className="space-y-6">
              <li className="bg-gray-border py-6 rounded-lg px-8">
                <div className="flex items-center space-x-8">
                  <div className="flex items-center justify-center bg-gold-primary p-6 rounded-full">
                    <i className="fa fa-envelope mr-2" aria-hidden="true"></i>
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold pb-4">Location</p>
                    <p>General</p>
                    <p>Reservation</p>
                    <p>Events</p>
                  </div>
                </div>
              </li>
              <li className="bg-gray-border py-6 rounded-lg px-8">
                <div className="flex items-center space-x-8">
                  <div className="flex items-center justify-center bg-gold-primary p-6 rounded-full">
                    <i className="fa fa-envelope mr-2" aria-hidden="true"></i>
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold pb-4">Phone</p>
                    <p>
                      Reservations:{" "}
                      <span className="text-gold-primary">
                        (+234) 813 4892 583
                      </span>
                    </p>
                    <p>
                      General Inquires:{" "}
                      <span className="text-gold-primary">
                        (+234) 912 8765 555
                      </span>
                    </p>
                    <p>
                      Private Events:{" "}
                      <span className="text-gold-primary">
                        (+234) 701 0121 022
                      </span>
                    </p>
                  </div>
                </div>
              </li>
              <li className="bg-gray-border py-6 rounded-lg px-8">
                <div className="flex items-center space-x-8">
                  <div className="flex items-center justify-center bg-gold-primary p-6 rounded-full">
                    <i className="fa fa-envelope mr-2" aria-hidden="true"></i>
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold pb-4">Email</p>
                    <p>
                      General:{" "}
                      <span className="text-gold-primary">
                        info@delightfulkitchen.com
                      </span>
                    </p>
                    <p>
                      Reservation:{" "}
                      <span className="text-gold-primary">
                        reservations@delightfulkitchen.com
                      </span>
                    </p>
                    <p>
                      Events:{" "}
                      <span className="text-gold-primary">
                        events@delightfulkitchen.com
                      </span>
                    </p>
                  </div>
                </div>
              </li>
              <li className="bg-gray-border py-6 rounded-lg px-8">
                <div className="flex items-center space-x-8">
                  <div className="flex items-center justify-center bg-gold-primary p-6 rounded-full">
                    <i className="fa fa-envelope mr-2" aria-hidden="true"></i>
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold pb-4">Website & Socials</p>
                    <p className="text-gold-primary">
                      www.delightfulkitchen.com
                    </p>
                    <p className="text-gold-primary">@delightfulKitchen</p>
                    <p className="text-gold-primary">
                      Facebook | Instagram | Twitter(X)
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-gray-white p-8 rounded-xl shadow-xl w-2/5">
            <h3 className="text-gold-primary pb-10 text-4xl font-medium text-center">
              Send Us a Message
            </h3>
            <ul className="grid grid-cols-2 gap-6 text-dark-secondary text-lg">
              <li>
                <label htmlFor="" className="text-base font-medium">
                  First Name *
                </label>
                <input
                  type="text"
                  className="h-12 rounded-xl border-gray-border bg-gray border-2 hover:border-gold-primary py-1.5 px-2 outline-none"
                />
              </li>
              <li>
                <label htmlFor="" className="text-base font-medium">
                  Last Name *
                </label>
                <input
                  type="text"
                  className="h-12 rounded-xl border-gray-border border-2 hover:border-gold-primary py-1.5 px-2 outline-none"
                />
              </li>
              <li>
                <label htmlFor="" className="text-base font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="h-12 rounded-xl border-gray-border border-2 hover:border-gold-primary py-1.5 px-2 outline-none"
                />
              </li>
              <li>
                <label htmlFor="" className="text-base font-medium">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="h-12 rounded-xl border-gray-border border-2 hover:border-gold-primary py-1.5 px-2 outline-none"
                />
              </li>
              <li className="col-span-2">
                <label htmlFor="" className="text-base font-medium">
                  Subject *
                </label>
                <select
                  name="subject"
                  id=""
                  className="w-full h-12 rounded-xl border-2 border-gray-border hover:border-gold-primary py-1.5 px-2 outline-none"
                >
                  <option value="">Select option</option>
                  <option value="">Select option</option>
                  <option value="">Select option</option>
                </select>
              </li>
              <li className="col-span-2">
                <label htmlFor="" className="text-base font-medium">
                  Message *
                </label>
                <textarea
                  name="message"
                  id=""
                  placeholder="Please share you message, questions or special requirements..."
                  className="w-full h-28 rounded-xl border-2 border-gray-border hover:border-gold-primary py-1.5 px-2 outline-none"
                ></textarea>
              </li>
              <button className="bg-gold-primary rounded-3xl py-2 text-gray-white text-center col-span-2 font-semibold">
                Send Message
              </button>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-gray-border pb-16">
        <div className="bg-dark-primary rounded-2xl w-3/4 mx-auto py-16">
          <h1 className="text-gray-white font-medium text-center text-4xl pb-10">
            Hours of Operation
          </h1>
          {/* <hr className="mx-auto w-16 border-t-2 border-gold-primary my-4"></hr> */}
          <div className="grid grid-cols-3 gap-x-8 justify-center gap-y-8 px-10">
            <div className="container bg-gray-medium text-center shadow-lg rounded-xl py-8">
              {/* <div className="rounded-full bg-gold-primary w-20 h-20 mx-auto flex items-center justify-center">
                ⭐
              </div> */}
              <h3 className="text-xl pb-4 font-bold text-gold-primary">
                Dining Room
              </h3>

              <p className="text-gray-white">
                Monday - Thursday: 5:00PM - 10PM
              </p>
              <p className="text-gray-white">
                Friday - Saturday: 5:00PM - 11PM
              </p>
              <p className="text-gray-white">Sunday: 4:00PM - 9PM</p>
            </div>

            <div className="container bg-gray-medium text-center shadow-lg rounded-xl py-8">
              {/* <div className="rounded-full bg-gold-primary w-20 h-20 mx-auto flex items-center justify-center">
                ⏱️
              </div> */}
              <h3 className="text-xl pb-4 font-bold text-gold-primary">
                Bar & Lounge
              </h3>
              <p className="text-gray-white">
                Monday - Thursday: 4:30PM - 11PM
              </p>
              <p className="text-gray-white">
                Friday - Saturday: 4:30PM - 12AM
              </p>
              <p className="text-gray-white">Sunday: 3:30PM - 10PM</p>
            </div>

            <div className="container bg-gray-medium text-center shadow-lg rounded-xl py-8">
              {/* <div className="rounded-full bg-gold-primary w-20 h-20 mx-auto flex items-center justify-center">
                🥜
              </div> */}
              <h3 className="text-xl font-bold pb-4 text-gold-primary">
                Private Events
              </h3>
              <p className="text-gray-white">Available 7 days a week</p>
              <p className="text-gray-white">Lunch and dinner options</p>
              <p className="text-gray-white">Call for available</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-border pb-16">
        <div className="text-center w-3/4 mx-auto bg-gray-white rounded-xl shadow-lg px-16 pb-12">
          <h3 className="text-4xl font-medium text-gold-primary py-10">
            Find Us
          </h3>
          <p>
            Located in the heart of Kingstown, easily accessible to public
            transportation with valet parking available
          </p>
          <div className="flex items-center justify-center bg-gold-primary text-gray-white rounded-xl text-center w-full h-[20rem] mt-6">
            <div className="w-full">
              <p>Interactive Map</p>
              <p>135b Kingstown city, State 12345</p>
            </div>
            <img
              src=""
              alt="Click here to view in Google maps"
              className="w-full"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-border pb-16">
        <div className="bg-gold-primary text-gray-white rounded-xl text-center w-3/4 mx-auto h-[18rem]">
          <h3 className="text-4xl pt-16 font-medium">Ready to Dine With Us?</h3>
          <p className="py-6 text-lg">
            Experience culinary excellence in an intimate setting. Reserve your
            table today for an unforgettable Evening.
          </p>
          <button className="text-gold-primary bg-gray-white rounded-3xl px-8 py-3 text-lg font-medium">
            Make a Reservation
          </button>
        </div>
      </section>
      <section className="bg-gray-border pb-16 text-center">
        <div className="shadow-sm rounded-xl py-12 w-3/4 mx-auto">
          <h3 className="text-gold-primary text-4xl font-medium py-10">
            Follow Our Culinary Journey
          </h3>
          <p className="text-gray-medium text-lg pb-6">
            Stay connected with us on social media for the latest menu updates,
            behind-the-scene contents, and special events.
          </p>
          <div className="flex items-center justify-center w-1/3 mx-auto">
            <div className="rounded-full bg-gold-primary w-16 h-16 mx-auto flex items-center justify-center">
              ⭐
            </div>
            <div className="rounded-full bg-gold-primary w-16 h-16 mx-auto flex items-center justify-center">
              ⭐
            </div>
            <div className="rounded-full bg-gold-primary w-16 h-16 mx-auto flex items-center justify-center">
              ⭐
            </div>
            <div className="rounded-full bg-gold-primary w-16 h-16 mx-auto flex items-center justify-center">
              ⭐
            </div>
            <div className="rounded-full bg-gold-primary w-16 h-16 mx-auto flex items-center justify-center">
              ⭐
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
