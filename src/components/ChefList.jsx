import Chef1 from "../assets/images/chef3.jpg";
import Chef2 from "../assets/images/chef7.jpg";
import Chef3 from "../assets/images/chef.jpg";
import { Link } from "react-router-dom";

function ChefList() {
  return (
    <div className="bg-gray-white py-16">
      <section>
        <h1 className="text-center font-bold text-4xl pb-20 text-slate-800">
          Meet Our Culinary Masters
        </h1>
        <ul className="w-3/4 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center gap-10">
          <li className="container transition hover:translate-y-3 bg-gray-border overflow-hidden rounded-xl shadow-lg">
            <div className="relative">
              <img
                src={Chef1}
                alt=""
                className="w-full h-[30rem] object-cover"
              />
              <ul className="bg-[var(--gold-bg-2)] border-b-4 border-b-gold-primary flex justify-center items-center absolute h-16 bottom-0 inset-x-0 space-x-8">
                <a
                  href="#"
                  className="bg-gold-primary hover:bg-gray-white rounded-full w-12 h-12 flex justify-center items-center"
                >
                  <i
                    className="fa fa-facebook fa-lg text-gray-border hover:text-gold-primary p-4"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  href="#"
                  className="bg-gold-primary hover:bg-gray-white rounded-full w-12 h-12 p-2 flex justify-center items-center"
                >
                  <i
                    className="fa fa-whatsapp fa-lg text-gray-border hover:text-gold-primary"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  href="#"
                  className="bg-gold-primary hover:bg-gray-white rounded-full w-12 h-12 p-2 flex justify-center items-center"
                >
                  <i
                    className="fa fa-instagram fa-lg text-gray-border hover:text-gold-primary"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  href="#"
                  className="bg-gold-primary hover:bg-gray-white rounded-full w-12 h-12 p-2 flex justify-center items-center"
                >
                  <i
                    className="fa fa-linkedin fa-lg text-gray-border hover:text-gold-primary"
                    aria-hidden="true"
                  ></i>
                </a>
              </ul>
            </div>
            <div className="text-center space-y-2 p-6">
              <h3 className="text-gold-primary font-medium text-3xl ">
                Schwartz Michael
              </h3>
              <p className="text-gold-primary italic pb-4">
                Executive Chef & Culinary Director
              </p>
              <p className="text-gray-medium">
                Specializing in modern fusion cuisine with classical French
                techniqures
              </p>
            </div>
          </li>
          <li className="container transition hover:translate-y-3 bg-gray-border overflow-hidden rounded-xl shadow-lg">
            <div className="relative">
              <img
                src={Chef2}
                alt=""
                className="w-full h-[30rem] object-cover"
              />
              <ul className="bg-[var(--gold-bg-2)] border-b-4 border-b-gold-primary flex justify-center items-center absolute h-16 bottom-0 inset-x-0 space-x-8">
                <a
                  href="#"
                  className="bg-gold-primary hover:bg-gray-white rounded-full w-12 h-12 p-2 flex justify-center items-center"
                >
                  <i
                    className="fa fa-facebook fa-lg text-gray-border hover:text-gold-primary"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  href="#"
                  className="bg-gold-primary hover:bg-gray-white rounded-full w-12 h-12 p-2 flex justify-center items-center"
                >
                  <i
                    className="fa fa-whatsapp fa-lg text-gray-border hover:text-gold-primary"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  href="#"
                  className="bg-gold-primary hover:bg-gray-white rounded-full w-12 h-12 p-2 flex justify-center items-center"
                >
                  <i
                    className="fa fa-instagram fa-lg text-gray-border hover:text-gold-primary"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  href="#"
                  className="bg-gold-primary hover:bg-gray-white rounded-full w-12 h-12 p-2 flex justify-center items-center"
                >
                  <i
                    className="fa fa-linkedin fa-lg text-gray-border hover:text-gold-primary"
                    aria-hidden="true"
                  ></i>
                </a>
              </ul>
            </div>
            <div className="text-center space-y-2 p-6">
              <h3 className="text-gold-primary font-medium text-3xl ">
                George Lauren
              </h3>
              <p className="text-gold-primary italic pb-4">
                Executive Pastry Chef
              </p>
              <p className="text-gray-medium">
                Creating artistic desserts and artisanal breads with seasonal
                ingredients
              </p>
            </div>
          </li>
          <li className="container transition hover:translate-y-3 bg-gray-border overflow-hidden rounded-xl shadow-lg">
            <div className="relative">
              <img
                src={Chef3}
                alt=""
                className="w-full h-[30rem] object-cover"
              />
              <ul className="bg-[var(--gold-bg-2)] border-b-4 border-b-gold-primary flex justify-center items-center absolute h-16 bottom-0 inset-x-0 space-x-8">
                <a
                  href="#"
                  className="bg-gold-primary hover:bg-gray-white rounded-full w-12 h-12 p-2 flex justify-center items-center"
                >
                  <i
                    className="fa fa-facebook fa-lg text-gray-border hover:text-gold-primary"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  href="#"
                  className="bg-gold-primary hover:bg-gray-white rounded-full w-12 h-12 p-2 flex justify-center items-center"
                >
                  <i
                    className="fa fa-whatsapp fa-lg text-gray-border hover:text-gold-primary"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  href="#"
                  className="bg-gold-primary hover:bg-gray-white rounded-full w-12 h-12 p-2 flex justify-center items-center"
                >
                  <i
                    className="fa fa-instagram fa-lg text-gray-border hover:text-gold-primary"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  href="#"
                  className="bg-gold-primary hover:bg-gray-white rounded-full w-12 h-12 p-2 flex justify-center items-center"
                >
                  <i
                    className="fa fa-linkedin fa-lg text-gray-border hover:text-gold-primary"
                    aria-hidden="true"
                  ></i>
                </a>
              </ul>
            </div>
            <div className="text-center space-y-2 p-6">
              <h3 className="text-gold-primary font-medium text-3xl ">
                Brandon Smith
              </h3>
              <p className="text-gold-primary italic pb-4">
                Sous Chef & Farm-to-Table Coordinator
              </p>
              <p className="text-gray-medium">
                Champion of sustainable cooking and locally sourced seasonal
                ingredients
              </p>
            </div>
          </li>
        </ul>
        <div className="text-center space-y-6 pt-8">
          <p className="text-gray-medium">
            Want to learn more about our culinary philosophy and chef
            backgrounds?
          </p>
          <Link
            to={"/chefs"}
            className="text-gray-white bg-gold-primary rounded-3xl inline-block py-2 px-8 text-center"
          >
            Discover Our Culinary Stories
          </Link>
        </div>
      </section>
      {/* <section>
        <div>
          <div className="w-[40rem] flex justify-between">
            <div className="w-1/3">
              <img src={Chef1} alt="chef-1" />
              <div className="bg-gold-primary text-gray-white flex justify-center items-center py-4">
                <a
                  href="#"
                  className="hover:bg-gray-white rounded-full w-8 h-8 flex items-center justify-center hover:text-gold-primary"
                >
                  <i
                    className="fa fa-facebook fa-lg p-2"
                    aria-hidden="true"
                  ></i>
                </a>

                <a
                  href="#"
                  className="hover:bg-gray-white rounded-full w-8 h-8 flex items-center justify-center hover:text-gold-primary"
                >
                  <i
                    className="fa fa-whatsapp fa-lg p-2"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-white rounded-full w-8 h-8 flex items-center justify-center hover:text-gold-primary"
                >
                  <i
                    className="fa fa-instagram fa-lg p-2"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-white rounded-full w-8 h-8 flex items-center justify-center hover:text-gold-primary"
                >
                  <i
                    className="fa fa-linkedin fa-lg p-2"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
            <div className="chefs__details">
              <h1 className="text-3xl">Schwarts Michael</h1>
              <h3 className="text-gold-primary italic">Chief Chef</h3>
              <p className="text-wrap">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus nobis perferendis ratione, temporibus quos
                blanditiis ipsam consectetur veniam in laboriosam eveniet ex
                numquam atque vero inventore perspiciatis ipsum quo adipisci
                distinctio maiores autem rerum ducimus. Molestiae, repudiandae
                assumenda. Vitae ullam, at cupiditate repellat laudantium quas
                et cum nihil numquam rerum?
              </p>
            </div>
          </div>

          <div className="chefs__container inverted-chef">
            <div className="chefs__image">
              <img src={Chef2} alt="chef-2" />
              <div className="socials">
                <a href="#">
                  <i
                    className="fa fa-facebook fa-lg p-2"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa fa-whatsapp fa-lg p-2"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa fa-instagram fa-lg p-2"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa fa-linkedin fa-lg p-2"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
            <div className="chefs__details">
              <h1 className="chef-name">George Lauren</h1>
              <h3 className="chef-position">Assistant Chief Chef</h3>
              <p className="chef-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                delectus ullam, facere veritatis dolorum blanditiis nulla
                inventore harum assumenda, voluptatem libero cumque labore
                similique? Atque ullam, tempore molestiae suscipit harum fugit
                ipsa debitis. Sapiente nisi hic quidem beatae sint minus eveniet
                nam recusandae. Tenetur, expedita!
              </p>
            </div>
          </div>
          <div className="clearfix"></div>

          <div className="chefs__container">
            <div className="chefs__image">
              <img src={Chef3} alt="chef-3" />
              <div className="socials">
                <a href="#">
                  <i
                    className="fa fa-facebook fa-lg p-2"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa fa-whatsapp fa-lg p-2"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa fa-instagram fa-lg p-2"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa fa-linkedin fa-lg p-2"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
            <div className="chefs__details">
              <h1 className="chef-name">Brandon Smith</h1>
              <h3 className="chef-position">Intern</h3>
              <p className="chef-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti sequi quibusdam iusto eos velit atque saepe in.
                Nesciunt cumque magnam earum minima? Accusamus, iusto voluptate
                vero quia eum rerum ex facere blanditiis quidem ab sapiente.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default ChefList;
