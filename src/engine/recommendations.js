export function generateRecommendations(metrics, conflicts) {
  const recommendations = [];

  if (metrics.cpu > 70) {
    recommendations.push(
      "High CPU load detected — reduce active processes"
    );
  }

  if (metrics.ram > 70) {
    recommendations.push(
      "Emotional load elevated — Recovery Brooke recommended"
    );
  }

  if (metrics.battery < 40) {
    recommendations.push(
      "Energy critically low — enter Recovery mode"
    );
  }

  if (conflicts.length > 0) {
    recommendations.push(
      "Process conflict detected — simplify active modes"
    );
  }

  return recommendations;
}

