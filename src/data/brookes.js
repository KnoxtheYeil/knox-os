export const brookes = [
  {
    id: "executive",
    name: "Executive Brooke",
    status: "background",
    loadCost: 20,
    emotionalCost: 15,
    energyDrain: 18,
    compatibleWith: ["creative", "social"],
    color: "#9ca3af"
  },
  {
    id: "caregiver",
    name: "Caregiver Brooke",
    status: "active",
    loadCost: 25,
    emotionalCost: 30,
    energyDrain: 25,
    compatibleWith: ["recovery"],
    color: "#34d399"
  },
  {
    id: "creative",
    name: "Creative Brooke",
    status: "background",
    loadCost: 18,
    emotionalCost: 10,
    energyDrain: 12,
    compatibleWith: ["executive"],
    color: "#a855f7"
  },
  {
    id: "survival",
    name: "Survival Brooke",
    status: "idle",
    loadCost: 40,
    emotionalCost: 35,
    energyDrain: 45,
    compatibleWith: [],
    color: "#ef4444"
  },
  {
    id: "social",
    name: "Social Brooke",
    status: "background",
    loadCost: 15,
    emotionalCost: 20,
    energyDrain: 15,
    compatibleWith: ["executive"],
    color: "#facc15"
  },
  {
    id: "recovery",
    name: "Recovery Brooke",
    status: "active",
    loadCost: -15,
    emotionalCost: -20,
    energyDrain: -30,
    compatibleWith: ["caregiver", "creative"],
    color: "#60a5fa"
  }
];

