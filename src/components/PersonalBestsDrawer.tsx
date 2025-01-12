"use client";

import { Drawer } from "vaul";

const personalBests = [
  { distance: "1500m", time: "4:05", date: "May 15, 2023" },
  { distance: "2400m", time: "7:45", date: "June 22, 2023" },
  { distance: "3000m", time: "9:30", date: "July 8, 2023" },
  { distance: "5000m", time: "16:45", date: "Aug 12, 2023" },
  { distance: "10K", time: "35:20", date: "Sept 3, 2023" },
  { distance: "Half Marathon", time: "1:25:30", date: "Oct 15, 2023" },
];

export function PersonalBestsDrawer() {
  return (
    <Drawer.Root>
      <Drawer.Trigger>
        <a className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white text-blue-600 border-4 border-blue-600 flex items-center justify-center shadow-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
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
                    <div
                      key={pb.distance}
                      className="bg-gray-50 p-6 rounded-lg w-72 shrink-0"
                    >
                      <div className="flex flex-col space-y-2">
                        <h3 className="font-semibold text-lg">{pb.distance}</h3>
                        <div className="text-3xl font-bold text-blue-600">
                          {pb.time}
                        </div>
                        <p className="text-sm text-gray-500">{pb.date}</p>
                      </div>
                    </div>
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
