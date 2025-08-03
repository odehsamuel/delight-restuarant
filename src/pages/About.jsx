import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <NavBar />
      <div className="bg-[var(--brown-dark)] relative top-[6.65rem] mb-[7rem] h-[15rem]">
        <div className="text-gray-white mx-auto pb-[4rem] w-[42rem] relative top-20">
          <p className="bg-[var(--brown-warm)] rounded-full h-20 w-20 absolute top-3"></p>
          <div className="text-center w-[36rem] mx-auto ">
            <h3 className="text-5xl font-bold">Our Story</h3>
            <p className="py-8 text-lg">
              Discover the passion, tradition and excellence behind Delightful
              Kitchen.
            </p>
          </div>
          <p className="bg-[var(--brown-warm)] rounded-full h-24 w-24 absolute right-0 -top-6"></p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
