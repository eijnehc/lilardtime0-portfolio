import React from "react";

export default function UpcomingRaces() {
  return (
    <main className="p-8">
      <div className="space-y-6">
        {/* Race cards */}
        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Portland Marathon 2024
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Annual marathon through the streets of Portland, targeting sub-3
                hour finish
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">June 15, 2024</p>
              <p className="text-sm text-gray-500">Portland, OR</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Boston Half Marathon
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Qualifying race for the Boston Marathon Championship
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">July 1, 2024</p>
              <p className="text-sm text-gray-500">Boston, MA</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-semibold mb-2">NYC Marathon</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                One of the world largest marathons through all five boroughs
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">November 3, 2024</p>
              <p className="text-sm text-gray-500">New York, NY</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
