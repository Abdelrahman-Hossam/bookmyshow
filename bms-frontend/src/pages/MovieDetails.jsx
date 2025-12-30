import React from "react";
import m4 from "../assets/m4.avif";
import TheatreTiming from "../components/movies/TheatreTiming";

const movieData = {
  id: 4,
  title: "F1: The Movie",
  genre: ["Action", "Drama", "Sports"],
  rating: 9.5,
  votes: "6.8K",
  img: m4,
  languages: ["English", "Hindi", "Tamil", "Telugu"],
  format: ["2D", "3D", "IMAX 3D"],
  certification: "UA16+",
  duration: "2h 24m",
  releaseDate: "2025-06-12",
  description:
    "F1: The Movie is a thrilling documentary that takes you behind the scenes of the high-octane world of Formula 1 racing. Directed by the acclaimed filmmaker, this movie offers an in-depth look at the 2023 Formula 1 season, showcasing the intense competition, cutting-edge technology, and the personal stories of the drivers and teams. With breathtaking footage from some of the most iconic circuits around the globe, F1: The Movie captures the speed, precision, and drama that define this exhilarating sport. Whether you're a die-hard F1 fan or new to the world of motorsport, this film promises an unforgettable cinematic experience that celebrates the passion and dedication of everyone involved in Formula 1.",
};

const MovieDetails = ({ movie = movieData }) => {
  return (
    <>
      {/* MovieDetails Hero Section */}
      <div
        className="relative text-white font-sans px-4 py-10"
        style={{
          backgroundImage: `url(${movie.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          <div>
            <img src={movie.img} alt={movie.title} className="rounded-xl w-52 shadow-xl" />
          </div>

          <div className="flex flex-col justify-start flex-1">
            <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>

            <div className="flex items-center gap-4 mb-3">
              <div className="bg-[#3a3a3a] px-4 py-2 rounded-md flex items-center gap-2 text-sm">
                <span className="text-pink-500 font-bold">★ {movie.rating}</span>
                <span className="text-gray-300">{movie.votes} Votes</span>
                {/* FIXED LINE 51 BELOW */}
                <button className="cursor-pointer bg-[#2f2f2f] ml-6 px-4 py-2 rounded-md hover:bg-[#4a4a4a] transition-colors">
                  Rate now
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm mb-4">
              <span className="bg-[#3a3a3a] px-3 py-1 rounded">{movie.format?.join(", ")}</span>
              <span className="bg-[#3a3a3a] px-3 py-1 rounded">{movie.languages?.join(", ")}</span>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">About the movie</h2>
              <p className="text-sm text-gray-50 leading-relaxed mb-4">{movie.description}</p>
            </div>

            <div className="absolute top-0 right-0 cursor-pointer">
              <button className="cursor-pointer bg-[#3a3a3a] px-4 py-2 rounded text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77l-7.13-4.21c.05-.25.09-.51.09-.78s-.03-.53-.09-.78l7.04-4.15c.54.5 1.25.81 2.05.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .27.04.52.09.78L7.91 9.93C7.38 9.43 6.67 9.12 5.87 9.12c-1.66 0-3 1.34-3 3s1.34 3 3 3c.8 0 1.51-.31 2.04-.81l7.13 4.21c-.06.24-.1.49-.1 1.75 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z" />
                </svg>
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Legend Section */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          {["2D", "3D", "Wheelchair Friendly", "Premium Seats", "Recliners", "IMAX", "PVR PXL", "4DX", "Laser", "Dolby Atmos"].map((f) => (
            <span key={f} className="border border-gray-300 px-3 py-1 rounded-full text-xs text-gray-600 cursor-pointer hover:border-pink-500 hover:text-pink-500 transition-all">
              {f}
            </span>
          ))}
        </div>

        {/* Legend bar */}
        <div className="flex items-center justify-start gap-6 py-2 border-b border-t border-gray-100 mb-4">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-gray-400 rounded-full inline-block"></span>
            <small className="font-semibold text-gray-500">Available</small>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 font-semibold bg-yellow-400 rounded-full inline-block"></span>
            <small className="font-semibold text-gray-500">Filling fast</small>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 font-semibold bg-red-400 rounded-full inline-block"></span>
            <small className="font-semibold text-gray-500">Almost full</small>
          </span>
        </div>

        {/* Theatres and Timings */}
        <TheatreTiming />
      </div>
    </>
  );
};

export default MovieDetails;