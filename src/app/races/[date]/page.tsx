import React from "react";
import Link from "next/link";
import racesData from "@/data/races.json";
import { formatDateFromURL } from "@/utils/dateFormat";

type RacePageProps = {
  params: {
    date: string;
  };
};

export default async function RacePage({ params }: RacePageProps) {
  const { date } = await params;
  const formattedDate = formatDateFromURL(date);
  const race = racesData.races.find((r) => r.date === formattedDate);

  if (!race) {
    return (
      <main className="p-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/race"
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-8"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Races
          </Link>
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Race not found</h1>
            <p>The race you&apos;re looking for doesn&apos;t exist.</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="p-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/races"
          className="inline-flex items-center text-green-600 hover:text-green-700 mb-8"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Races
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6">{race.event}</h1>

          {race.video && (
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <iframe
                src={race.video.replace("watch?v=", "embed/")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg w-full h-[400px]"
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-400 dark:text-gray-400">
                  Time
                </h2>
                <p className="text-3xl font-bold text-green-600">
                  {race.timing}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-400 dark:text-gray-400">
                  Date
                </h2>
                <p className="text-xl">{race.date}</p>
              </div>
            </div>

            <div className="space-y-4">
              {race.event_type && (
                <div>
                  <h2 className="text-lg font-semibold text-gray-400 dark:text-gray-400">
                    Event Type
                  </h2>
                  <p className="text-xl">{race.event_type}</p>
                </div>
              )}

              <div className="flex gap-2">
                {race.pb && (
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    PB
                  </span>
                )}
                {race.national_record && (
                  <span className="bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    NR
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
