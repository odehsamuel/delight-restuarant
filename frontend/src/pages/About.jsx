import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import about_img from "../assets/images/main.jpg";
import { useState } from "react";
import { motion } from "framer-motion";

function About() {
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

  const [defaultDetail, setDefault] = useState(true);
  return (
    <>
      <NavBar />
      <motion.div
        className="bg-[var(--hero-bg)] relative top-[6.6rem] mb-[6.6rem] h-[15rem]"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-gray-white mx-auto pb-[4rem] w-[42rem] relative top-20">
          <p className="bg-[var(--circle-1)] rounded-full h-20 w-20 absolute top-3"></p>
          <div className="text-center w-[36rem] mx-auto ">
            <motion.h3
              className="text-5xl font-bold"
              variants={headerTextVariant}
            >
              Our Story
            </motion.h3>
            <motion.p className="py-8 text-lg" variants={textVariant}>
              Discover the passion, tradition and excellence behind Delightful
              Kitchen.
            </motion.p>
          </div>
          <p className="bg-[var(--circle-2)] rounded-full h-24 w-24 absolute right-0 -top-6"></p>
        </div>
      </motion.div>
      <section className="bg-gray-border py-16">
        <div className="bg-gray-white container w-3/4 mx-auto rounded-xl shadow-lg px-10 pb-20">
          <div className="text-center py-10">
            <h1 className="text-4xl font-semibold">
              A Legacy of Culinary Excellence
            </h1>
            <hr className="mx-auto w-16 border-t-[3px] border-gold-primary mt-4"></hr>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-1/2 space-y-8">
              <h3 className="text-gold-primary text-4xl">Our Beginning</h3>
              <p>
                Founded in 1998 by renowed chef Marcus Beaumont, Delightful
                Kitchen began as a dream to create an extraordinary dining
                destination where culinary artistry meets warm hospitality. What
                started as a modest 30-seat restaurant has evolved into one of
                the city's most celebrated fine dining establishments
              </p>
              <p>
                Our commitment to sourcing the finest ingredients from local
                farms and trusted suppliers around the world remains unchanged.
                Every dish that leaves our kitchen tells a story of passion,
                creativity, and respect for both traditional techniques and
                innovative culinary evolution.
              </p>
            </div>
            {defaultDetail ? (
              <div className="bg-gold-primary text-gray-white rounded-xl text-center w-2/5 h-[20rem] py-36">
                <p>Historic Restaurant Photo</p>
                <p>Est. 1998</p>
              </div>
            ) : (
              <div className="relative rounded-xl text-gray-white text-center w-2/5 h-[20rem] overflow-hidden">
                <img
                  src={about_img}
                  alt="background image"
                  className="w-full h-[20rem] object-cover"
                />
                <div className="absolute inset-y-36 translate-x-1/2 le">
                  <p>Historic Restaurant Photo</p>
                  <p>Est. 1998</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="bg-gray-border pb-16">
        <div className="text-center py-10">
          <h1 className="text-4xl font-semibold">Our Values</h1>
          <hr className="mx-auto w-16 border-t-[3px] border-gold-primary mt-4"></hr>
        </div>

        <div className="grid grid-cols-3 gap-x-14 gap-y-8 justify-center px-52">
          <div className="container transition hover:-translate-y-2 space-y-8 bg-gray-white text-center shadow-lg rounded-xl p-10">
            <div className="rounded-full bg-gold-primary w-20 h-20 mx-auto flex items-center justify-center">
              ⭐
            </div>
            <h3 className="text-xl font-bold">Excellence</h3>
            <p className="text-lg text-dark-primary">
              We pursue perfection in every detail, from ingredient selection to
              presentation, ensuring each guest experiences the highest standard
              of culinary excellence.
            </p>
          </div>

          <div className="container transition hover:-translate-y-2 space-y-8 bg-gray-white text-center shadow-lg rounded-lg p-10">
            <div className="rounded-full bg-gold-primary w-20 h-20 mx-auto flex items-center justify-center">
              ⏱️
            </div>
            <h3 className="text-xl font-bold">Sustainability</h3>
            <p className="text-lg text-dark-primary">
              We're committed to sustainable practices, partnering with local
              farms, reducing waste, and supporting environmentally responsible
              suppliers.
            </p>
          </div>

          <div className="container transition hover:-translate-y-2 space-y-8 bg-gray-white text-center shadow-lg rounded-lg p-10">
            <div className="rounded-full bg-gold-primary w-20 h-20 mx-auto flex items-center justify-center">
              🥜
            </div>
            <h3 className="text-xl font-bold">Hospitality</h3>
            <p className="text-lg text-dark-primary">
              Our guests are family. We create memorable experiences through
              genuine warmth, attentive services, and a welcoming atmosphere.
            </p>
          </div>

          <div className="container transition hover:-translate-y-2 space-y-8 bg-gray-white text-center shadow-lg rounded-lg p-10">
            <div className="rounded-full bg-gold-primary w-20 h-20 mx-auto flex items-center justify-center">
              🌶️
            </div>
            <h3 className="text-xl font-bold">Innovation</h3>
            <p className="text-lg text-dark-primary">
              While respecting culinary traditions, we continuously explore new
              techniques and flavors to create unique and exciting dining
              experiences.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-border pb-16">
        <h1 className="text-4xl font-semibold text-center py-16">
          Meet Our Culinary Team
        </h1>
        <div className="grid grid-cols-3 gap-x-14 gap-y-8 justify-center px-64">
          <div className="container transition hover:-translate-y-2 space-y-8 bg-gray-white text-center shadow-lg rounded-lg p-10">
            <div className="text-gray-white text-3xl font-semibold rounded-full bg-gold-primary w-20 h-20 mx-auto flex items-center justify-center">
              MB
            </div>
            <h3 className="text-xl font-bold">Marcus Beaumont</h3>
            <p className="text-gold-primary italic">
              Founder and Executive Chef
            </p>
            <p className="text-lg text-dark-primary">
              With over 25 years of culinary experiences, Chef Marcus has
              trained in Michelin-strarrred restaurants across France and brings
              his expertise in classical French cuisine with modern
              interpretations to Delightful Kitchen.
            </p>
            <div className="bg-gray-border space-y-4 text-center py-6 px-16 rounded-lg">
              <h3 className="text-gold-primary text-xl font-semibold">
                Specialties
              </h3>
              <p>
                French Classical Cuisine, Molecular Gastronomy, Wine Pairing
              </p>
            </div>
          </div>

          <div className="container transition hover:-translate-y-2 space-y-8 bg-gray-white text-center shadow-lg rounded-lg p-10">
            <div className="text-gray-white text-3xl font-semibold rounded-full bg-gold-primary w-20 h-20 mx-auto flex items-center justify-center">
              SM
            </div>
            <h3 className="text-xl font-bold">Sophia Martinez</h3>
            <p className="text-gold-primary italic">Head Pastry Chef</p>
            <p className="text-lg text-dark-primary">
              Award-winning pastry chef with a backgrround in fine European
              partisseries. Sophia creates stunning desserts that are both
              visually spectacular and incredibly delicious, earning recognition
              from culnary publications worldwide.
            </p>
            <div className="bg-gray-border space-y-4 text-center py-6 px-16 rounded-lg">
              <h3 className="text-gold-primary text-xl font-semibold">
                Specialties
              </h3>
              <p>French Pastries, Chocolate Wrrork, Artistic Plating</p>
            </div>
          </div>

          <div className="container transition hover:-translate-y-2 space-y-8 bg-gray-white text-center shadow-lg rounded-lg p-10">
            <p className="text-gray-white text-3xl font-semibold rounded-full bg-gold-primary w-20 h-20 mx-auto flex items-center justify-center">
              JP
            </p>
            <h3 className="text-xl font-bold">James Thompson</h3>
            <p className="text-gold-primary italic">Sous Chef</p>
            <p className="text-lg text-dark-primary">
              A rising star in the culinary world, James brings innovation and
              precision to our Kitchen. His expertise in seasonal ingredients
              and farm-to-table cooking helps create our ever-evolving seasonal
              menu.
            </p>
            <div className="bg-gray-border space-y-4 text-center py-6 px-16 rounded-lg">
              <h3 className="text-gold-primary text-xl font-semibold">
                Specialties
              </h3>
              <p>Seasonal Cuisine, Seafood, Modern Techniques</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-border py-16">
        <div className="bg-gray-white container w-3/4 mx-auto rounded-xl shadow-lg pb-20 py-12 px-16">
          <div className="text-center py-8">
            <h1 className="text-4xl font-semibold">Our Journey</h1>
            <hr className="mx-auto w-16 border-t-[3px] border-gold-primary mt-3"></hr>
          </div>
          <ul className="space-y-10 h-full relative">
            <div className="bg-gold-primary w-[3px] h-full translate-y-0 absolute inset-x-1/2"></div>
            <div className="flex items-center">
              <li className="rounded-lg shadow-xl bg-gray-border py-6 px-4 w-2/5 space-y-2">
                <h3 className="text-gold-primary text-xl font-semibold">
                  The Beginning
                </h3>
                <p>
                  Delightful Kitchen opens its doors as a 30-seat restaurant
                  with a vision to provide exceptional fine dining experiences.
                </p>
              </li>
              <p className="bg-gold-primary text-gray-white text-center py-2 px-4 w-20 rounded-3xl -translate-x-10 absolute left-[50%]">
                1998
              </p>
            </div>
            <div className="flex items-center justify-end">
              <p className="bg-gold-primary text-gray-white text-center py-2 px-4 w-20 rounded-3xl -translate-x-10 absolute left-[50%]">
                2003
              </p>
              <li className="rounded-lg shadow-xl bg-gray-border py-6 px-4 w-2/5 space-y-2">
                <h3 className="text-gold-primary text-xl font-semibold">
                  First Recognition
                </h3>
                <p>
                  Received our first James Beard Award nomination and expanded
                  to accommodate 60 guests.
                </p>
              </li>
            </div>
            <div className="clear-both"></div>
            <div className="flex items-center">
              <li className="rounded-lg shadow-xl bg-gray-border py-6 px-4 w-2/5 space-y-2 ">
                <h3 className="text-gold-primary text-xl font-semibold">
                  Micheline Star
                </h3>
                <p>
                  Earned our first Michelin Star, establishing Delightful
                  Kitchen as one of the city's premier dining destinations.
                </p>
              </li>
              <p className="bg-gold-primary text-gray-white text-center py-2 px-4 w-20 rounded-3xl -translate-x-10 absolute left-[50%]">
                2008
              </p>
            </div>
            <div className="flex items-center justify-end">
              <p className="bg-gold-primary text-gray-white text-center py-2 px-4 w-20 rounded-3xl -translate-x-10 absolute left-[50%]">
                2015
              </p>
              <li className="rounded-lg shadow-xl bg-gray-border py-6 px-4 w-2/5 space-y-2">
                <h3 className="text-gold-primary text-xl font-semibold">
                  Sustainability Initiative
                </h3>
                <p>
                  Launched our farm-to-table program, partnering with local
                  organic farms and implementing zero-waste practices.
                </p>
              </li>
            </div>
            <div className="clear-both"></div>
            <div className="flex items-center">
              <li className="rounded-lg shadow-xl bg-gray-border py-6 px-4 w-2/5 space-y-2">
                <h3 className="text-gold-primary text-xl font-semibold">
                  Innovative During Challenge
                </h3>
                <p>
                  Adapted to global challenges by launching premium meal krits
                  and virtual cooking classes, maintaining our connection with
                  guests.
                </p>
              </li>
              <p className="bg-gold-primary text-gray-white text-center py-2 px-4 w-20 rounded-3xl -translate-x-10 absolute left-[50%]">
                2020
              </p>
            </div>
            <div className="flex items-center justify-end">
              <p className="bg-gold-primary text-gray-white text-center py-2 px-4 w-20 rounded-3xl -translate-x-10 absolute left-[50%]">
                2023
              </p>
              <li className="rounded-lg shadow-xl bg-gray-border py-6 px-4 w-2/5 space-y-2">
                <h3 className="text-gold-primary text-xl font-semibold">
                  25th Anniversary
                </h3>
                <p>
                  Celebrated 25 years of culinary excellence with a complete
                  restaurant renovation and expanded wine cellar
                </p>
              </li>
            </div>
            <div className="clear-both"></div>
          </ul>
        </div>
      </section>
      <section className="bg-gray-border pb-36">
        <div className="bg-dark-primary rounded-2xl w-3/4 mx-auto py-16">
          <h1 className="text-gray-white text-center text-4xl pt-10">
            Awards & Recognition
          </h1>
          <hr className="mx-auto w-16 border-t-[3px] border-gold-primary my-4"></hr>
          <div className="grid grid-cols-3 gap-x-8 justify-center gap-y-8 px-10">
            <div className="container space-y-4 bg-gray-medium text-center shadow-lg rounded-xl py-8">
              <div className="rounded-full bg-gold-primary w-20 h-20 mx-auto flex items-center justify-center">
                ⭐
              </div>
              <h3 className="text-xl font-bold text-gray-white">
                Michelin Star
              </h3>
              <p className="text-sm text-gold-primary">2008 - present</p>
            </div>

            <div className="container space-y-4 bg-gray-medium text-center shadow-lg rounded-xl py-8">
              <div className="rounded-full bg-gold-primary w-20 h-20 mx-auto flex items-center justify-center">
                ⏱️
              </div>
              <h3 className="text-xl font-bold text-gray-white">
                James Beard Award
              </h3>
              <p className="text-sm text-gold-primary">
                Outstanding Restaurant 2019
              </p>
            </div>

            <div className="container space-y-4 bg-gray-medium text-center shadow-lg rounded-xl py-8">
              <div className="rounded-full bg-gold-primary w-20 h-20 mx-auto flex items-center justify-center">
                🥜
              </div>
              <h3 className="text-xl font-bold text-gray-white">
                Wine Spectator
              </h3>
              <p className="text-sm text-gold-primary">
                Award of Excellence 2020
              </p>
            </div>

            <div className="container space-y-4 bg-gray-medium text-center shadow-lg rounded-xl py-8">
              <div className="rounded-full bg-gold-primary w-20 h-20 mx-auto flex items-center justify-center">
                ⭐
              </div>
              <h3 className="text-xl font-bold text-gray-white">
                AAA five Diamond
              </h3>
              <p className="text-sm text-gold-primary">2016 - present</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
