export function calculateFatigue(history) {
  let fatigue = 0;

  history.forEach((entry) => {
    if (entry.includes("survival")) {
      fatigue += 12;
    }

    if (entry.includes("caregiver")) {
      fatigue += 7;
    }

    if (entry.includes("recovery")) {
      fatigue -= 10;
    }
  });

  return Math.max(0, fatigue);
}
