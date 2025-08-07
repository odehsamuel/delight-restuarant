import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <NavBar />
      <div className="bg-[var(--hero-bg)] relative top-[6.6rem] mb-[6.6rem] h-[15rem]">
        <div className="text-gray-white mx-auto pb-[4rem] w-[42rem] relative top-20">
          <p className="bg-[var(--circle-1)] rounded-full h-20 w-20 absolute top-3"></p>
          <div className="text-center w-[36rem] mx-auto ">
            <h3 className="text-5xl font-bold">Our Story</h3>
            <p className="py-8 text-lg">
              Discover the passion, tradition and excellence behind Delightful
              Kitchen.
            </p>
          </div>
          <p className="bg-[var(--circle-2)] rounded-full h-24 w-24 absolute right-0 -top-6"></p>
        </div>
      </div>
      <div className="bg-gray-border py-16">
        <div className="bg-gray-white container w-3/4 mx-auto rounded-xl shadow-lg px-10 pb-20">
          <div className="text-center py-10">
            <h1 className="text-4xl font-semibold">
              A Legacy of Culinary Excellence
            </h1>
            <p className="mx-auto w-16 h-[3px] bg-gold-primary mt-4"></p>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-1/2 space-y-8">
              <h3 className="text-gold-primary text-4xl">Our Beginning</h3>
              <p>
                Founded in 1998 by renowed chef Marcus Beaumont, Delightful
                Kitchen began as a dream to create an extraordinary dining
                destination where culinary artistry meets warm hospitality. What
                started as a modest 30-sear restaurant has evolved into one of
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
            <div className="bg-gold-primary text-gray-white rounded-xl text-center w-2/5 h-[20rem] py-36">
              <p>Historic Restaurant Photo</p>
              <p>Est. 1998</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-border pb-20">
        <div className="text-center py-10">
          <h1 className="text-4xl font-semibold">Our Values</h1>
          <p className="mx-auto w-16 h-[3px] bg-gold-primary mt-4"></p>
        </div>

        <div className="grid grid-cols-3 gap-x-14 gap-y-8 justify-center px-52">
          <div className="container space-y-8 bg-gray-white text-center shadow-lg rounded-lg p-10">
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

          <div className="container space-y-8 bg-gray-white text-center shadow-lg rounded-lg p-10">
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

          <div className="container space-y-8 bg-gray-white text-center shadow-lg rounded-lg p-10">
            <div className="rounded-full bg-gold-primary w-20 h-20 mx-auto flex items-center justify-center">
              🥜
            </div>
            <h3 className="text-xl font-bold">Hospitality</h3>
            <p className="text-lg text-dark-primary">
              Our guests are family. We create memorable experiences through
              genuine warmth, attentive services, and a welcoming atmosphere.
            </p>
          </div>

          <div className="container space-y-8 bg-gray-white text-center shadow-lg rounded-lg p-10">
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
      </div>
      <Footer />
    </>
  );
}

export default About;
