import React from "react";

export default function PersonalBests() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">Personal Best Times</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h3 className="text-lg font-semibold mb-2">1500m</h3>
          <div className="flex justify-between items-center">
            <p className="text-3xl font-bold text-green-600">4:05</p>
            <p className="text-sm text-gray-500">Set on May 15, 2023</p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h3 className="text-lg font-semibold mb-2">2400m</h3>
          <div className="flex justify-between items-center">
            <p className="text-3xl font-bold text-green-600">7:45</p>
            <p className="text-sm text-gray-500">Set on June 22, 2023</p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h3 className="text-lg font-semibold mb-2">3000m</h3>
          <div className="flex justify-between items-center">
            <p className="text-3xl font-bold text-green-600">9:30</p>
            <p className="text-sm text-gray-500">Set on July 8, 2023</p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h3 className="text-lg font-semibold mb-2">5000m</h3>
          <div className="flex justify-between items-center">
            <p className="text-3xl font-bold text-green-600">16:45</p>
            <p className="text-sm text-gray-500">Set on Aug 12, 2023</p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h3 className="text-lg font-semibold mb-2">10K</h3>
          <div className="flex justify-between items-center">
            <p className="text-3xl font-bold text-green-600">35:20</p>
            <p className="text-sm text-gray-500">Set on Sept 3, 2023</p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h3 className="text-lg font-semibold mb-2">Half Marathon</h3>
          <div className="flex justify-between items-center">
            <p className="text-3xl font-bold text-green-600">1:25:30</p>
            <p className="text-sm text-gray-500">Set on Oct 15, 2023</p>
          </div>
        </div>
      </div>
    </main>
  );
}
