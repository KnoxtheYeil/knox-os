import { useState } from "react";

import CorePanel from "./components/CorePanel";
import SystemMetrics from "./components/SystemMetrics";
import TransitionLog from "./components/TransitionLog";
import SpectrumSlider from "./components/SpectrumSlider";

import { activities } from "./data/activities";
import { evaluateSystem } from "./data/evaluateSystem";
import { spectrumDefinitions } from "./data/spectrumDefinitions";
import { spectrums } from "./data/activitySpectrums";
import { presets } from "./data/presets";

import { useBrookeEngine } from "./engine/useBrookeEngine";

export default function App() {
  /* ================= STATE ================= */

  const [activeActivities, setActiveActivities] = useState([]);
  const [activePresets, setActivePresets] = useState([]);
  const [log, setLog] = useState([]);

  const [spectra, setSpectra] = useState({
    social_isolation: 0.5,
    creative_structure: 0.5,
    rest_stimulation: 0.5,
    independent_collab: 0.5,
    stability_crisis: 0.5,
  });

  /* ================= ENGINE ================= */

  const {
    presetAdjustedLoad,
    brookeStates,
  } = useBrookeEngine({
    activeActivities,
    activePresets,
    spectra,
    spectrumDefinitions,
  });

  const evaluation = evaluateSystem(brookeStates);

  const coreState =
    brookeStates?.executive?.status || "stable";

  const metrics = {
    cpu: Math.min(
      (presetAdjustedLoad.executive || 0) +
        (presetAdjustedLoad.social || 0),
      100
    ),
    ram: Math.min(
      (presetAdjustedLoad.caregiver || 0) +
        (presetAdjustedLoad.creative || 0),
      100
    ),
    battery: Math.max(
      100 -
        (
          (presetAdjustedLoad.survival || 0) +
          (presetAdjustedLoad.executive || 0)
        ),
      0
    ),
  };

  /* ================= HANDLERS ================= */

  const toggleActivity = (activity) => {
    const exists = activeActivities.some(
      (a) => a.id === activity.id
    );

    const updated = exists
      ? activeActivities.filter((a) => a.id !== activity.id)
      : [...activeActivities, activity];

    setActiveActivities(updated);

    setLog((prev) => [
      `${new Date().toLocaleTimeString()} → ${
        exists ? "removed" : "added"
      } ${activity.name}`,
      ...prev,
    ]);
  };

  const updateSpectrum = (id, value) => {
    setSpectra((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  /* ================= RENDER ================= */

  return (
    <div className="layout">

      {/* LEFT PANEL */}
      <div>
        <CorePanel coreState={coreState} />
        <SystemMetrics metrics={metrics} />

        <div className="glass">
          <h3>System Feedback</h3>

          {evaluation?.warnings?.map((w, i) => (
            <p key={i} style={{ color: "#ff6b6b" }}>
              ⚠ {w}
            </p>
          ))}

          {evaluation?.praise?.map((p, i) => (
            <p key={i} style={{ color: "#4ade80" }}>
              ✓ {p}
            </p>
          ))}
        </div>
      </div>

      {/* CENTER PANEL */}
      <div>
        <h1>KNOX OS — V4</h1>

        <h3>Activities</h3>

        {activities.map((activity) => {
          const isActive = activeActivities.some(
            (a) => a.id === activity.id
          );

          return (
            <div
              key={activity.id}
              className="glass"
              onClick={() => toggleActivity(activity)}
              style={{
                marginBottom: 10,
                cursor: "pointer",
                opacity: isActive ? 1 : 0.5,
                borderLeft: isActive
                  ? "4px solid #60a5fa"
                  : "4px solid transparent",
              }}
            >
              <h3>{activity.name}</h3>
              <p>{isActive ? "ACTIVE" : "inactive"}</p>
            </div>
          );
        })}

        {/* SLIDERS */}
        <h3>Spectrum Controls</h3>

        {Object.entries(spectrums).map(([id, labels]) => (
          <SpectrumSlider
            key={id}
            id={id}
            labelLeft={labels.left}
            labelRight={labels.right}
            value={spectra[id]}
            onChange={updateSpectrum}
          />
        ))}
      </div>

      {/* RIGHT PANEL */}
      <div>
        <TransitionLog log={log} />
      </div>

    </div>
  );
}