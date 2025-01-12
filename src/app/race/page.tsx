"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import racesData from "@/data/races.json";
import Link from "next/link";
import { formatDateForURL } from "@/utils/dateFormat";

// Function to convert date string to Date object
const parseDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split(" ");
  const monthMap: { [key: string]: number } = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Sept: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };
  return new Date(parseInt(year), monthMap[month], parseInt(day));
};

export default function RacesPage() {
  // Sort races by date in descending order
  const sortedRaces = [...racesData.races].sort(
    (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
  );

  return (
    <main className="p-8">
      <VerticalTimeline lineColor="#16A34A">
        {sortedRaces.map((race, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element hover:brightness-150 transition-opacity"
            contentStyle={{
              background: "#1f2937",
              color: "white",
              boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
              padding: "2rem",
              borderLeft: index % 2 === 0 ? "4px solid #16A34A" : undefined,
              borderRight: index % 2 === 1 ? "4px solid #16A34A" : undefined,
            }}
            contentArrowStyle={{ borderRight: "7px solid #16A34A" }}
            date={race.date}
            iconStyle={{
              background: "#16A34A",
              color: "#fff",
            }}
          >
            <Link
              href={`/race/${formatDateForURL(race.date)}`}
              className="cursor-pointer"
            >
              <div className="flex flex-col space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold">{race.event}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-green-600">
                    {race.timing}
                  </span>
                  {race.pb && (
                    <span className="bg-green-100 text-green-800 text-xm font-medium px-2.5 py-0.5 rounded flex items-center gap-1">
                      PB
                    </span>
                  )}
                  {race.national_record && (
                    <span className="bg-red-100 text-red-800 text-xm font-medium px-2.5 py-0.5 rounded">
                      NR
                    </span>
                  )}
                </div>
                {race.event_type && (
                  <span className="text-sm text-gray-400">
                    Event: {race.event_type}
                  </span>
                )}
              </div>
            </Link>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </main>
  );
}
