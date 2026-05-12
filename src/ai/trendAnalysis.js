export function analyzePatterns(history) {
  const survivalActivations = history.filter(
    (h) => h.includes("survival")
  ).length;

  const recoveryActivations = history.filter(
    (h) => h.includes("recovery")
  ).length;

  const overloadRisk =
    survivalActivations > recoveryActivations;

  return {
    overloadRisk,
    survivalActivations,
    recoveryActivations
  };
}
