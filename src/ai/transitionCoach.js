export function coachTransition(activeProcesses) {
  if (
    activeProcesses.includes("survival") &&
    activeProcesses.includes("executive")
  ) {
    return "Executive + Survival overlap detected. Reduce planning complexity until urgency subsides.";
  }

  if (
    activeProcesses.includes("caregiver") &&
    !activeProcesses.includes("recovery")
  ) {
    return "Caregiver load elevated without active recovery support.";
  }

  return "Transitions currently stable.";
}

