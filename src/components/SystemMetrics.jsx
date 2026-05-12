export default function SystemMetrics({ metrics }) {
  return (
    <div className="glass">
      <h3>System Metrics</h3>

      <Metric label="CPU" value={metrics.cpu} color="#60a5fa" />
      <Metric label="RAM" value={metrics.ram} color="#a855f7" />
      <Metric label="Energy" value={metrics.battery} color="#34d399" />
    </div>
  );
}

function Metric({ label, value, color }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div>{label}: {value}%</div>
      <div style={{
        height: 6,
        background: "rgba(255,255,255,0.1)",
        borderRadius: 10
      }}>
        <div style={{
          width: `${value}%`,
          height: "100%",
          background: color,
          borderRadius: 10,
          transition: "width 0.3s ease"
        }} />
      </div>
    </div>
  );
}
