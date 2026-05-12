export default function WarningsPanel({ conflicts }) {
  return (
    <div className="panel">
      <h3>Warnings</h3>

      {conflicts.length === 0 ? (
        <p>No conflicts detected</p>
      ) : (
        conflicts.map((conflict, i) => (
          <p key={i}>⚠️ {conflict}</p>
        ))
      )}
    </div>
  );
}
