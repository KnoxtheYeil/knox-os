import { useState } from "react";

import CorePanel from "./components/CorePanel";
import SystemMetrics from "./components/SystemMetrics";
import TransitionLog from "./components/TransitionLog";

import { activities } from "./data/activities";
import { evaluateSystem } from "./data/evaluateSystem";
import { spectrumDefinitions } from "./data/spectrumDefinitions";

import { useBrookeEngine } from "./engine/useBrookeEngine";

export default function App() {
  const [activeActivities, setActiveActivities] = useState([]);
  const [log, setLog] = useState([]);

  const [spectra, setSpectra] = useState({
    social_isolation: 0.5,
    creative_structure: 0.5,
    rest_stimulation: 0.5,
    independent_collab: 0.5,
    stability_crisis: 0.5,
  });

  const {
    baseLoad,
    spectrumAdjustedLoad,
    brookeStates,
  } = useBrookeEngine({
    activeActivities,
    spectra,
    spectrumDefinitions,
  });

  const evaluation = evaluateSystem(brookeStates);

  const coreState =
    brookeStates?.executive?.status || "stable";

  const metrics = {
    cpu: Math.min(
      (spectrumAdjustedLoad.executive || 0) +
        (spectrumAdjustedLoad.social || 0),
      100
    ),
    ram: Math.min(
      (spectrumAdjustedLoad.caregiver || 0) +
        (spectrumAdjustedLoad.creative || 0),
      100
    ),
    battery: Math.max(
      100 -
        (
          (spectrumAdjustedLoad.survival || 0) +
          (spectrumAdjustedLoad.executive || 0)
        ),
      0
    ),
  };

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

  return (
    <div className="layout">
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

      <div>
        <h1>KNOX OS — V4</h1>

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
      </div>

      <div>
        <TransitionLog log={log} />
      </div>
    </div>
  );
}