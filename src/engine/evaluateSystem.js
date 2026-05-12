export function evaluateSystem(state) {
  const warnings = [];
  const praise = [];

  if (state?.executive?.status === "overloaded") {
    warnings.push("Executive system overloaded");
  }

  if (state?.creative?.status === "active") {
    praise.push("Creative system engaged");
  }

  return { warnings, praise };
}