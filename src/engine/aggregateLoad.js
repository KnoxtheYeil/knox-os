export function aggregateLoad(activeActivities) {
  const total = {
    executive: 0,
    caregiver: 0,
    creative: 0,
    social: 0,
    survival: 0,
    recovery: 0,
  };

  activeActivities.forEach((activity) => {
    Object.entries(activity.load).forEach(
      ([key, value]) => {
        total[key] += value;
      }
    );
  });

  return total;
}
