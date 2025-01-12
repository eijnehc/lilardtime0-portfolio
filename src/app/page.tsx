import React from "react";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">Achievements</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Achievement cards */}
        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-3">Achievement 1</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Description of your first major achievement
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-3">Achievement 2</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Description of your second major achievement
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-3">Achievement 3</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Description of your third major achievement
          </p>
        </div>
      </div>
    </main>
  );
}
