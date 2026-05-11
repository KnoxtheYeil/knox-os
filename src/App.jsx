import { useState } from "react";
import { brookes } from "./data/brookes.js";
import BrookeCard from "./components/BrookeCard";
import CorePanel from "./components/CorePanel";
import SystemMetrics from "./components/SystemMetrics";
import TransitionLog from "./components/TransitionLog";

export default function App() {
  const [state, setState] = useState(brookes);
  const [log, setLog] = useState([]);

  const activateBrooke = (id) => {
    const updated = state.map((b) =>
      b.id === id
        ? { ...b, status: "active" }
        : { ...b, status: "background" }
    );

    setState(updated);
    setLog((prev) => [...prev, `Activated: ${id}`]);
  };

  const coreState =
    state.find((b) => b.id === "core")?.status || "unknown";

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 2fr 1fr",
      gap: "20px",
      padding: "20px",
      background: "#000",
      minHeight: "100vh",
      color: "white"
    }}>
      
      {/* LEFT PANEL */}
      <div>
        <CorePanel coreState={coreState} />
        <SystemMetrics />
      </div>

      {/* CENTER PANEL */}
      <div>
        <h2>Brooke OS Processes</h2>
        {state.map((b) => (
          <BrookeCard
            key={b.id}
            brooke={b}
            onActivate={activateBrooke}
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
