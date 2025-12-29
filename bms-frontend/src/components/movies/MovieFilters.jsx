import React from "react";
import { languages } from "../../utils/constants.js";

const MovieFilters = () => {
  return (
    <div className="w-full md:w-1/4 p-4 space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Filters</h2>

      {/* Language Section */}
      <div className="bg-white p-4 rounded-md">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">Languages</span>
          <button className="text-[#f74362] text-sm">Clear</button>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {languages.map((lang, i) => (
            <span
              key={i}
              className="border border-gray-200 text-[#f74362] px-3 py-1 text-sm rounded hover:bg-gray-100 cursor-pointer"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Similar blocks for genres and format */}
      <div className="bg-white -mt-3 p-4 rounded">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">Genres</span>
          <button className="text-[#f74362] text-sm">Clear</button>
        </div>
      </div>

      <div className="bg-white -mt-3 p-4 rounded">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">Format</span>
          <button className="text-[#f74362] text-sm">Clear</button>
        </div>
      </div>

      <button className="w-full border cursor-pointer  text-[#f74362] py-1 rounded hover:bg-[#f74362] hover:text-white transition-all duration-300 mt-4">
        Browse by Cinemas
      </button>
    </div>
  );
};

export default MovieFilters;
