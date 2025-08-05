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

function Services() {
  return (
    <>
      {/* <NavBar />
      <Footer /> */}
      <section id="newsletter" className="px-12 py-24">
        <h1 className="text-center text-4xl text-slate-500 pb-4">
          Our Services
        </h1>
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
    </>
  );
}

export default Services;
