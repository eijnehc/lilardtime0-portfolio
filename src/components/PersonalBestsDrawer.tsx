"use client";

import { Drawer } from "vaul";
import personalBestData from "@/data/personal_best.json";
import Link from "next/link";

// Function to convert date string to URL-friendly format
const formatDateForURL = (dateStr: string) => dateStr.replace(/ /g, "-");

export function PersonalBestsDrawer() {
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
  const personalBests = Object.entries(personalBestData)
    .sort(([keyA], [keyB]) => distanceMap[keyA] - distanceMap[keyB])
    .map(([distance, data]) => ({
      distance,
      time: data.timing,
      date: data.date,
      location: data.location,
      event: data.event,
    }));

  return (
    <Drawer.Root>
      <Drawer.Trigger>
        <a className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white text-green-600 border-4 border-green-600 flex items-center justify-center shadow-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
          <span className="text-base font-semibold">PBs</span>
        </a>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Content
          className="bg-white flex flex-col rounded-t-[10px] h-[40%] mt-24 fixed bottom-0 left-0 right-0 w-full"
          aria-describedby="personal-bests"
        >
          <div className="p-4 rounded-t-[10px] h-full">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
            <div className="w-full h-full">
              <Drawer.Title className="text-3xl font-bold mb-6 px-4">
                Personal Bests
              </Drawer.Title>
              <div
                className="overflow-x-auto scrollbar-hide"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                <div className="inline-flex gap-4 pb-4 px-4">
                  {personalBests.map((pb) => (
                    <Link
                      key={pb.distance}
                      href={`/race/${formatDateForURL(pb.date)}`}
                      className="block transition-transform hover:scale-105"
                    >
                      <div className="bg-gray-50 p-6 rounded-lg w-80 shrink-0 hover:shadow-lg transition-shadow">
                        <div className="flex flex-col space-y-2">
                          <h3 className="font-semibold text-lg">
                            {pb.distance}
                          </h3>
                          <div className="text-3xl font-bold text-green-600">
                            {pb.time}
                          </div>
                          <p className="text-sm text-gray-600">{pb.event}</p>
                          <div className="flex justify-between text-sm text-gray-500">
                            <span>{pb.date}</span>
                            <span>{pb.location}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
