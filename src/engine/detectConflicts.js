export function detectConflicts(processes) {
  const active = processes.filter(
    (p) => p.status === "active"
  );

  const conflicts = [];

  active.forEach((process) => {
    active.forEach((other) => {
      if (
        process.id !== other.id &&
        !process.compatibleWith.includes(other.id)
      ) {
        conflicts.push(
          `${process.name} conflicting with ${other.name}`
        );
      }
    });
  });

  return [...new Set(conflicts)];
}


