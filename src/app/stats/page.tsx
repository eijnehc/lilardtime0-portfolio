import React from "react";

export default function Stats() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">Statistics</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Stats cards */}
        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-2">Projects Completed</h2>
          <p className="text-4xl font-bold text-green-600">25+</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-2">Years Experience</h2>
          <p className="text-4xl font-bold text-green-600">5</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-2">Client Satisfaction</h2>
          <p className="text-4xl font-bold text-green-600">98%</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-2">Awards Won</h2>
          <p className="text-4xl font-bold text-green-600">12</p>
        </div>
      </div>
    </main>
  );
}
