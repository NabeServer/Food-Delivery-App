import React from "react";

const Delivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-orange-500 font-bold text-2xl text-center">
        Quick Delivery App
      </h3>

      <div className="w-[1240px] mx-auto grid md:grid-cols-2 sm:grid-cols-2 ">
        <img
          className="w-[550px] my-4"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
        />

        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">Get The App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Limitless Convenience on-demand
          </h1>
          <p className>
            Introducing QuickGrub: Your Ultimate Food Delivery Companion!
            QuickGrub connects you with a diverse range of local restaurants,
            offering an extensive selection of delectable cuisines from sizzling
            burgers to exotic sushi, all delivered right to your doorstep with
            lightning-fast speed. With a user-friendly interface, personalized
            recommendations, exclusive deals, and a commitment to safety and
            sustainability, QuickGrub ensures you have an extraordinary dining
            experience. Join us in our culinary adventure, and download
            QuickGrub today for the future of food delivery at your fingertips –
            where satisfying your cravings is quick and delightful!
          </p>

          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
