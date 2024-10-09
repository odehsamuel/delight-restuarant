import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Chef2 from "../assets/images/chef7.jpg";

function Chef() {
  return (
    <div>
      <NavBar />
      <div className="pt-20 px-32 sm:px-12 bg-slate-800">
        <h1 className="text-4xl text-rose-500 text-center py-4 italic font-bold">
          Chef name:
        </h1>
        <div className="flex justify-evenly pb-16">
          <p className="w-80 text-xl text-rose-500">
            ❝ Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
            perspiciatis maiores exercitationem rerum magnam voluptates expedita
            tempore inventore maxime sint mollitia, quibusdam vero excepturi
            illo odio praesentium sit reprehenderit? Aliquam accusamus ducimus
            perferendis pariatur recusandae facere vel ratione magnam eaque
            reprehenderit dolores sapiente illum, corporis consequuntur
            consectetur suscipit quos soluta? ❞
          </p>
          <div>
            <img src={Chef2} alt="chef-image" className="chef_image" />
            <div className="socials !bg-slate-600 ">
              <a href="#">
                <i className="fa fa-facebook fa-lg text-rose-500 !p-3" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-whatsapp fa-lg text-rose-500 !p-3" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram fa-lg text-rose-500 !p-3" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin fa-lg text-rose-500 !p-3" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Chef;
