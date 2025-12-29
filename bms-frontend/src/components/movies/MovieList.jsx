import React from "react";
import { allMovies, languages } from "../../utils/constants";
import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <div className="w-full md:w-3/4 p-4">
      {/* Horizontal Language Selection Bar */}
      <div className="flex flex-wrap gap-2 mb-4">
        {languages.map((lang, i) => (
          <span
            key={i}
            className="bg-white border border-gray-200 text-[#f74362] px-3 py-1 rounded-[24px] text-sm cursor-pointer hover:bg-red-50 transition-colors"
          >
            {lang}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center bg-white px-6 py-6 rounded mb-6">
        {/* Left Side: Title */}
        <h3 className="font-semibold text-xl">Coming Soon</h3>

        {/* Right Side: Navigation Link */}
        <a
          href="#"
          className="text-red-500 text-sm font-medium flex items-center hover:underline"
        >
          Explore Upcoming Movies
          <span className="ml-1 text-lg">→</span>
        </a>
      </div>

      <div className="flex flex-wrap gap-6">
        {allMovies.map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
