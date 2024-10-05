import { Link } from "react-router-dom";
import Email from "../assets/images/gmail.png";

function Newsletter() {
  return (
    <section id="newsletter">
      <div className="newsletter__container">
        <img src={Email} alt="email image" />
        <h1>Newsletter</h1>
        <p>
          You want to join our community?
          <Link to="#">SignUp</Link>
        </p>
        <form>
          <label for="name">Full Name</label>
          <input type="text" id="name" placeholder="eg. Anton Max" />
          <label for="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="eg. antonmax@gmail.com"
            required
          />
          <button type="submit">
            <i className="fa fa-envelope" aria-hidden="true"></i>Subscribe
          </button>
        </form>
        {/* <h1>Newsletter</h1>
          <p>You want to join our community? <Link href="#">SignUp</Link></p>
          <form >
          <input type="text" id="name" placeholder="eg. Anton Max">
          <input type="email" name="email" id="email" placeholder="eg. antonmax@gmail.com" required>
          </form> */}
      </div>
    </section>
  );
}

export default Newsletter;
