export function calculateMetrics(processes) {
  const active = processes.filter(
    (p) => p.status === "active"
  );

  let cpu = 0;
  let ram = 0;
  let battery = 100;

  active.forEach((p) => {
    cpu += p.loadCost;
    ram += p.emotionalCost;
    battery -= p.energyDrain;
  });

  cpu = Math.max(0, Math.min(cpu, 100));
  ram = Math.max(0, Math.min(ram, 100));
  battery = Math.max(0, Math.min(battery, 100));

  return {
    cpu,
    ram,
    battery
  };
}


