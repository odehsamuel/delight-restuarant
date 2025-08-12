import menu from "../assets/images/menu.png";
import flower from "../assets/images/flower.png";
import { Link } from "react-router-dom";

function Reservation() {
  return (
    // <div className="py-10 px-4 bg-slate-200 relative">
    //   <h1 className="text-center text-slate-800 font-bold text-3xl pb-8">
    //     Book A Reservation
    //   </h1>
    //   <img
    //     src={flower}
    //     alt="flower"
    //     className="sm:w-36 sm:h-36 w-28 h-28 opacity-30 absolute top-2 left-2"
    //   />
    //   <div className="flex items-center justify-center justify-items-center relative py-8">
    //     <img
    //       src={menu}
    //       alt="background-image"
    //       className="object-cover md:mr-20 sm:h-96 sm:w-80 h-72 w-54 opacity-30 sm:opacity-30"
    //     />
    //     <form className="sm:w-96 w-72 rounded-md sm:bg-neutral-300 border-2 border-slate-300 px-3 py-2 absolute sm:relative">
    //       <div className="py-1.5">
    //         <label htmlFor="name" className="text-slate-700 pb-2">
    //           Full Name:
    //         </label>
    //         <input
    //           type="text"
    //           placeholder="e.g Finn Mark"
    //           className="rounded-md outline-none bg-slate-200 border-2 border-slate-400/50 text-slate-700 hover/active:bg-blue-100 px-2 py-1"
    //         />
    //       </div>
    //       <div className="py-1.5">
    //         <label htmlFor="phone" className="text-slate-700 pb-2">
    //           Phone:
    //         </label>
    //         <input
    //           type="text"
    //           placeholder="e.g +234 1234567890"
    //           className="rounded-md outline-none bg-slate-200 border-2 border-slate-400/50 text-slate-700 hover/active:bg-blue-100 px-2 py-1"
    //         />
    //       </div>
    //       <div className="py-1.5">
    //         <label htmlFor="date" className="text-slate-700 pb-2">
    //           Date & Time:
    //         </label>
    //         <input
    //           type="datetime-local"
    //           className="rounded-md outline-none bg-slate-200 border-2 border-slate-400/50 text-slate-700 hover/active:bg-blue-100 px-2 py-1"
    //         />
    //       </div>
    //       <div className="py-1.5">
    //         <label htmlFor="table" className="text-slate-700 pb-2">
    //           Table for:
    //         </label>
    //         <input
    //           type="number"
    //           placeholder="e.g 1"
    //           className="rounded-md outline-none bg-slate-200 border-2 border-slate-400/50 text-slate-700 hover/active:bg-blue-100 px-2 py-1"
    //           max={5}
    //           min={1}
    //         />
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div id="reserve-table" className="bg-gray-border py-32">
      <div className="bg-dark-secondary w-3/6 rounded-2xl px-10 pt-8 pb-16 mx-auto text-center">
        <h2 className="text-4xl text-gray-white my-6 font-semibold">
          Reserve Your Table Today!
        </h2>
        <p className="text-gray-white text-lg mb-8">
          Experience culinary excellence in an intimate setting. Book your table
          for an unforgettable evening.
        </p>
        <Link
          to="/menu"
          className="bg-gold-primary text-gray-white rounded-3xl px-6 py-2 text-lg"
        >
          Make a Reservation
        </Link>
      </div>
    </div>
  );
}

export default Reservation;
