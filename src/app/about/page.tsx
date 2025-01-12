import React from "react";

export default function AboutMe() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>

      <div className="max-w-3xl mx-auto space-y-8">
        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200">
              {/* Add your profile image here */}
              <div className="w-full h-full bg-gray-300"></div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4">John Doe</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Professional Runner & Software Engineer
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Based in Portland, OR
              </p>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 p-8">
          <h2 className="text-2xl font-bold mb-4">Bio</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I am a passionate runner who has been competing in various distances
            from 1500m to marathon. With a background in software engineering, I
            balance my professional career with my love for running.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            My journey in running began in college, and since then, ve
            participated in numerous competitions across the country. m
            constantly pushing my limits and setting new personal records.
          </p>
        </div>

        {/* Goals Section */}
        <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 p-8">
          <h2 className="text-2xl font-bold mb-4">Current Goals</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>Qualify for Boston Marathon 2025</li>
            <li>Break 16 minutes in 5K</li>
            <li>Complete an ultra-marathon</li>
            <li>Coach new runners in local community</li>
          </ul>
        </div>

        {/* Training Philosophy */}
        <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 p-8">
          <h2 className="text-2xl font-bold mb-4">Training Philosophy</h2>
          <p className="text-gray-600 dark:text-gray-300">
            I believe in consistent, structured training that balances hard work
            with adequate recovery. My approach combines traditional running
            workouts with modern training techniques, always listening to my
            body and adjusting as needed.
          </p>
        </div>
      </div>
    </main>
  );
}
