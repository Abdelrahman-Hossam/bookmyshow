import { useState } from "react";
import dayjs from "dayjs";
import { theatres } from "../../utils/constants";

const TheatreTiming = () => {
  const today = dayjs();
  const [selectedDate, setSelectedDate] = useState(today);
  const formattedDate = selectedDate.format("DD-MM-YY");

  const next7days = Array.from({ length: 7 }, (_, i) => today.add(i, "day"));

  return (
    <>
      <hr className="my-2 border-gray-200" />
      <div className="flex items-center gap-2 mb-4 overflow-x-auto py-4 px-2">
        {next7days.map((date, i) => {
          const isSelected = selectedDate.isSame(date, "day");
          return (
            <button
              key={i}
              onClick={() => setSelectedDate(date)}
              className={`flex cursor-pointer flex-col border border-gray-200 items-center px-3 py-2 rounded-lg min-w-[50px] ${
                isSelected
                  ? "bg-black text-white font-semibold"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              <span className="text-[10px] uppercase">
                {date.format("ddd")}
              </span>
              <span className="text-sm font-bold">{date.format("DD")}</span>
              <span className="text-[10px] uppercase">
                {date.format("MMM")}
              </span>
            </button>
          );
        })}
      </div>

      {/* Theater Listings */}
      <div className="space-y-8 px-4 mb-10">
        {theatres.map((theatre, i) => (
          <div key={i} className="py-4 border-b border-gray-100">
            <div className="flex items-start gap-3 mb-2">
              <img
                src={theatre.img}
                alt="logo"
                className="w-8 h-8 object-contain"
              />
              <div>
                <p className="font-semibold">{theatre.name}</p>
                <p className="text-sm text-gray-500">{theatre.cancellation}</p>
              </div>
            </div>

            {/* Timings */}
            <div className="flex flex-wrap gap-3 ml-11">
              {theatre.timings.map((timeObj, idx) => (
                <button
                  key={idx}
                  className={`border border-gray-300 px-3 py-1 rounded-lg cursor-pointer text-sm hover:bg-gray-100 flex flex-col items-center ${
                    timeObj.highlight ? "text-green-600" : "text-gray-700"
                  }`}
                >
                  {/* FIXED: Using timeObj.time instead of the whole object */}
                  <span>{timeObj.time}</span>
                  {/* Optional: Show the RECLINERS label in small text */}
                  <span className="text-[8px] font-medium uppercase opacity-70">
                    {timeObj.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TheatreTiming;