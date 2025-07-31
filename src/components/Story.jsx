import React from "react";
import ChineseRecipe from "../assets/images/b37299c474375bdf7c979d11caaa8917.jpg";

function Story() {
  return (
    <div className="bg-gray-border py-36">
      <div className="bg-gray-white rounded-2xl shadow-lg px-20 py-20 w-3/4 mx-auto mt-20">
        <div className="text-center pb-12">
          <h3 className="text-4xl font-bold">Our Story</h3>
          <p className="mx-auto w-16 h-[3px] bg-gold-primary mt-4"></p>
        </div>
        <div className="flex justify-between pb-24">
          <div className="rest-story w-1/2">
            <h3 className="text-3xl text-gold-primary font-bold">
              A Legacy of Flavor
            </h3>
            <p className="pt-8">
              For over two decades, Delightful Kitchen has been the premier
              destination for discerning diners seeking an unforgettable
              culinary experience. Our commitment to excellence begins with
              sourcing the finest ingredients from local farmers and trusted
              suppliers.
            </p>
            <p className="pt-8">
              Every dish tells a story of passion, creativity, and respect for
              culinary traditions while embracing innovative techniques that
              define modern gastronomy.
            </p>
            <p className="pt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              libero rerum qui quam inventore tempora sequi laboriosam rem
              quaerat quibusdam!
            </p>
          </div>
          <img
            src={ChineseRecipe}
            //   src=""
            alt="restaurant interiror photo"
            className="rounded-xl contain min-w-[30rem] h-[20rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default Story;
