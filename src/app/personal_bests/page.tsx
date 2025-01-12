import React from "react";
import Link from "next/link";
import personalBestData from "@/data/personal_best.json";
import { formatDateForURL } from "@/utils/dateFormat";
import { distanceMap } from "@/utils/distanceMap";

export default function PersonalBests() {
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
            href={`/races/${formatDateForURL(data.date)}`}
            className="block transition-transform hover:scale-105"
          >
            <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:brightness-150 transition-shadow">
              <h2 className="text-lg font-semibold mb-2">{distance}</h2>
              <div className="flex flex-col space-y-3">
                <p className="text-3xl font-bold text-green-600">
                  {data.timing}
                </p>
                <p className="text-sm font-medium text-gray-400">
                  {data.event}
                </p>
                <div className="flex justify-between text-sm text-gray-400">
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
