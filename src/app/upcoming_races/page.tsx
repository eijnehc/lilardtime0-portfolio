import React from "react";
import upcomingRaces from "@/data/upcoming_races.json";

export default function UpcomingRaces() {
  const currentDate = new Date();

  const filteredRaces = upcomingRaces.filter((race) => {
    const raceDate = new Date(race.date);
    return raceDate >= currentDate;
  });

  return (
    <main className="max-w-4xl mx-auto p-8">
      <div className="space-y-6">
        {filteredRaces.map((race, index) => (
          <div
            key={index}
            className="group p-6 bg-white rounded-xl shadow-md dark:bg-gray-800 hover:shadow-lg transition-all duration-200"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-xl font-semibold text-white truncate">
                    {race.event}
                  </h2>
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                    {race.distance}
                  </span>
                </div>
                <p className="text-gray-400 dark:text-gray-200 line-clamp-2 mb-3">
                  {race.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{race.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{race.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {filteredRaces.length === 0 && (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              No upcoming races
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              No races scheduled for the rest of the year.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
