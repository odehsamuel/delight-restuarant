import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegModal({ closeModal, name }) {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.stopPropagation();
    setOpened(false);
    navigate("/");
  };

  return (
    <div>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-65 flex justify-center items-center z-40"
        onClick={closeModal}
      >
        <div
          className="w-96 px-3 py-2 bg-blue-200 relative z-50 rounded-md"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="text-center text-slate-700 text-2xl">{name}</h1>
          {name === "Sign Up" && (
            <div className="py-1.5">
              <label htmlFor="name" className="text-slate-700 pb-2">
                Full Name:
              </label>
              <input
                type="text"
                placeholder="e.g Finn Mark"
                className="rounded-md outline-none bg-slate-200 border-2 border-slate-400/50 text-slate-700 hover/active:bg-blue-100 px-2 py-1"
              />
            </div>
          )}
          <div className="py-1.5">
            <label htmlFor="email" className="text-slate-700 pb-2">
              Email:
            </label>
            <input
              type="email"
              placeholder="e.g example@yahoo.com"
              className="rounded-md outline-none bg-slate-200 border-2 border-slate-400/50 text-slate-700 hover/active:bg-blue-100 px-2 py-1"
            />
          </div>
          <div className="py-1.5 relative">
            <label htmlFor="password" className="text-slate-700 pb-2">
              Password
            </label>
            <input
              type={opened ? "text" : "password"}
              className="rounded-md outline-none bg-slate-200 border-2 border-slate-400/50 text-slate-700 hover/active:bg-blue-100 px-2 py-1"
            />
            <i
              className={
                !opened
                  ? "fa fa-eye-slash absolute bottom-4 right-2"
                  : "fa fa-eye absolute bottom-4 right-2"
              }
              onClick={() => setOpened(!opened)}
            ></i>
          </div>
          <button
            onClick={handleSubmit}
            className="font-bold px-3 py-1.5 border bg-blue-300 hover:bg-blue-400 text-center mb-4 rounded-md border-blue-500 text-blue-950"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegModal;
