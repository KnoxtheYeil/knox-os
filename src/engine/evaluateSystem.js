export function evaluateSystem(brookes) {
  const warnings = [];
  const praise = [];

  const values = Object.values(brookes);

  const overloaded = values.filter((b) => b.load >= 100);
  const highLoad = values.filter((b) => b.load >= 70);
  const recovering = values.filter((b) => b.status === "recovering");

  // ⚠️ CRITICAL OVERLOAD
  if (overloaded.length >= 1) {
    warnings.push(
      "One or more Brookes are in critical overload state."
    );
  }

  // ⚠️ MULTI-SYSTEM STRAIN
  if (highLoad.length >= 2) {
    warnings.push(
      "Multiple cognitive systems are operating under high load simultaneously."
    );
  }

  // ⚠️ NO RECOVERY BUFFER
  if (recovering.length === 0 && highLoad.length >= 1) {
    warnings.push(
      "No active recovery offset detected during elevated load."
    );
  }

  // ✅ BALANCED STATE
  if (
    overloaded.length === 0 &&
    highLoad.length <= 1 &&
    recovering.length >= 1
  ) {
    praise.push("System is well balanced with active recovery support.");
  }

  // ✅ LOW LOAD STATE
  const totalLoad = values.reduce((sum, b) => sum + b.load, 0);

  if (totalLoad < 80) {
    praise.push("System is operating in low-load recovery capacity.");
  }

  return {
    warnings,
    praise,
  };
}
