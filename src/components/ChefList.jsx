import Chef1 from "../assets/images/chef3.jpg";
import Chef2 from "../assets/images/chef7.jpg";
import Chef3 from "../assets/images/chef.jpg";

function ChefList() {
  return (
    <div>
      <section id="main__chefs">
        <h1 className="chef-title">Meet Our Chefs</h1>
        <div className="chefs">
          <div className="chefs__container">
            <div className="chefs__image">
              <img src={Chef1} alt="chef-1" />
              <div className="socials">
                <a href="#">
                  <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-whatsapp fa-lg" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="chefs__details">
              <h1 className="chef-name">Schwarts Michael</h1>
              <h3 className="chef-position">Chief Chef</h3>
              <p className="chef-description">
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
                  <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-whatsapp fa-lg" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
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
                  <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-whatsapp fa-lg" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
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
      </section>
    </div>
  );
}

export default ChefList;
