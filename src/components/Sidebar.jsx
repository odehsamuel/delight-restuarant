import React from "react";

function Sidebar({closeModal}) {
  return (
    <div>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-65 z-40"
        onClick={closeModal}
      ></div>
      <div className="bg-neutral-300 w-3/4 z-50 top-0 right-0 bottom-0 fixed">
      {/* list of navigation menues/links */}
      </div>
    </div>
  );
}

export default Sidebar;
