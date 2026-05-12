import { useMemo } from "react";

import { aggregateLoad } from "./aggregateLoad";
import { applySpectrums } from "./applySpectrums";
import { applyPresets } from "./applyPresets";
import { deriveBrookeStates } from "./deriveBrookeStates";

export function useBrookeEngine({
  activeActivities,
  spectra,
  spectrumDefinitions,
  activePresets,
}) {
  const baseLoad = useMemo(() => {
    return aggregateLoad(activeActivities);
  }, [activeActivities]);

  const spectrumAdjustedLoad = useMemo(() => {
    return applySpectrums(
      baseLoad,
      spectra,
      spectrumDefinitions
    );
  }, [baseLoad, spectra, spectrumDefinitions]);

  const presetAdjustedLoad = useMemo(() => {
    return applyPresets(
      spectrumAdjustedLoad,
      activePresets
    );
  }, [spectrumAdjustedLoad, activePresets]);

  const brookeStates = useMemo(() => {
    return deriveBrookeStates(
      presetAdjustedLoad
    );
  }, [presetAdjustedLoad]);

  return {
    baseLoad,
    spectrumAdjustedLoad,
    presetAdjustedLoad,
    brookeStates,
  };
}
