export default function TransitionLog({ log }) {
  return (
    <div className="glass">
      <h3>Transitions</h3>
      <div style={{ maxHeight: 300, overflowY: "auto" }}>
        {log.map((entry, i) => (
          <p key={i} style={{ opacity: 0.8 }}>
            {entry}
          </p>
        ))}
      </div>
    </div>
  );
}
