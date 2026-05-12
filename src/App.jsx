import { useState, useMemo } from "react";

/* UI Components */
// import BrookeCard from "./components/BrookeCard";
import CorePanel from "./components/CorePanel";
import SystemMetrics from "./components/SystemMetrics";
import TransitionLog from "./components/TransitionLog";

/* V4 DATA */
import { activities } from "./data/activities";

/* V4 ENGINE */
import { aggregateLoad } from "./engine/aggregateLoad";
import { deriveBrookeStates } from "./engine/deriveBrookeStates";
import { evaluateSystem } from "./engine/evaluateSystem";

export default function App() {
  /* =========================
     🧠 STATE (V4 SOURCE OF TRUTH)
  ========================== */

  const [activeActivities, setActiveActivities] = useState([]);
  const [log, setLog] = useState([]);

  /* =========================
     🔁 ACTIVITY TOGGLE SYSTEM
  ========================== */

  const toggleActivity = (activity) => {
    const exists = activeActivities.some((a) => a.id === activity.id);

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

  /* =========================
     ⚙️ V4 ENGINE PIPELINE
  ========================== */

  const load = useMemo(() => {
    return aggregateLoad(activeActivities);
  }, [activeActivities]);

  const brookeStates = useMemo(() => {
    return deriveBrookeStates(load);
  }, [load]);

  const evaluation = useMemo(() => {
    return evaluateSystem(brookeStates);
  }, [brookeStates]);

  /* =========================
     🧠 DERIVED UI STATE
  ========================== */

  const coreState = brookeStates.executive?.status || "stable";

  const metrics = {
    cpu: Math.min((load.executive || 0) + (load.social || 0), 100),
    ram: Math.min((load.caregiver || 0) + (load.creative || 0), 100),
    battery: Math.max(
      100 - ((load.survival || 0) + (load.executive || 0)),
      0
    ),
  };

  /* =========================
     🎨 UI RENDER
  ========================== */

  return (
    <div className="layout">

      {/* LEFT PANEL */}
      <div>
        <CorePanel coreState={coreState} />
        <SystemMetrics metrics={metrics} />

        {/* SYSTEM FEEDBACK */}
        <div className="glass">
          <h3>System Feedback</h3>

          {evaluation?.warnings?.length > 0 &&
            evaluation.warnings.map((w, i) => (
              <p key={i} style={{ color: "#ff6b6b" }}>
                ⚠ {w}
              </p>
            ))}

          {evaluation?.praise?.length > 0 &&
            evaluation.praise.map((p, i) => (
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
      </div>

      {/* RIGHT PANEL */}
      <div>
        <TransitionLog log={log} />
      </div>

    </div>
  );
}
