import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
// import Chef1 from "../assets/images/chef3.jpg";
// import Chef2 from "../assets/images/chef7.jpg";
// import Chef3 from "../assets/images/chef.jpg";
// import Chef4 from "../assets/images/Marcus Samuelsson's New Cookbook Celebrates Black Chefs Across America.jpeg";
// import Chef5 from "../assets/images/chef4.jpg";
// import Chef6 from "../assets/images/chef2.jpg";
// import { useState } from "react";
// import { Link } from "react-router-dom";

function Chefs() {
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

  // const [opened, setOpened] = useState(false);

  return (
    // <div className="w-full">
    //   <NavBar />
    //   <h1 className="pt-28 text-3xl text-slate-800 text-center">Our Chefs</h1>
    //   <div className="mx-10 md:mx-24 pt-4 pb-8">
    //     <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 items-center pt-8  mx-4">
    //       <div className="container">
    //         <div className="relative">
    //           <Link to={"/chefs/id"}>
    //             <img
    //               src={Chef1}
    //               alt="chef-image"
    //               className="w-full h-96
    //               object-cover hover/active:brightness-50"
    //               onMouseEnter={() => setOpened(true)}
    //               onMouseLeave={() => setOpened(false)}
    //             />
    //           </Link>
    //           <div
    //             className={`flex justify-evenly absolute inset-x-0 top-1/2 ${
    //               !opened && "invisible"
    //             }`}
    //             onMouseEnter={() => setOpened(true)}
    //             onMouseLeave={() => setOpened(false)}
    //           >
    //             <a href="#">
    //               <i
    //                 className="text-slate-100 fa fa-facebook fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
    //                 aria-hidden="true"
    //               ></i>
    //             </a>
    //             <a href="#">
    //               <i
    //                 className="text-slate-100 fa fa-whatsapp fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
    //                 aria-hidden="true"
    //               ></i>
    //             </a>
    //             <a href="#">
    //               <i
    //                 className="text-slate-100 fa fa-instagram fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
    //                 aria-hidden="true"
    //               ></i>
    //             </a>
    //             <a href="#">
    //               <i
    //                 className="text-slate-100 fa fa-linkedin fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
    //                 aria-hidden="true"
    //               ></i>
    //             </a>
    //           </div>
    //         </div>
    //         <div className="px-4 py-2 bg-gray-500 text-center">
    //           <p className="font-bold">Schwarts Michael</p>
    //           <p className="text-sm italic text-slate-300">Chief chef</p>
    //         </div>
    //       </div>

    //       <div className="">
    //         <div className="relative">
    //           <Link to={"/chefs/id"}>
    //             <img
    //               src={Chef2}
    //               alt="chef-image"
    //               className="
    //              w-full h-96 object-cover hover/active:brightness-50"
    //               onMouseEnter={() => setOpened(true)}
    //               onMouseLeave={() => setOpened(false)}
    //             />
    //           </Link>
    //           <div
    //             className={`flex justify-evenly absolute inset-x-0 top-1/2 ${
    //               !opened && "invisible"
    //             }`}
    //             onMouseEnter={() => setOpened(true)}
    //             onMouseLeave={() => setOpened(false)}
    //           >
    //             <a href="#">
    //               <i
    //                 className="text-slate-100 fa fa-facebook fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
    //                 aria-hidden="true"
    //               ></i>
    //             </a>
    //             <a href="#">
    //               <i
    //                 className="text-slate-100 fa fa-whatsapp fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
    //                 aria-hidden="true"
    //               ></i>
    //             </a>
    //             <a href="#">
    //               <i
    //                 className="text-slate-100 fa fa-instagram fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
    //                 aria-hidden="true"
    //               ></i>
    //             </a>
    //             <a href="#">
    //               <i
    //                 className="text-slate-100 fa fa-linkedin fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
    //                 aria-hidden="true"
    //               ></i>
    //             </a>
    //           </div>
    //         </div>
    //         <div className="px-4 py-2 bg-gray-500 text-center">
    //           <p className="font-bold">George Lauren</p>
    //           <p className="text-sm italic text-slate-300">
    //             Assistant Chief chef
    //           </p>
    //         </div>
    //       </div>

    //       <div className="">
    //         <div className="relative">
    //           <Link to={"/chefs/id"}>
    //             <img
    //               src={Chef3}
    //               alt="chef-image"
    //               className="
    //              w-full h-96 object-cover hover/active:brightness-50"
    //               onMouseEnter={() => setOpened(true)}
    //               onMouseLeave={() => setOpened(false)}
    //             />
    //           </Link>
    //           <div
    //             className={`flex justify-evenly absolute inset-x-0 top-1/2 ${
    //               !opened && "invisible"
    //             }`}
    //             onMouseEnter={() => setOpened(true)}
    //             onMouseLeave={() => setOpened(false)}
    //           >
    //             <a href="#">
    //               <i
    //                 className="text-slate-100 fa fa-facebook fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
    //                 aria-hidden="true"
    //               ></i>
    //             </a>
    //             <a href="#">
    //               <i
    //                 className="text-slate-100 fa fa-whatsapp fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
    //                 aria-hidden="true"
    //               ></i>
    //             </a>
    //             <a href="#">
    //               <i
    //                 className="text-slate-100 fa fa-instagram fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
    //                 aria-hidden="true"
    //               ></i>
    //             </a>
    //             <a href="#">
    //               <i
    //                 className="text-slate-100 fa fa-linkedin fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
    //                 aria-hidden="true"
    //               ></i>
    //             </a>
    //           </div>
    //         </div>
    //         <div className="px-4 py-2 bg-gray-500 text-center">
    //           <p className="font-bold">Brandon Smith</p>
    //           <p className="text-sm italic text-slate-300">Intern</p>
    //         </div>
    //       </div>

    //       <div className="">
    //         <div className="relative">
    //           <Link to={"/chefs/id"}>
    //             <img
    //               src={Chef4}
    //               alt="chef-image"
    //               className="
    //              w-full h-96 object-cover hover/active:brightness-50"
    //               onMouseEnter={() => setOpened(true)}
    //               onMouseLeave={() => setOpened(false)}
    //             />
    //           </Link>
    //           <div
    //             className={`flex justify-evenly absolute inset-x-0 top-1/2 ${
    //               !opened && "invisible"
    //             }`}
    //             onMouseEnter={() => setOpened(true)}
    //             onMouseLeave={() => setOpened(false)}
    //           >
    //             <a href="#">
    //               <i
    //                 className="text-slate-100 fa fa-facebook fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
    //                 aria-hidden="true"
    //               ></i>
    //             </a>
    //             <a href="#">
    //               <i
    //                 className="text-slate-100 fa fa-whatsapp fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
    //                 aria-hidden="true"
    //               ></i>
    //             </a>
    //             <a href="#">
    //               <i
    //                 className="text-slate-100 fa fa-instagram fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
    //                 aria-hidden="true"
    //               ></i>
    //             </a>
    //             <a href="#">
    //               <i
    //                 className="text-slate-100 fa fa-linkedin fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
    //                 aria-hidden="true"
    //               ></i>
    //             </a>
    //           </div>
    //         </div>
    //         <div className="px-4 py-2 bg-gray-500 text-center">
    //           <p className="font-bold">Marcus Samuelsson</p>
    //           <p className="text-sm italic text-slate-300">Intern</p>
    //         </div>
    //       </div>

    //       <div className="">
    //         <div className="relative">
    //           <Link to={"/chefs/id"}>
    //             <img
    //               src={Chef5}
    //               alt="chef-image"
    //               className="
    //              w-full h-96 object-cover hover/active:brightness-50"
    //               onMouseEnter={() => setOpened(true)}
    //               onMouseLeave={() => setOpened(false)}
    //             />
    //           </Link>
    //           <div
    //             className={`flex justify-evenly absolute inset-x-0 top-1/2 ${
    //               !opened && "invisible"
    //             }`}
    //             onMouseEnter={() => setOpened(true)}
    //             onMouseLeave={() => setOpened(false)}
    //           >
    //             <a href="#">
    //               <i
    //                 className="text-slate-100 fa fa-facebook fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
    //                 aria-hidden="true"
    //               ></i>
    //             </a>
    //             <a href="#">
    //               <i
    //                 className="text-slate-100 fa fa-whatsapp fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
    //                 aria-hidden="true"
    //               ></i>
    //             </a>
    //             <a href="#">
    //               <i
    //                 className="text-slate-100 fa fa-instagram fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
    //                 aria-hidden="true"
    //               ></i>
    //             </a>
    //             <a href="#">
    //               <i
    //                 className="text-slate-100 fa fa-linkedin fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
    //                 aria-hidden="true"
    //               ></i>
    //             </a>
    //           </div>
    //         </div>
    //         <div className="px-4 py-2 bg-gray-500 text-center">
    //           <p className="font-bold">Wei Zhang</p>
    //           <p className="text-sm italic text-slate-300">Member</p>
    //         </div>
    //       </div>

    //       <div className="">
    //         <div className="relative">
    //           <Link to={"/chefs/id"}>
    //             <img
    //               src={Chef6}
    //               alt="chef-image"
    //               className="
    //              w-full h-96 object-cover hover/active:brightness-50"
    //               onMouseEnter={() => setOpened(true)}
    //               onMouseLeave={() => setOpened(false)}
    //             />
    //           </Link>
    //           <div
    //             className={`flex justify-evenly absolute inset-x-0 top-1/2 ${
    //               !opened && "invisible"
    //             }`}
    //             onMouseEnter={() => setOpened(true)}
    //             onMouseLeave={() => setOpened(false)}
    //           >
    //             <a href="#">
    //               <i
    //                 className="text-slate-100 fa fa-facebook fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
    //                 aria-hidden="true"
    //               ></i>
    //             </a>
    //             <a href="#">
    //               <i
    //                 className="text-slate-100 fa fa-whatsapp fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
    //                 aria-hidden="true"
    //               ></i>
    //             </a>
    //             <a href="#">
    //               <i
    //                 className="text-slate-100 fa fa-instagram fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
    //                 aria-hidden="true"
    //               ></i>
    //             </a>
    //             <a href="#">
    //               <i
    //                 className="text-slate-100 fa fa-linkedin fa-lg hover:bg-slate-100 rounded-full py-2 px-3 hover:text-rose-500"
    //                 aria-hidden="true"
    //               ></i>
    //             </a>
    //           </div>
    //         </div>
    //         <div className="px-4 py-2 bg-gray-500 text-center">
    //           <p className="font-bold">Aaliyah Johnson</p>
    //           <p className="text-sm italic text-slate-300">Member</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="px-32 py-8 bg-gray-200">
    //     <h1 className="text-8xl text-center">❞</h1>
    //     <div className="text-center pb-6">
    //       <p className="text-slate-500 md:text-3xl text-xl">
    //         Cooking is a craft, I like to think, and a good cook is a
    //         craftsman—not an artist. There's nothing wrong with that. The great
    //         cathedrals of Europe were built by craftsmen—though not designed by
    //         them. Respect the chef as a craftsman.
    //       </p>
    //       <p className="text-right italic text-slate-500">
    //         ~by Anthony Bourdain
    //       </p>
    //     </div>
    //     <div className="text-center pb-6">
    //       <p className="text-slate-500 md:text-3xl text-xl">
    //         Cooking is an act of love, a gift, a way of sharing with others the
    //         little secrets—'piccoli segreti'—that are simmering on the burners.
    //       </p>
    //       <p className="text-right italic text-slate-500">
    //         ~by Massimo Bottura
    //       </p>
    //     </div>
    //     <div className="text-center pb-6">
    //       <p className="text-slate-500 md:text-3xl text-xl">
    //         A recipe has no soul. You, as the cook, must bring soul to the
    //         recipe.
    //       </p>
    //       <p className="text-right italic text-slate-500">~by Thomas Keller</p>
    //     </div>
    //   </div>
    //   <Footer />
    // </div>
    <>
      <NavBar />
      <motion.div
        className="bg-[var(--hero-bg)] relative top-[6.6rem] mb-[6.6rem] h-[25rem]"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-gray-white mx-auto pb-[6rem] w-[42rem] relative top-20">
          <p className="bg-[var(--circle-1)] rounded-full h-[4.5rem] w-[4.5rem] absolute left-10"></p>
          <div
            className="text-center w-[37rem] pt-8 mx-auto "
            variants={headerTextVariant}
          >
            <motion.h3 className="text-5xl font-bold">
              Meet Our Culinary Masters
            </motion.h3>
            <motion.p className="py-8 text-lg" variants={textVariant}>
              Discover the passionate chefs behind every exceptionaldish at
              Delightful Kitchen.
            </motion.p>
          </div>
          <p className="bg-[var(--circle-3)] rounded-full h-24 w-24 absolute right-0 bottom-16"></p>
        </div>
      </motion.div>
      <section className="bg-gray-border py-16">
        <ul className="space-y-20">
          <li className="bg-gray-white w-3/4 mx-auto rounded-xl shadow-lg px-10 py-8 space-y-6">
            <div className="flex items-center">
              <div className="bg-gold-primary rounded-full flex items-center justify-center text-gray-white w-28 h-28 mr-10 text-3xl font-medium">
                SM
              </div>
              <div>
                <h3 className="font-medium text-2xl">Schwartz Michael</h3>
                <p className="text-gold-primary py-3 italic">
                  Executive Chef & Culinary Director
                </p>
                <p>Culinary Institute of America . James Beard Award Nominee</p>
                <div className="flex items-center space-x-5 mt-2">
                  <div className="rounded-full bg-gold-primary w-8 h-8 flex items-center justify-center">
                    <a href="#">
                      <i
                        className="fa fa-facebook fa-lg text-2xl hover:text-gold-primary"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                  <div className="rounded-full bg-gold-primary w-8 h-8 flex items-center justify-center">
                    <a href="#">
                      <i
                        className="fa fa-instagram fa-lg text-2xl hover:text-gold-primary"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                  <div className="rounded-full bg-gold-primary w-8 h-8 flex items-center justify-center">
                    <a href="#">
                      <i
                        className="fa fa-linkedin fa-lg text-2xl text-gray-white hover:text-gold-primary"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <p>
                Chef Schwartz Michael brings over 15 years of culinary
                experience to Delightful Kitchen. Trained at the prestigious
                Culinary Institute of America, he has worked in Michelin-starred
                restaurants across Europe and Americ. His philosophy centers on
                combining traditional techniques with innovative presentations,
                creating dishes that honor the past while embracing the future
                of gastrononmy.
              </p>
              <p>
                After spending five years as Sous Che at Le Bernardin in New
                York and three years leading the Kitchen at The French Laundary
                in California, Chef Michael joined Delightful Kitchen with a
                vision to create an unparallel dining experience that Celebrates
                both local ingredients and international flavors.
              </p>
            </div>
            <div className="bg-gray-border rounded-xl p-6">
              <h3 className="text-gold-primary font-medium text-xl pb-3">
                Culinary Specialties
              </h3>
              <div className="flex items-center justify-between">
                <p className="bg-gray-white py-3 px-5 rounded-lg shadow-lg">
                  Modern French Cuisine
                </p>
                <p className="bg-gray-white py-3 px-5 rounded-lg shadow-lg">
                  Molecular Gastronomy
                </p>
                <p className="bg-gray-white py-3 px-5 rounded-lg shadow-lg">
                  Seasonal Menu Design
                </p>
                <p className="bg-gray-white py-3 px-5 rounded-lg shadow-lg">
                  Wine Pairing
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-medium pb-4">Signature Creation</h3>
              <ul className="flex justify-between gap-8">
                <li className="bg-gray-border rounded-lg p-4 text-center">
                  <h3 className="text-gold-primary font-medium pb-2 text-lg">
                    Truffle Carbonara Reimagined
                  </h3>
                  <p>
                    A deconstructed take on the classic with house-made pasta
                    and aged Parmesan foam
                  </p>
                </li>
                <li className="bg-gray-border rounded-lg p-4 text-center">
                  <h3 className="text-gold-primary font-medium pb-2 text-lg">
                    Wagyu Beef Wellington
                  </h3>
                  <p>
                    Premium Japanese beef wrapped in herb pate and golden puff
                    pastry
                  </p>
                </li>
                <li className="bg-gray-border rounded-lg p-4 text-center">
                  <h3 className="text-gold-primary font-medium pb-2 text-lg">
                    Lobster Bisque Speher
                  </h3>
                  <p>
                    An interactive dining experience with molecular gastronomy
                    techniques
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li className="bg-gray-white w-3/4 mx-auto rounded-xl shadow-lg px-10 py-8 space-y-6">
            <div className="flex items-center">
              <div className="bg-gold-primary rounded-full flex items-center justify-center text-gray-white w-28 h-28 mr-10 text-3xl font-medium">
                GL
              </div>
              <div>
                <h3 className="font-medium text-2xl">George Lauren</h3>
                <p className="text-gold-primary py-2 italic">
                  Executive Pastry Chef
                </p>
                <p>Le Cordon Bleu Paris . World Pastry Cup Champion</p>
                <div className="flex items-center space-x-5 mt-2">
                  <div className="rounded-full bg-gold-primary w-8 h-8 flex items-center justify-center">
                    <a href="#">
                      <i
                        className="fa fa-facebook fa-lg text-2xl hover:text-gold-primary"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                  <div className="rounded-full bg-gold-primary w-8 h-8 flex items-center justify-center">
                    <a href="#">
                      <i
                        className="fa fa-instagram fa-lg text-2xl hover:text-gold-primary"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                  <div className="rounded-full bg-gold-primary w-8 h-8 flex items-center justify-center">
                    <a href="#">
                      <i
                        className="fa fa-linkedin fa-lg text-2xl text-gray-white hover:text-gold-primary"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <p>
                Chef George Lauren is our award-winning pastry virtuoso,
                bringing artistic vision and technical precision to every
                dessert. Trained at Le Cordon Bleu Paris and winner of the World
                Pastry Cup, sha has transformed the dessert experience at
                Delightful Kitchen into edible art.
              </p>
              <p>
                Her background includes prestigious positions at Laduree in
                Paris and Daniel in New York. Chef Lauren's creations are not
                just desserts - they're architectural mervels that engage all
                the senses, combining unexpected flavors with stunning visual
                presentations that leave guests in awe.
              </p>
            </div>
            <div className="bg-gray-border rounded-xl p-6">
              <h3 className="text-gold-primary font-medium text-xl pb-3">
                Pastry Specialties
              </h3>
              <div className="flex items-center justify-between">
                <p className="bg-gray-white py-3 px-5 rounded-lg shadow-lg">
                  French Patisserie
                </p>
                <p className="bg-gray-white py-3 px-5 rounded-lg shadow-lg">
                  Chocolate Sculptures
                </p>
                <p className="bg-gray-white py-3 px-5 rounded-lg shadow-lg">
                  Sugar Art
                </p>
                <p className="bg-gray-white py-3 px-5 rounded-lg shadow-lg">
                  Artisan Bread
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-medium pb-4">Signature Creation</h3>
              <ul className="flex justify-between gap-8">
                <li className="bg-gray-border rounded-lg p-4 text-center">
                  <h3 className="text-gold-primary font-medium pb-2 text-lg">
                    Chocolate Garden
                  </h3>
                  <p>
                    An edible landscape featuring chocolate soil, sugar flowers,
                    and vanilla bean ice cream
                  </p>
                </li>
                <li className="bg-gray-border rounded-lg p-4 text-center">
                  <h3 className="text-gold-primary font-medium pb-2 text-lg">
                    Levitatingg Lemon Tart
                  </h3>
                  <p>
                    A gravity-defying dessert with suspended elements and citrus
                    caviar
                  </p>
                </li>
                <li className="bg-gray-border rounded-lg p-4 text-center">
                  <h3 className="text-gold-primary font-medium pb-2 text-lg">
                    Golden Sphere
                  </h3>
                  <p>
                    A 24-kart gold-dusted chocolate sphere that melts to reveal
                    seasonal fruit parfait
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li className="bg-gray-white w-3/4 mx-auto rounded-xl shadow-lg px-10 py-8 space-y-6">
            <div className="flex items-center">
              <div className="bg-gold-primary rounded-full flex items-center justify-center text-gray-white w-28 h-28 mr-10 text-3xl font-medium">
                SM
              </div>
              <div>
                <h3 className="font-medium text-2xl">Brandon Smith</h3>
                <p className="text-gold-primary py-2 italic">
                  Sous Chef & Sustainability Director
                </p>
                <p>Johnson & Wales University . Certified Green Chef</p>
                <div className="flex items-center space-x-5 mt-2">
                  <div className="rounded-full bg-gold-primary w-8 h-8 flex items-center justify-center">
                    <a href="#">
                      <i
                        className="fa fa-facebook fa-lg text-2xl hover:text-gold-primary"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                  <div className="rounded-full bg-gold-primary w-8 h-8 flex items-center justify-center">
                    <a href="#">
                      <i
                        className="fa fa-instagram fa-lg text-2xl hover:text-gold-primary"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                  <div className="rounded-full bg-gold-primary w-8 h-8 flex items-center justify-center">
                    <a href="#">
                      <i
                        className="fa fa-linkedin fa-lg text-2xl text-gray-white hover:text-gold-primary"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <p>
                Chef George Lauren is our award-winning pastry virtuoso,
                bringing artistic vision and technical precision to every
                dessert. Trained at Le Cordon Bleu Paris and winner of the World
                Pastry Cup, sha has transformed the dessert experience at
                Delightful Kitchen into edible art.
              </p>
              <p>
                Her background includes prestigious positions at Laduree in
                Paris and Daniel in New York. Chef Lauren's creations are not
                just desserts - they're architectural mervels that engage all
                the senses, combining unexpected flavors with stunning visual
                presentations that leave guests in awe.
              </p>
            </div>
            <div className="bg-gray-border rounded-xl p-6">
              <h3 className="text-gold-primary font-medium text-xl pb-3">
                Culinary Focus Areas
              </h3>
              <div className="flex items-center justify-between">
                <p className="bg-gray-white py-3 px-5 rounded-lg shadow-lg">
                  Farm-to-Table Cusine
                </p>
                <p className="bg-gray-white py-3 px-5 rounded-lg shadow-lg">
                  Organic Ingredients
                </p>
                <p className="bg-gray-white py-3 px-5 rounded-lg shadow-lg">
                  Zero-Waste Cooking
                </p>
                <p className="bg-gray-white py-3 px-5 rounded-lg shadow-lg">
                  Seasonal Menus
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-medium pb-4">Signature Creation</h3>
              <ul className="flex justify-between gap-8">
                <li className="bg-gray-border rounded-lg p-4 text-center">
                  <h3 className="text-gold-primary font-medium pb-2 text-lg">
                    Garden Harvest Bowl
                  </h3>
                  <p>
                    Locally sourced vegetables rrepared seven different ways
                    with herb-infused oils
                  </p>
                </li>
                <li className="bg-gray-border rounded-lg p-4 text-center">
                  <h3 className="text-gold-primary font-medium pb-2 text-lg">
                    Sustainable Seafood Platter
                  </h3>
                  <p>
                    Responsibly caught fish and shellfish with seaweed and
                    coastal herbs
                  </p>
                </li>
                <li className="bg-gray-border rounded-lg p-4 text-center">
                  <h3 className="text-gold-primary font-medium pb-2 text-lg">
                    Heritage Grains Risotto
                  </h3>
                  <p>
                    Ancient grains from local farms with seasonal mushrooms and
                    truffle oil
                  </p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </section>
      <section className="bg-gray-border pb-36">
        <div className="bg-dark-primary rounded-2xl w-3/4 mx-auto py-14">
          <div className="text-center pb-6">
            <h1 className="text-gray-white text-2xl font-medium py-3">
              Recognition & Awards
            </h1>
            <p className="text-gray-white text-sm">
              Our culinary team's dedication to excellence has been recognized
              by industry leaders
            </p>
          </div>
          <div className="grid grid-cols-4 gap-x-8 justify-center gap-y-8 px-10">
            <div className="container space-y-2 bg-gray-medium text-center shadow-lg rounded-xl py-8 px-6">
              <div className="rounded-full bg-gold-primary w-20 h-20 mx-auto flex items-center justify-center">
                ⭐
              </div>
              <h3 className="text-xl font-bold text-gold-primary">
                James Beard Nomination
              </h3>
              <p className="text-gray-white text-base">
                Outstanding Chef Recognition
              </p>
            </div>

            <div className="container space-y-2 bg-gray-medium text-center shadow-lg rounded-xl py-8 px-6">
              <div className="rounded-full bg-gold-primary w-20 h-20 mx-auto flex items-center justify-center">
                ⏱️
              </div>
              <h3 className="text-xl font-bold text-gold-primary">
                AAA five Diamond
              </h3>
              <p className="text-gray-white text-base">
                Restaurant Excellence Award
              </p>
            </div>

            <div className="container space-y-2 bg-gray-medium text-center shadow-lg rounded-xl py-8 px-6">
              <div className="rounded-full bg-gold-primary w-20 h-20 mx-auto flex items-center justify-center">
                🥜
              </div>
              <h3 className="text-xl font-bold text-gold-primary">
                World Pastry Cup
              </h3>
              <p className="text-gray-white text-base">
                International Champion
              </p>
            </div>

            <div className="container space-y-2 bg-gray-medium text-center shadow-lg rounded-xl py-8 px-6">
              <div className="rounded-full bg-gold-primary w-20 h-20 mx-auto flex items-center justify-center">
                ⭐
              </div>
              <h3 className="text-xl font-bold text-gold-primary">
                Green Restaurant
              </h3>
              <p className="text-gray-white text-base">
                Sustainability Excellence
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-border pb-36">
        <div className="bg-gray-white w-3/4 mx-auto rounded-xl text-center shadow-lg p-12">
          <div className="text-center pb-6">
            <h3 className="text-4xl font-bold">Our Culinary Philosophy</h3>
            <hr className="mx-auto w-16 border-t-[3px] border-gold-primary mt-3"></hr>
          </div>
          <h1 className="text-gold-primary text-6xl text-left h-6">❝</h1>
          <p className="text-gray-medium text-base px-12">
            Cooking is not just about feeding the body; it's about nourishing
            the soul. Every dish we create is a canvas where tradition meets
            innovation, where local ingredients tell global stories, and where
            every bite creates a memory that lasts a lifetime.
          </p>
          <h1 className="text-gold-primary text-6xl text-right h-6">❞</h1>
          <p className="py-8 text-sm">
            - The Culinary Team at Delightful Kitchen
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Chefs;
