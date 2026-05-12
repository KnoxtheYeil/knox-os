export function generateReflection(metrics, fatigue) {
  if (fatigue > 70) {
    return "Your system has been operating under sustained load. Recovery is becoming structurally necessary, not optional.";
  }

  if (metrics.cpu > 80) {
    return "Multiple high-demand processes are competing for attention.";
  }

  if (metrics.battery > 70 && metrics.cpu < 40) {
    return "System stability is improving. Creative processes may have available capacity.";
  }

  return "System operating within expected thresholds.";
}

