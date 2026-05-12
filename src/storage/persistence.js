export function saveState(state) {
  localStorage.setItem(
    "brooke-os-state",
    JSON.stringify(state)
  );
}

export function loadState() {
  const saved = localStorage.getItem(
    "brooke-os-state"
  );

  return saved ? JSON.parse(saved) : null;
}
