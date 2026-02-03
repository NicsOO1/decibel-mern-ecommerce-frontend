import React from "react";
import { useSearch } from "../context/SearchContext";
import { useAppNavigation } from "../hooks/useAppNavigation";

const ProductGrid = () => {
  const { setSearchTerm } = useSearch();
  const { goProducts } = useAppNavigation();

  const handleSearch = (type) => {
    setSearchTerm(type);
    goProducts();
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-6 lg:mt-8">
      <div
        id="left"
        className="flex flex-col items-start h-[600px] bg-gradient-to-br from-orange-500 via-orange-600 to-red-600/80 rounded-3xl lg:p-8"
      >
        <div className="py-1 px-4 border w-fit rounded-full border-gray-50/20 bg-white/30">
          <p className="text-[12px] text-gray-100">Flash Sale</p>
        </div>

        <h1 className="text-4xl lg:mt-8 font-semibold text-white/90">
          20% off on Bose Headsets
        </h1>
        <p className="mt-1 text-white/90 ">
          Level up your hearing experiance with Bose.
        </p>

        <div className="w-full flex justify-between items-end group">
          <button
            onClick={() => handleSearch("bose")}
            className="bg-brandlight px-6 py-2 rounded-4xl lg:mb-6 font-medium cursor-pointer hover:shadow-[0_0_15px_#E6F8AA] transition-all duration-300"
          >
            Shop Now
          </button>
          <img
            className="h-[420px] rotate-6 transition-all duration-500 group-hover:-translate-y-4"
            src="\src\assets\Products\Bose_H2_No.png"
            alt="bose"
          />
        </div>
      </div>

      <div
        id="right"
        className="lex flex-col items-start h-[600px] bg-gradient-to-br from-green-600/90 via-green-400 to-cyan-700/60 rounded-3xl lg:p-8"
      >
        <div className="py-1 px-5 border w-fit rounded-full border-gray-50/20 bg-white/30">
          <p className="text-[12px] text-gray-100">New Arrival</p>
        </div>

        <h1 className="text-4xl lg:mt-8 font-semibold text-white/90">
          Sony Signature ANC for Pure Silence
        </h1>
        <p className="mt-1 text-white/90 ">Silence perfected by Sony.</p>

        <div className="w-full flex justify-between items-end group">
          <button
            onClick={() => handleSearch("sony")}
            className="bg-brandlight px-6 py-2 rounded-4xl lg:mb-6 font-medium cursor-pointer hover:shadow-[0_0_15px_#E6F8AA] transition-all duration-300"
          >
            Shop Now
          </button>
          <img
            className="h-[420px] rotate-6 transition-all duration-500 group-hover:-translate-y-4"
            src="\src\assets\Products\x.png"
            alt="bose"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
