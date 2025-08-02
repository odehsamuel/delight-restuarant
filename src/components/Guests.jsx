import React from "react";

function Guests() {
  return (
    <div className="bg-gray-border py-12">
      <h2 className="text-center text-4xl pt-8">What Our Guests Says</h2>
      <p className="mx-auto w-16 h-[3px] bg-gold-primary mt-3 mb-8"></p>
      <div className="grid grid-cols-3 gap-x-14 gap-y-8 justify-center px-52">
        <div className="container bg-gray-white shadow-lg rounded-lg p-8">
          <p className="font-medium text-lg">
            <span className="block pb-4">⭐⭐⭐⭐⭐</span>
            "An absolute incredible dining exerience! Every dish was perfectly
            crafted and the service was impeccable. This is definitely our new
            favorite restaurant.
            <span className="text-gold-primary block pt-4 font-semibold">
              - Sarah Johnson
            </span>
          </p>
        </div>

        <div className="container bg-gray-white shadow-lg rounded-lg p-8">
          <p className="font-medium text-lg">
            <span className="block pb-4">⭐⭐⭐⭐⭐</span>
            "The ambiance is elegant yet welcoming, and the food exceeded all
            expectations. Chef Michael's creativity shines through in every
            bite."
            <span className="text-gold-primary block pt-4 font-semibold">
              - Emma Rodriguez
            </span>
          </p>
        </div>

        <div className="container bg-gray-white shadow-lg rounded-lg p-8">
          <p className="font-medium text-lg">
            <span className="block pb-4">⭐⭐⭐⭐⭐</span>
            "An absolute incredible dining exerience! Every dish was perfectly
            crafted and the service was impeccable. This is definitely our new
            favorite restaurant.
            <span className="text-gold-primary block pt-4 font-semibold">
              - Sarah Johnson
            </span>
          </p>
        </div>

        <div className="container bg-gray-white shadow-lg rounded-lg p-8">
          <p className="font-medium text-lg">
            <span className="block pb-4">⭐⭐⭐⭐⭐</span>
            "Perfect for special occasions! The attention to detail and quality
            of ingredients make this place truly special. Highly recommended!"
            <span className="text-gold-primary block pt-4 font-semibold">
              - Michael Chen
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Guests;
