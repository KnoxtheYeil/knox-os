export function applySpectrums(
  baseLoad,
  spectra,
  definitions
) {
  const total = { ...baseLoad };

  definitions.forEach((spectrum) => {
    const position = spectra[spectrum.id] || 0.5;

    const positiveWeight = position;
    const negativeWeight = 1 - position;

    Object.entries(
      spectrum.positive.load
    ).forEach(([key, value]) => {
      total[key] += value * positiveWeight;
    });

    Object.entries(
      spectrum.negative.load
    ).forEach(([key, value]) => {
      total[key] += value * negativeWeight;
    });
  });

  return total;
}
