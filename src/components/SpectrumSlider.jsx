export default function SpectrumSlider({
  id,
  labelLeft,
  labelRight,
  value,
  onChange,
}) {
  return (
    <div className="glass" style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{labelLeft}</span>
        <span>{labelRight}</span>
      </div>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={value}
        onChange={(e) =>
          onChange(id, parseFloat(e.target.value))
        }
        style={{ width: "100%" }}
      />

      <div style={{ textAlign: "center", opacity: 0.7 }}>
        {value.toFixed(2)}
      </div>
    </div>
  );
}