import { useState, useMemo } from "react";

import { brookes } from "./data/brookes";

import BrookeCard from "./components/BrookeCard";
import SystemMetrics from "./components/SystemMetrics";
import TransitionLog from "./components/TransitionLog";
import WarningsPanel from "./components/WarningsPanel";
import Recommendations from "./components/Recommendations";

import { calculateMetrics } from "./engine/calculateMetrics";
import { detectConflicts } from "./engine/detectConflicts";
import { generateRecommendations } from "./engine/recommendations";

export default function App() {
  const [state, setState] = useState(brookes);
  const [log, setLog] = useState([]);

  const metrics = useMemo(
    () => calculateMetrics(state),
    [state]
  );

  const conflicts = useMemo(
    () => detectConflicts(state),
    [state]
  );

  const recommendations = useMemo(
    () => generateRecommendations(metrics, conflicts),
    [metrics, conflicts]
  );

  const toggleBrooke = (id) => {
    const updated = state.map((b) => {
      if (b.id === id) {
        return {
          ...b,
          status:
            b.status === "active"
              ? "background"
              : "active"
        };
      }

      return b;
    });

    setState(updated);

    setLog((prev) => [
      `${new Date().toLocaleTimeString()} — toggled ${id}`,
      ...prev
    ]);
  };

  return (
    <div className="layout">
      <div>
        <SystemMetrics metrics={metrics} />
        <WarningsPanel conflicts={conflicts} />
        <Recommendations recommendations={recommendations} />
      </div>

      <div>
        <h1>KNOX OS</h1>

        {state.map((brooke) => (
          <BrookeCard
            key={brooke.id}
            brooke={brooke}
            onActivate={toggleBrooke}
          />
        ))}
      </div>

      <div>
        <TransitionLog log={log} />
      </div>
    </div>
  );
}




