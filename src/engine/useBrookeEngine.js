import { useMemo } from "react";

import { aggregateLoad } from "./aggregateLoad";
import { deriveBrookeStates } from "./deriveBrookeStates";
import { applySpectrums } from "./applySpectrums";

export function useBrookeEngine({
  activeActivities,
  spectra,
  spectrumDefinitions,
}) {
  // 1. Base load
  const baseLoad = useMemo(() => {
    return aggregateLoad(activeActivities);
  }, [activeActivities]);

  // 2. Spectrum adjustment
  const spectrumAdjustedLoad = useMemo(() => {
    return applySpectrums(
      baseLoad,
      spectra,
      spectrumDefinitions
    );
  }, [baseLoad, spectra, spectrumDefinitions]);

  // 3. Derived system state
  const brookeStates = useMemo(() => {
    return deriveBrookeStates(spectrumAdjustedLoad);
  }, [spectrumAdjustedLoad]);

  return {
    baseLoad,
    spectrumAdjustedLoad,
    brookeStates,
  };
}