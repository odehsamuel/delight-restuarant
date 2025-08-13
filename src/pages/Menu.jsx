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
      <div className="bg-[var(--hero-bg)] relative top-[6.6rem] mb-[6.6rem] h-[15rem]">
        <div className="text-gray-white mx-auto pb-[6rem] w-[42rem] relative top-20">
          <p className="bg-[var(--circle-1)] rounded-full h-20 w-20 absolute top-3"></p>
          <div className="text-center w-[36rem] mx-auto ">
            <h3 className="text-5xl font-bold">Our Exquisite Menu</h3>
            <p className="py-8 text-lg">
              Discover culinary masterpiece crafted with passion and the finest
              ingredients
            </p>
          </div>
          <p className="bg-[var(--circle-2)] rounded-full h-24 w-24 absolute right-0 -top-6"></p>
        </div>
      </div>
      <section className="bg-gray-border py-16">
        <div className="bg-gold-primary text-gray-white text-center rounded-xl w-3/4 mx-auto p-10 space-y-6">
          <h3 className="text-3xl font-medium">Chef's Seasonal Selection</h3>
          <p>
            Experience our chef's latest creations featuring seasonal
            ingredients and innovative techniques
          </p>
          <div className="bg-[var(--gold-primary-shadow)] rounded-xl p-6">
            <div className="bg-[var(--gold-primary-shadow)] relative shadow-xl text-center rounded-xl p-6">
              <div className="space-y-4">
                <span className="bg-gold-secondary rounded-3xl py-1 px-3 text-xs">
                  Chef's Choice
                </span>
                <h3 className="text-2xl font-medium">Autumn Harvest Risotto</h3>
                <p className="text-sm">
                  Butternut squash with roasted chestnuts, sage, and aged
                  Parmesan
                </p>
              </div>
              <h3 className="absolute top-4 right-6 text-xl font-medium">
                $34
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-border pb-16">
        <div className="bg-gray-white rounded-xl shadow-xl w-3/4 mx-auto p-12">
          <div className="text-center pb-8">
            <h1 className="text-gold-primary text-4xl font-semibold">
              Appetizers
            </h1>
            <hr className="mx-auto w-16 border-t-2 border-gold-primary mt-3"></hr>
          </div>
          <ul className="grid grid-cols-2 gap-8">
            <li className="bg-gray-border border-l-[3px] hover:shadow-xl hover:border-gold-primary rounded-xl flex gap-x-10 p-6">
              <div className="text-gray-medium space-y-4">
                <h3 className="text-2xl text-[var(--dark-secondary)] font-medium">
                  Oysters Rockefeller
                </h3>
                <p>
                  Fresh East Coast oysters with spinach, herbs, and Pernod
                  butter
                </p>
                <p className="italic text-gray-light">
                  Contains: Shellfish, Diary
                </p>
              </div>
              <p className="text-gold-primary text-2xl font-medium">$34</p>
            </li>

            <li className="bg-gray-border border-l-[3px] hover:shadow-xl hover:border-gold-primary rounded-xl flex gap-x-10 p-6">
              <div className="text-gray-medium space-y-4">
                <h3 className="text-2xl text-[var(--dark-secondary)] font-medium">
                  Tuna Tartare
                </h3>
                <p>
                  Sushi-grade yellowfin tuna with avocado, citrus, and sesame
                  oil
                </p>
                <p className="italic text-gray-light">Contains: Fish, Sesame</p>
              </div>
              <p className="text-gold-primary text-2xl font-medium">$25</p>
            </li>
            <li className="bg-gray-border border-l-[3px] hover:shadow-xl hover:border-gold-primary rounded-xl flex gap-x-10 p-6">
              <div className="text-gray-medium space-y-4">
                <h3 className="text-2xl text-[var(--dark-secondary)] font-medium">
                  Foie Gras Terrine
                </h3>
                <p>House-made terrine with brioche toast and cherry compote</p>
                <p className="italic text-gray-light">
                  Contains: Gluten, Diary
                </p>
              </div>
              <p className="text-gold-primary text-2xl font-medium">$18</p>
            </li>
            <li className="bg-gray-border border-l-[3px] hover:shadow-xl hover:border-gold-primary rounded-xl flex gap-x-10 p-6">
              <div className="text-gray-medium space-y-4">
                <h3 className="text-[var(--dark-secondary)] text-2xl font-medium">
                  Burrata Caprese
                </h3>
                <p>
                  Creamy burrata with herirloom tomatoes, base oil, and aged
                  balsamic
                </p>
                <p className="italic text-gray-light">Contains: Diary</p>
              </div>
              <p className="text-gold-primary text-2xl font-medium">$16</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-gray-border pb-16">
        <div className="bg-gray-white rounded-xl shadow-xl w-3/4 mx-auto p-12">
          <div className="text-center pb-8">
            <h1 className="text-gold-primary text-4xl font-semibold">
              Soups & Salads
            </h1>
            <hr className="mx-auto w-16 border-t-2 border-gold-primary mt-3"></hr>
          </div>
          <ul className="grid grid-cols-2 gap-8">
            <li className="bg-gray-border border-l-[3px] hover:shadow-xl hover:border-gold-primary rounded-xl flex gap-x-10 p-6">
              <div className="text-gray-medium space-y-4">
                <h3 className="text-2xl text-[var(--dark-secondary)] font-medium">
                  Lobster Bisque
                </h3>
                <p>Rich cream soup with fresh lobster meat and cognae</p>
                <p className="italic text-gray-light">
                  Contains: Shellfish, Diary, Alcohol
                </p>
              </div>
              <p className="text-gold-primary text-2xl font-medium">$34</p>
            </li>

            <li className="bg-gray-border border-l-[3px] hover:shadow-xl hover:border-gold-primary rounded-xl flex gap-x-10 p-6">
              <div className="text-gray-medium space-y-4">
                <h3 className="text-2xl text-[var(--dark-secondary)] font-medium">
                  Caesar Salad
                </h3>
                <p>Crisp romaine with house-made dressing, and Parmesan</p>
                <p className="italic text-gray-light">
                  Contains: Dairy, Gluten, Anchovies
                </p>
              </div>
              <p className="text-gold-primary text-2xl font-medium">$25</p>
            </li>
            <li className="bg-gray-border border-l-[3px] hover:shadow-xl hover:border-gold-primary rounded-xl flex gap-x-10 p-6">
              <div className="text-gray-medium space-y-4">
                <h3 className="text-2xl text-[var(--dark-secondary)] font-medium">
                  Arugula & Pear Salad
                </h3>
                <p>Baby arugula with poached pears, walnuts, and gorgonzola</p>
                <p className="italic text-gray-light">Contains: Gluten, Nuts</p>
              </div>
              <p className="text-gold-primary text-2xl font-medium">$18</p>
            </li>
            <li className="bg-gray-border border-l-[3px] hover:shadow-xl hover:border-gold-primary rounded-xl flex gap-x-10 p-6">
              <div className="text-gray-medium space-y-4">
                <h3 className="text-[var(--dark-secondary)] text-2xl font-medium">
                  French Onion Soup
                </h3>
                <p>Traditional recipe with Gruyere cheese and herb croutons</p>
                <p className="italic text-gray-light">
                  Contains: Diary, Gluten
                </p>
              </div>
              <p className="text-gold-primary text-2xl font-medium">$16</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-gray-border pb-16">
        <div className="bg-gray-white rounded-xl shadow-xl w-3/4 mx-auto p-12">
          <div className="text-center pb-8">
            <h1 className="text-gold-primary text-4xl font-semibold">
              Main Courses
            </h1>
            <hr className="mx-auto w-16 border-t-2 border-gold-primary mt-3"></hr>
          </div>
          <ul className="grid grid-cols-2 gap-8">
            <li className="bg-gray-border border-l-[3px] hover:shadow-xl hover:border-gold-primary rounded-xl flex gap-x-10 p-6">
              <div className="text-gray-medium space-y-4">
                <span className="bg-gold-secondary text-gray-white text-sm rounded-2xl py-1 px-3">
                  Signature Dish
                </span>
                <h3 className="text-2xl text-[var(--dark-secondary)] font-medium">
                  Wagyu Ribeye
                </h3>
                <p>
                  Japanses A5 Wagyu with truffle butter, roasted vegetables, and
                  red wine jus
                </p>
                <p className="italic text-gray-light">Contains: Dairy</p>
              </div>
              <p className="text-gold-primary text-2xl font-medium">$85</p>
            </li>

            <li className="bg-gray-border border-l-[3px] hover:shadow-xl hover:border-gold-primary rounded-xl flex gap-x-10 p-6">
              <div className="text-gray-medium space-y-4">
                <h3 className="text-2xl text-[var(--dark-secondary)] font-medium">
                  Atlantic Salmon
                </h3>
                <p>
                  Norwegian salmon with lemon herb crust and seasonal vegetables
                </p>
                <p className="italic text-gray-light">Contains: Fish</p>
              </div>
              <p className="text-gold-primary text-2xl font-medium">$25</p>
            </li>
            <li className="bg-gray-border border-l-[3px] hover:shadow-xl hover:border-gold-primary rounded-xl flex gap-x-10 p-6">
              <div className="text-gray-medium space-y-4">
                <h3 className="text-2xl text-[var(--dark-secondary)] font-medium">
                  Duck Confit
                </h3>
                <p>Slow-cooked duck leg with cherry gastrique and wild rice</p>
                <p className="italic text-gray-light">May Contains: Alcohol</p>
              </div>
              <p className="text-gold-primary text-2xl font-medium">$18</p>
            </li>
            <li className="bg-gray-border border-l-[3px] hover:shadow-xl hover:border-gold-primary rounded-xl flex gap-x-10 p-6">
              <div className="text-gray-medium space-y-4">
                <h3 className="text-[var(--dark-secondary)] text-2xl font-medium">
                  Truffle Carbonara
                </h3>
                <p>
                  Fresh pasta with black truffle, pancetta, and aged Parmesan
                </p>
                <p className="italic text-gray-light">
                  Contains: Gluten, Diary, Eggs
                </p>
              </div>
              <p className="text-gold-primary text-2xl font-medium">$16</p>
            </li>
            <li className="bg-gray-border border-l-[3px] hover:shadow-xl hover:border-gold-primary rounded-xl flex gap-x-10 p-6">
              <div className="text-gray-medium space-y-4">
                <h3 className="text-[var(--dark-secondary)] text-2xl font-medium">
                  Rack of Lamb
                </h3>
                <p>
                  Herb-crusted Australian lamb with ratatouille and mint jus
                </p>
                <p className="italic text-gray-light">Contains: Gluten</p>
              </div>
              <p className="text-gold-primary text-2xl font-medium">$42</p>
            </li>
            <li className="bg-gray-border border-l-[3px] hover:shadow-xl hover:border-gold-primary rounded-xl flex gap-x-10 p-6">
              <div className="text-gray-medium space-y-4">
                <h3 className="text-[var(--dark-secondary)] text-2xl font-medium">
                  Vegetarian Wellington
                </h3>
                <p>
                  Roasted vegetables and mushrooms in puff pastry with herb
                  sauce
                </p>
                <p className="italic text-gray-light">
                  Contains: Gluten, Diary
                </p>
              </div>
              <p className="text-gold-primary text-2xl font-medium">$16</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-gray-border pb-16">
        <div className="bg-gray-white rounded-xl shadow-xl w-3/4 mx-auto p-12">
          <div className="text-center pb-8">
            <h1 className="text-gold-primary text-4xl font-semibold">
              Desserts
            </h1>
            <hr className="mx-auto w-16 border-t-2 border-gold-primary mt-3"></hr>
          </div>
          <ul className="grid grid-cols-2 gap-8">
            <li className="bg-gray-border border-l-[3px] hover:shadow-xl hover:border-gold-primary rounded-xl flex gap-x-10 p-6">
              <div className="text-gray-medium space-y-4">
                <span className="bg-gold-secondary text-gray-white text-sm rounded-2xl py-1 px-3">
                  Popular
                </span>
                <h3 className="text-2xl text-[var(--dark-secondary)] font-medium">
                  Chocolate Souffle
                </h3>
                <p>Warm dark chocolate souffle with vanilla ice cream</p>
                <p className="italic text-gray-light">
                  Contains: Dairy, Eggs, Gluten
                </p>
              </div>
              <p className="text-gold-primary text-2xl font-medium">$15</p>
            </li>

            <li className="bg-gray-border border-l-[3px] hover:shadow-xl hover:border-gold-primary rounded-xl flex gap-x-10 p-6">
              <div className="text-gray-medium space-y-4">
                <h3 className="text-2xl text-[var(--dark-secondary)] font-medium">
                  Tiramisu
                </h3>
                <p>Traditional Italian dessert with espresso and mascarpone</p>
                <p className="italic text-gray-light">
                  Contains: Dairy, Eggs, Gluten, Caffeine
                </p>
              </div>
              <p className="text-gold-primary text-2xl font-medium">$16</p>
            </li>
            <li className="bg-gray-border border-l-[3px] hover:shadow-xl hover:border-gold-primary rounded-xl flex gap-x-10 p-6">
              <div className="text-gray-medium space-y-4">
                <h3 className="text-2xl text-[var(--dark-secondary)] font-medium">
                  Creme Brulee
                </h3>
                <p>Classic vanilla custard with caramelized sugar crust</p>
                <p className="italic text-gray-light">Contains: Dairy, Eggs</p>
              </div>
              <p className="text-gold-primary text-2xl font-medium">$12</p>
            </li>
            <li className="bg-gray-border border-l-[3px] hover:shadow-xl hover:border-gold-primary rounded-xl flex gap-x-10 p-6">
              <div className="text-gray-medium space-y-4">
                <h3 className="text-[var(--dark-secondary)] text-2xl font-medium">
                  Seasonal Fruit Tart
                </h3>
                <p>Pastry shell with pastry cream and fresh seasonal fruits</p>
                <p className="italic text-gray-light">
                  Contains: Gluten, Diary, Eggs
                </p>
              </div>
              <p className="text-gold-primary text-2xl font-medium">$14</p>
            </li>
          </ul>
        </div>
      </section>
      {/* <section id="newsletter" className="px-12 py-24">
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
      </section> */}
      <Footer />
    </>
  );
}

export default Menu;
