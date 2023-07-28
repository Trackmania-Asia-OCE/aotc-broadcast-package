export function formatTime(ms: number) {
  if (ms < 0) ms = -ms;

  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000,
  };

  const paddedMinutes = time.minute.toString().padStart(1, '0');
  const paddedSeconds = time.second.toString().padStart(2, '0');
  const paddedMilliseconds = time.millisecond.toString().padStart(3, '0');
  return `${paddedMinutes}:${paddedSeconds}.${paddedMilliseconds}`;
}
