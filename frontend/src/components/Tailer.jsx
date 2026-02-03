import React from "react";
import { useAppNavigation } from "../hooks/useAppNavigation";

const Tailer = () => {
  const { goProducts } = useAppNavigation();
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 bg-gradient-to-r from-black via-black/85 to-black/70 rounded-2xl min-h-[400px] lg:px-20">
      <div
        id="left"
        className="flex flex-col justify-center lg:gap-24 gap-4 col-span-3 items-start"
      >
        <h1 className="hh1 text-white text-6xl font-medium tracking-wide">
          Upgrade With Us To Experience <br /> Sound The Way It’s Meant To Be.
        </h1>
        <button
          onClick={goProducts}
          className="bg-brand px-10 py-2 rounded-4xl font-semibold"
        >
          Shop Now
        </button>
      </div>

      <div id="right" className="w-[130%] h-[100%] mt-4">
        <img
          className="w-full h-full object-contain rotate-6"
          src="/src/assets/tail.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Tailer;
