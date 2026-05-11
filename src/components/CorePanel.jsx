export default function CorePanel({ coreState }) {
  return (
    <div style={{
      padding: "20px",
      border: "1px solid white",
      borderRadius: "12px",
      marginBottom: "20px",
      background: "#0a0a0a",
      color: "white"
    }}>
      <h2>Core Brooke (Identity Kernel)</h2>
      <p>State: {coreState}</p>
    </div>
  );
}
