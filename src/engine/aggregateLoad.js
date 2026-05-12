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
    const load = activity.load || {};

    Object.entries(load).forEach(([key, value]) => {
      // ensure key exists in system
      if (total[key] === undefined) {
        total[key] = 0;
      }

      total[key] += value;
    });
  });

  return total;
}
