import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Chef1 from "../assets/images/chef3.jpg";
import Chef2 from "../assets/images/chef7.jpg";
import Chef3 from "../assets/images/chef.jpg";
import Chef4 from "../assets/images/Marcus Samuelsson's New Cookbook Celebrates Black Chefs Across America.jpeg";
import Chef5 from "../assets/images/chef4.jpg";
import Chef6 from "../assets/images/chef2.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Chefs() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="w-full">
      <NavBar />
      <h1 className="pt-28 text-3xl text-slate-800 text-center">Our Chefs</h1>
      <div className="mx-10 md:mx-24 pt-4 pb-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 items-center pt-8  mx-4">
          <div className="container">
            <div className="relative">
              <Link to={"/chefs/id"}>
                <img
                  src={Chef1}
                  alt="chef-image"
                  className="w-full h-96
                  object-cover hover/active:brightness-50"
                  onMouseEnter={() => setOpened(true)}
                  onMouseLeave={() => setOpened(false)}
                />
              </Link>
              <div
                className={`flex justify-evenly absolute inset-x-0 top-1/2 ${
                  !opened && "invisible"
                }`}
                onMouseEnter={() => setOpened(true)}
                onMouseLeave={() => setOpened(false)}
              >
                <a href="#">
                  <i
                    className="text-slate-100 fa fa-facebook fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="text-slate-100 fa fa-whatsapp fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="text-slate-100 fa fa-instagram fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="text-slate-100 fa fa-linkedin fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
            <div className="px-4 py-2 bg-gray-500 text-center">
              <p className="font-bold">Schwarts Michael</p>
              <p className="text-sm italic text-slate-300">Chief chef</p>
            </div>
          </div>

          <div className="">
            <div className="relative">
              <Link to={"/chefs/id"}>
                <img
                  src={Chef2}
                  alt="chef-image"
                  className="
                 w-full h-96 object-cover hover/active:brightness-50"
                  onMouseEnter={() => setOpened(true)}
                  onMouseLeave={() => setOpened(false)}
                />
              </Link>
              <div
                className={`flex justify-evenly absolute inset-x-0 top-1/2 ${
                  !opened && "invisible"
                }`}
                onMouseEnter={() => setOpened(true)}
                onMouseLeave={() => setOpened(false)}
              >
                <a href="#">
                  <i
                    className="text-slate-100 fa fa-facebook fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="text-slate-100 fa fa-whatsapp fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="text-slate-100 fa fa-instagram fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="text-slate-100 fa fa-linkedin fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
            <div className="px-4 py-2 bg-gray-500 text-center">
              <p className="font-bold">George Lauren</p>
              <p className="text-sm italic text-slate-300">
                Assistant Chief chef
              </p>
            </div>
          </div>

          <div className="">
            <div className="relative">
              <Link to={"/chefs/id"}>
                <img
                  src={Chef3}
                  alt="chef-image"
                  className="
                 w-full h-96 object-cover hover/active:brightness-50"
                  onMouseEnter={() => setOpened(true)}
                  onMouseLeave={() => setOpened(false)}
                />
              </Link>
              <div
                className={`flex justify-evenly absolute inset-x-0 top-1/2 ${
                  !opened && "invisible"
                }`}
                onMouseEnter={() => setOpened(true)}
                onMouseLeave={() => setOpened(false)}
              >
                <a href="#">
                  <i
                    className="text-slate-100 fa fa-facebook fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="text-slate-100 fa fa-whatsapp fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="text-slate-100 fa fa-instagram fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="text-slate-100 fa fa-linkedin fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
            <div className="px-4 py-2 bg-gray-500 text-center">
              <p className="font-bold">Brandon Smith</p>
              <p className="text-sm italic text-slate-300">Intern</p>
            </div>
          </div>

          <div className="">
            <div className="relative">
              <Link to={"/chefs/id"}>
                <img
                  src={Chef4}
                  alt="chef-image"
                  className="
                 w-full h-96 object-cover hover/active:brightness-50"
                  onMouseEnter={() => setOpened(true)}
                  onMouseLeave={() => setOpened(false)}
                />
              </Link>
              <div
                className={`flex justify-evenly absolute inset-x-0 top-1/2 ${
                  !opened && "invisible"
                }`}
                onMouseEnter={() => setOpened(true)}
                onMouseLeave={() => setOpened(false)}
              >
                <a href="#">
                  <i
                    className="text-slate-100 fa fa-facebook fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="text-slate-100 fa fa-whatsapp fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="text-slate-100 fa fa-instagram fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="text-slate-100 fa fa-linkedin fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
            <div className="px-4 py-2 bg-gray-500 text-center">
              <p className="font-bold">Marcus Samuelsson</p>
              <p className="text-sm italic text-slate-300">Intern</p>
            </div>
          </div>

          <div className="">
            <div className="relative">
              <Link to={"/chefs/id"}>
                <img
                  src={Chef5}
                  alt="chef-image"
                  className="
                 w-full h-96 object-cover hover/active:brightness-50"
                  onMouseEnter={() => setOpened(true)}
                  onMouseLeave={() => setOpened(false)}
                />
              </Link>
              <div
                className={`flex justify-evenly absolute inset-x-0 top-1/2 ${
                  !opened && "invisible"
                }`}
                onMouseEnter={() => setOpened(true)}
                onMouseLeave={() => setOpened(false)}
              >
                <a href="#">
                  <i
                    className="text-slate-100 fa fa-facebook fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="text-slate-100 fa fa-whatsapp fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="text-slate-100 fa fa-instagram fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="text-slate-100 fa fa-linkedin fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
            <div className="px-4 py-2 bg-gray-500 text-center">
              <p className="font-bold">Wei Zhang</p>
              <p className="text-sm italic text-slate-300">Member</p>
            </div>
          </div>

          <div className="">
            <div className="relative">
              <Link to={"/chefs/id"}>
                <img
                  src={Chef6}
                  alt="chef-image"
                  className="
                 w-full h-96 object-cover hover/active:brightness-50"
                  onMouseEnter={() => setOpened(true)}
                  onMouseLeave={() => setOpened(false)}
                />
              </Link>
              <div
                className={`flex justify-evenly absolute inset-x-0 top-1/2 ${
                  !opened && "invisible"
                }`}
                onMouseEnter={() => setOpened(true)}
                onMouseLeave={() => setOpened(false)}
              >
                <a href="#">
                  <i
                    className="text-slate-100 fa fa-facebook fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="text-slate-100 fa fa-whatsapp fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="text-slate-100 fa fa-instagram fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="text-slate-100 fa fa-linkedin fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
            <div className="px-4 py-2 bg-gray-500 text-center">
              <p className="font-bold">Aaliyah Johnson</p>
              <p className="text-sm italic text-slate-300">Member</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-32 py-8 bg-gray-200">
        <h1 className="text-8xl text-center">❞</h1>
        <div className="text-center pb-6">
          <p className="text-slate-500 md:text-3xl text-xl">
            Cooking is a craft, I like to think, and a good cook is a
            craftsman—not an artist. There's nothing wrong with that. The great
            cathedrals of Europe were built by craftsmen—though not designed by
            them. Respect the chef as a craftsman.
          </p>
          <p className="text-right italic text-slate-500">
            ~by Anthony Bourdain
          </p>
        </div>
        <div className="text-center pb-6">
          <p className="text-slate-500 md:text-3xl text-xl">
            Cooking is an act of love, a gift, a way of sharing with others the
            little secrets—'piccoli segreti'—that are simmering on the burners.
          </p>
          <p className="text-right italic text-slate-500">
            ~by Massimo Bottura
          </p>
        </div>
        <div className="text-center pb-6">
          <p className="text-slate-500 md:text-3xl text-xl">
            A recipe has no soul. You, as the cook, must bring soul to the
            recipe.
          </p>
          <p className="text-right italic text-slate-500">~by Thomas Keller</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Chefs;
