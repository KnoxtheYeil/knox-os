export function applyPresets(load, activePresets) {
  const modified = { ...load };

  activePresets.forEach((preset) => {
    const m = preset.modifiers;

    if (m.executiveMultiplier) {
      modified.executive *= m.executiveMultiplier;
    }

    if (m.survivalMultiplier) {
      modified.survival *= m.survivalMultiplier;
    }

    if (m.recoveryMultiplier) {
      modified.recovery *= m.recoveryMultiplier;
    }
  });

  return modified;
}

