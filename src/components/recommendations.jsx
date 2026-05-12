export default function Recommendations({ recommendations }) {
  return (
    <div className="panel">
      <h3>System Recommendations</h3>

      {recommendations.map((item, i) => (
        <p key={i}>🧠 {item}</p>
      ))}
    </div>
  );
}
