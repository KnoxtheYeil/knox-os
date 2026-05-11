export default function BrookeCard({ brooke, onActivate }) {
  return (
    <div
      onClick={() => onActivate(brooke.id)}
      style={{
        border: `1px solid ${brooke.color}`,
        padding: "12px",
        borderRadius: "12px",
        marginBottom: "10px",
        background: "#111",
        color: "#fff",
        cursor: "pointer"
      }}
    >
      <h3>{brooke.name}</h3>
      <p>Status: {brooke.status}</p>
      <p>Energy: {brooke.energy}</p>
      <p>Load: {brooke.load}</p>
    </div>
  );
}
