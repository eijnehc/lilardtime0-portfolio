"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import personalBests from "@/data/personal_best.json";
import { distanceMap } from "@/utils/distanceMap";

const RaceGame = () => {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [isRacing, setIsRacing] = useState(false);
  const [raceComplete, setRaceComplete] = useState(false);
  const [winner, setWinner] = useState<"user" | "pb" | null>(null);

  // Animation controls
  const pbControls = useAnimation();
  const userControls = useAnimation();

  // Ref for the race track container
  const trackRef = useRef<HTMLDivElement>(null);

  // State for the finish line position
  const [finishLinePosition, setFinishLinePosition] = useState(0);

  // Sort events by distance
  const events = Object.entries(personalBests)
    .sort(([eventA], [eventB]) => {
      const distanceA = distanceMap[eventA] || 0;
      const distanceB = distanceMap[eventB] || 0;
      return distanceA - distanceB;
    })
    .map(([event, data]) => ({
      name: event,
      time: data.timing,
    }));

  const convertTimeToSeconds = (timeString: string) => {
    if (typeof timeString !== "string") return 0;
    const [minutes, seconds] = timeString.split(":").map(Number);
    return minutes * 60 + parseFloat(seconds);
  };

  // Function to calculate the finish line position based on track width
  const calculateFinishLinePosition = () => {
    if (trackRef.current) {
      const trackWidth = trackRef.current.offsetWidth;
      const finishLineOffset = 50; // Adjust this value as needed
      setFinishLinePosition(trackWidth - finishLineOffset);
    }
  };

  useEffect(() => {
    // Calculate the initial finish line position
    calculateFinishLinePosition();

    // Recalculate on window resize
    const handleResize = () => calculateFinishLinePosition();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleStartRace = () => {
    if (!selectedEvent || !minutes || !seconds) {
      alert("Please fill in all fields");
      return;
    }

    setIsRacing(false);
    setRaceComplete(false);
    setWinner(null);

    const userTime = parseInt(minutes) * 60 + parseFloat(seconds);
    const pbTime = convertTimeToSeconds(
      personalBests[selectedEvent as keyof typeof personalBests].timing
    );

    let userDuration, pbDuration;
    let winnerResult: "user" | "pb" = "pb";

    if (userTime < pbTime) {
      winnerResult = "user";
      userDuration = 5;
      pbDuration = 5 * (pbTime / userTime);
    } else {
      pbDuration = 5;
      userDuration = 5 * (userTime / pbTime);
    }

    // Small delay to ensure animation reset
    setTimeout(() => {
      setIsRacing(true);

      // Start animations with calculated durations
      pbControls.start({
        x: finishLinePosition - 48,
        transition: { duration: pbDuration, ease: "linear" },
      });
      userControls.start({
        x: finishLinePosition - 48,
        transition: { duration: userDuration, ease: "linear" },
      });

      // Race duration will be based on the calculated durations
      setTimeout(() => {
        setRaceComplete(true);
        setWinner(winnerResult);
      }, Math.max(userDuration, pbDuration) * 1000);
    }, 100);
  };

  const handleReset = () => {
    setIsRacing(false);
    setRaceComplete(false);
    setWinner(null);

    // Immediately reset position without animation
    pbControls.stop();
    userControls.stop();
    pbControls.set({ x: 20 });
    userControls.set({ x: 20 });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Race Against Shaun Goh!
      </h1>

      <div className="max-w-md mx-auto space-y-6 mb-8">
        <div>
          <label className="block text-sm font-medium mb-2">Select Event</label>
          <select
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
            className="w-full p-2 border rounded-md bg-gray-800 text-white"
            disabled={isRacing}
          >
            <option value="">Select an event</option>
            {events.map((event) => (
              <option key={event.name} value={event.name}>
                {event.name} (PB: {event.time})
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">Minutes</label>
            <input
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              className="w-full p-2 border rounded-md bg-gray-800 text-white"
              min="0"
              disabled={isRacing}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">Seconds</label>
            <input
              type="number"
              value={seconds}
              onChange={(e) => setSeconds(e.target.value)}
              className="w-full p-2 border rounded-md bg-gray-800 text-white"
              min="0"
              max="59"
              step="0.01"
              disabled={isRacing}
            />
          </div>
        </div>

        <button
          onClick={isRacing ? handleReset : handleStartRace}
          className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          {isRacing ? "Reset" : "Start Race"}
        </button>
      </div>

      {/* Race Track */}
      <div
        className="relative h-36 bg-red-600 rounded-lg overflow-hidden mb-8"
        ref={trackRef}
      >
        {/* Track Lines */}
        <div className="absolute w-full h-px bg-white top-1/2"></div>

        {/* Finish Line */}
        <div className="absolute right-12 top-0 bottom-0 w-4 bg-white/20"></div>

        {/* SG Runner Lane */}
        <motion.div
          className="absolute top-[5%] h-16 flex items-center"
          initial={{ x: 20 }}
          animate={pbControls} // Use animation control
        >
          <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
            SG
          </div>
        </motion.div>

        {/* User Runner Lane */}
        <motion.div
          className="absolute top-[50%] h-16 flex items-center"
          initial={{ x: 20 }}
          animate={userControls} // Use animation control
        >
          <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
            YOU
          </div>
        </motion.div>
      </div>

      {/* Results Banner */}
      {raceComplete && (
        <div
          className={`mt-4 p-4 rounded-lg text-center text-white ${
            winner === "user" ? "bg-blue-500" : "bg-green-500"
          }`}
        >
          <h2 className="text-xl font-bold mb-2">
            {winner === "user" ? "You Won! 🎉" : "Shaun Goh Wins! 💪"}
          </h2>
        </div>
      )}
    </div>
  );
};

export default RaceGame;
