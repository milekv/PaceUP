export function pacePerKilometer(distanceKm: number, timeMinutes: number) {
  if (distanceKm <= 0) {
    throw new Error("Distance must be greater than zero.");
  }

  return timeMinutes / distanceKm;
}

export function formatPace(minutesPerKilometer: number) {
  const minutes = Math.floor(minutesPerKilometer);
  const seconds = Math.round((minutesPerKilometer - minutes) * 60);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}
