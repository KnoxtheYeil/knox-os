export function evaluateSystem(states) {
  const warnings = [];
  const praise = [];

  Object.entries(states).forEach(([key, value]) => {
    if (value.status === "overloaded") {
      warnings.push(`${key} overloaded`);
    }

    if (value.status === "recovering") {
      praise.push(`${key} recovering`);
    }
  });

  return {
    warnings,
    praise,
  };
}
