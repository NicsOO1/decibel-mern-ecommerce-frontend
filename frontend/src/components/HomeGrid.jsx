import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { useAppNavigation } from "../hooks/useAppNavigation";
import { useSearch } from "../context/SearchContext";

const HomeGrid = () => {
  const { goProducts } = useAppNavigation();
  const { setSearchTerm } = useSearch();

  const handleImgSearch = (e) => {
    const imgName = e.target.name;

    if (imgName) {
      setSearchTerm(imgName);
      goProducts();
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div
          id="main-box"
          className="bg-white/60 px-6 py-6 lg:px-8 lg:py-6 rounded-3xl lg:col-span-3 flex justify-between items-center h-[500px]"
        >
          <div id="left" className="flex flex-col">
            <div className="py-1 px-3 border w-fit rounded-full border-gray-300">
              <p className="pp text-[12px]">Music is Classic</p>
            </div>

            <h1 className="hh1 pt-6 text-7xl font-medium">
              Musico Beyond <br />
              Boundaries
            </h1>

            <div className="pt-8 flex flex-col gap-1">
              <h3 className="hh1 text-2xl font-medium">Clear Sounds</h3>
              <p className="text-gray-500">
                Every beat Every note crafted to move you.
              </p>
            </div>

            <button
              onClick={goProducts}
              className="bg-[#D2FA45] mt-10 w-fit px-8 py-2 rounded-4xl font-medium flex items-center gap-3 group"
            >
              View All Products
              <BiRightArrowAlt
                className="text-xl transform transition-transform duration-300 
               group-hover:translate-x-1"
              />
            </button>
          </div>

          <div id="right">
            <img src="\src\assets\cover3.png" alt="" />
          </div>
        </div>

        <div
          id="feature-box"
          className="relative w-full bg-white/60 rounded-3xl flex flex-col gap-4 items-center pt-6 h-[500px]"
        >
          <div id="upper" className="h-[20%]">
            <h2 className="hh1 text-2xl font-medium">
              Black Surface Headphones
            </h2>
            <p className="border-b-2 border-brand w-fit mt-2">
              Boosted with Bass
            </p>
          </div>
          <div
            id="lower"
            className="relative w-full h-full overflow-hidden rounded-4xl"
          >
            <img
              className="w-full h-full object-cover"
              src="src/assets/product1.png"
              alt=""
            />
          </div>

          <div className="absolute bottom-6 left-6 bg-brand p-2 rounded-full group">
            <a href="#">
              <FaArrowRightLong
                className="-rotate-45 text-xl transform transition-transform duration-300 
               group-hover:rotate-0"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="wfull grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div
          id="item1-box"
          className="bg-white/60 rounded-3xl h-[300px] px-6 py-6 lg:px-8 lg:py-6"
        >
          <h3 className="hh1 font-medium text-2xl text-center mb-4">
            Premium Headphones
          </h3>
          <div id="img-box" className="w-full h-[90%] group">
            <img
              name="headphone"
              onClick={handleImgSearch}
              className="transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
              src="/src/assets/headphones.png"
              alt=""
            />
          </div>
        </div>

        <div
          id="item2-box"
          className="bg-white/60 rounded-3xl h-[300px] px-6 py-6 lg:px-8 lg:py-6"
        >
          <h3 className="hh1 font-medium text-2xl text-center mb-4">
            Elite Speakers
          </h3>
          <div
            id="img-box"
            className="w-full flex items-center justify-center h-[90%] group"
          >
            <img
              className="h-[230px] mb-4 transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
              name="speaker"
              onClick={handleImgSearch}
              src="/src/assets/speaker.png"
              alt=""
            />
          </div>
        </div>

        <div
          id="item3-box"
          className="bg-white/60 rounded-3xl h-[300px] px-6 py-6 lg:px-8 lg:py-6"
        >
          <h3 className="hh1 font-medium text-2xl text-center mb-4">
            True Beats
          </h3>
          <div
            id="img-box"
            className="w-full flex items-center justify-center h-[90%] group"
          >
            <img
              className="mb-4 transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
              name="tws"
              onClick={handleImgSearch}
              src="/src/assets/tws.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGrid;
