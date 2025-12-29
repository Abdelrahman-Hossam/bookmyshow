import React from "react";
import { movies } from "../utils/constants";

const Recommended = () => {
  return (
    <div className="w-full py-6 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header Section */}
        <div className="items-center flex justify-between mb-4">
          <h2 className="text-2xl font-semibold">Recommended Movies</h2>
          <span className="text-md text-red-500 cursor-pointer hover:underline font-medium">
            See All
          </span>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {movies.map((movie, i) => (
            <div key={i} className="rounded overflow-hidden cursor-pointer">
              <div className="relative">
                <img
                  src={movie.img} // Ensure your movie object has an image property
                  alt={movie.title || "movie"}
                  className="w-full h-[300px] object-cover rounded"
                />
              </div>
              {/* Inside the movies.map function, right after the image div */}
              <div className="bg-black text-white text-sm px-2 py-1 flex items-center justify-between">
                <span>⭐ {movie.rating}/10</span>
                <span>{movie.votes} Votes</span>
              </div>

              <div className="px-2 py-1">
                <h3 className="font-semibold text-lg">{movie.title}</h3>
                <p className="text-md text-gray-500">
                  {movie.genre.replaceAll("/", ", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommended;
