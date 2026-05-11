export default function TransitionLog({ log }) {
  return (
    <div style={{ 
      marginTop: "20px",
      padding: "15px",
      border: "1px solid #333",
      borderRadius: "12px",
      color: "#fff"
    }}>
      <h3>Transition Log</h3>
      {log.map((entry, i) => (
        <p key={i}>{entry}</p>
      ))}
    </div>
  );
}