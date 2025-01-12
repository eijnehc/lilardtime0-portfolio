"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import racesData from "@/data/races.json";

interface Race {
  event: string;
  timing: string;
  date: string;
  pb: boolean;
  event_type: string | null;
  video: string | null;
  timeInSeconds?: number;
}

interface RaceWithSeconds extends Race {
  timeInSeconds: number;
}

interface DotProps {
  cx: number;
  cy: number;
  payload: RaceWithSeconds;
}

// Helper function to convert time string to seconds
const timeToSeconds = (time: string): number => {
  if (time.includes(":")) {
    const [minutes, seconds] = time.split(":").map(Number);
    return minutes * 60 + (seconds || 0);
  }
  return parseFloat(time);
};

// Helper function to format seconds back to time string
const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = (seconds % 60).toFixed(2);
  return `${minutes}:${remainingSeconds.padStart(5, "0")}`;
};

const distanceMap: Record<string, number> = {
  "1600m": 1600,
  "1500m": 1500,
  "2400m": 2400,
  "3000m": 3000,
  "5000m": 5000,
  "10000m": 10000,
  "Half Marathon": 21097,
};

// Star shape component for PBs
const StarShape = ({
  cx,
  cy,
  fill,
}: {
  cx: number;
  cy: number;
  fill: string;
}) => {
  const size = 10; // Size of the star
  const spikes = 5; // Number of spikes in the star
  const outerRadius = size;
  const innerRadius = size / 2;

  const points = [];
  for (let i = 0; i < spikes * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (i * Math.PI) / spikes;
    points.push(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
  }

  return <polygon points={points.join(" ")} fill={fill} stroke="none" />;
};

export default function RaceCharts() {
  // Filter out races with no event_type and group by event_type
  const racesByType = racesData.races.reduce(
    (acc: Record<string, RaceWithSeconds[]>, race: Race) => {
      if (race.event_type && distanceMap[race.event_type]) {
        if (!acc[race.event_type]) {
          acc[race.event_type] = [];
        }
        acc[race.event_type].push({
          ...race,
          timeInSeconds: timeToSeconds(race.timing),
        });
      }
      return acc;
    },
    {}
  );

  // Sort event types by distance
  const sortedEventTypes = Object.keys(racesByType).sort(
    (a, b) => distanceMap[a] - distanceMap[b]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {sortedEventTypes.map((eventType) => {
        const races = racesByType[eventType];

        // Skip if there's only one data point
        if (races.length <= 1) return null;

        // Sort races by date
        const sortedRaces = races.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );

        return (
          <div
            key={eventType}
            className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-800"
          >
            <h2 className="text-2xl font-semibold mb-4">{eventType}</h2>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={sortedRaces}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="date"
                    angle={-45}
                    textAnchor="end"
                    height={70}
                  />
                  <YAxis
                    domain={["dataMin - 30", "dataMax + 30"]}
                    tickFormatter={formatTime}
                  />
                  <Legend />
                  <Line
                    key={eventType}
                    type="linear"
                    dataKey="timeInSeconds"
                    name="Time"
                    stroke="#4ade80"
                    strokeWidth={2}
                    legendType="none"
                    dot={(props: DotProps) => {
                      const isPB = props.payload.pb;
                      if (isPB) {
                        return (
                          <StarShape
                            cx={props.cx}
                            cy={props.cy}
                            fill="#eab308"
                          />
                        );
                      }
                      return (
                        <circle
                          cx={props.cx}
                          cy={props.cy}
                          r={4}
                          fill="#4ade80"
                          stroke="none"
                        />
                      );
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
      })}
    </div>
  );
}
