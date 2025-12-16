export function formatPopulation(num) {
  if (num < 1000) return String(num);

  const suffixes = [
    { value: 1e12, symbol: "T" },
    { value: 1e9, symbol: "B" },
    { value: 1e6, symbol: "M" },
    { value: 1e3, symbol: "K" }
  ];

  for (let i = 0; i < suffixes.length; i++) {
    const { value, symbol } = suffixes[i];
    if (num >= value) {
      let formatted = (num / value).toFixed(1);

      if (formatted.endsWith(".0")) {
        formatted = formatted.slice(0, -2);
      }

      return formatted + symbol;
    }
  }

  return String(num);
}

export function numberToWeekDay(number, lower = false) {
  let weekdays = ["SAT", "SUN", "MON", "TUE", "WED", "THU", "FRI"]

  if (lower) return weekdays[number].toLocaleLowerCase();
  return weekdays[number];
}
