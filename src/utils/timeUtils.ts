/**
 * Converts a time string to seconds
 * Handles both minutes:seconds format (14:57.44) and hours:minutes:seconds format (1:07:30)
 */
export const convertTimeToSeconds = (timeString: string) => {
  if (typeof timeString !== "string") return 0;
  
  const parts = timeString.split(":");
  
  if (parts.length === 3) {
    // Format: hours:minutes:seconds (e.g., "1:07:30")
    const [hours, minutes, seconds] = parts.map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  } else if (parts.length === 2) {
    // Format: minutes:seconds (e.g., "14:57")
    const [minutes, seconds] = parts.map(Number);
    return minutes * 60 + seconds;
  }
  
  return 0;
};