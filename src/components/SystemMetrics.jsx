import { useEffect, useState } from "react";

export default function SystemMetrics() {
  const [load, setLoad] = useState(42);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoad(Math.floor(Math.random() * (60 - 30 + 1) + 30));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "15px", border: "1px solid #00ffcc", marginBottom: "20px", fontFamily: "monospace" }}>
      <h3 style={{ color: "#00ffcc", margin: "0 0 10px 0" }}>SYSTEM_METRICS</h3>
      <div style={{ marginBottom: "5px" }}>CPU LOAD: {load}%</div>
      <div style={{ width: "100%", background: "#222", height: "8px", background: "#333" }}>
        <div style={{ width: `${load}%`, height: "100%", background: "#00ffcc", transition: "width 0.5s ease" }} />
      </div>
      <div style={{ marginTop: "10px", fontSize: "0.8rem", color: "#888" }}>BUFFER_STATUS: OPTIMAL</div>
    </div>
  );
}