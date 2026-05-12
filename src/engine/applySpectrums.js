export function applySpectrums(load = {}, spectrums = {}, definitions = []) {
  const total = { ...load };

  definitions.forEach((spectrum) => {
    const position = spectrums[spectrum.id] ?? 0.5;

    const positiveWeight = position;
    const negativeWeight = 1 - position;

    const applyLoad = (sourceLoad, weight) => {
      Object.entries(sourceLoad || {}).forEach(([key, value]) => {
        if (!total[key]) total[key] = 0;

        total[key] += value * weight;
      });
    };

    applyLoad(spectrum.positive?.load, positiveWeight);
    applyLoad(spectrum.negative?.load, negativeWeight);
  });

  return total;
}