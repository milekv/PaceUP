export function pacePerKilometer(distanceKm: number, timeMinutes: number) {
  if (distanceKm <= 0) {
    throw new Error("Distance must be greater than zero.");
  }

  if (timeMinutes <= 0) {
    throw new Error("Time must be greater than zero.");
  }

  return timeMinutes / distanceKm;
}

export function formatPace(minutesPerKilometer: number) {
  const totalSeconds = Math.round(minutesPerKilometer * 60);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function estimatedFinishTime(distanceKm: number, paceMinutes: number) {
  if (distanceKm <= 0 || paceMinutes <= 0) {
    throw new Error("Distance and pace must be greater than zero.");
  }

  return distanceKm * paceMinutes;
}

export function formatDuration(totalMinutes: number) {
  const totalSeconds = Math.round(totalMinutes * 60);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}
