export default function SpectrumSlider({ label, value, onChange }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <h4>{label}</h4>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        style={{ width: "100%" }}
      />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <small>Negative</small>
        <small>{Math.round(value * 100)}%</small>
        <small>Positive</small>
      </div>
    </div>
  );
}
