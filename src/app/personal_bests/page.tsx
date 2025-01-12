import React from "react";
import Link from "next/link";
import personalBestData from "@/data/personal_best.json";

// Function to convert date string to URL-friendly format
const formatDateForURL = (dateStr: string) => dateStr.replace(/ /g, "-");

export default function PersonalBests() {
  // Map to convert event types to numeric distances for sorting
  const distanceMap: Record<string, number> = {
    "1600m": 1600,
    "1500m": 1500,
    "2400m": 2400,
    "3000m": 3000,
    "5000m": 5000,
    "10000m": 10000,
    "Half Marathon": 21097, // in meters
  };

  // Sort the data based on distances
  const sortedData = Object.entries(personalBestData).sort(
    ([keyA], [keyB]) => distanceMap[keyA] - distanceMap[keyB]
  );

  return (
    <main className="p-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedData.map(([distance, data]) => (
          <Link
            key={distance}
            href={`/race/${formatDateForURL(data.date)}`}
            className="block transition-transform hover:scale-105"
          >
            <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <h2 className="text-lg font-semibold mb-2">{distance}</h2>
              <div className="flex flex-col space-y-3">
                <p className="text-3xl font-bold text-green-600">
                  {data.timing}
                </p>
                <p className="text-sm font-medium text-gray-600">
                  {data.event}
                </p>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{data.date}</span>
                  <span>{data.location}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
