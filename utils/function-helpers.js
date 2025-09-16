export function generateFutureDatetimeString(daysFromNow = 3, hour = 10, minutes = 30) {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  date.setHours(hour, minutes, 0, 0);
  return date.toISOString().slice(0, 16);
}