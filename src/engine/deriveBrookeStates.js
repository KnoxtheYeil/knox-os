export function deriveBrookeStates(load) {
  const brookes = {};

  Object.keys(load).forEach((key) => {
    const value = load[key];

    let status = "stable";

    if (value >= 100) {
      status = "overloaded";
    } else if (value >= 70) {
      status = "high";
    } else if (value >= 30) {
      status = "moderate";
    } else if (value < 0) {
      status = "recovering";
    }

    brookes[key] = {
      load: value,
      status,
    };
  });

  return brookes;
}
