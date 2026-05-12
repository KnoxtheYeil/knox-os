export default function SystemMetrics({ metrics }) {
  return (
    <div className="panel">
      <h3>System Metrics</h3>

      <p>CPU (Attention): {metrics.cpu}%</p>
      <p>RAM (Emotional Load): {metrics.ram}%</p>
      <p>Battery (Energy): {metrics.battery}%</p>
    </div>
  );
}


