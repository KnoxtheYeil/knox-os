export const spectrums = [
  {
    id: "social_isolation",
    name: "Social Spectrum",
    positive: {
      name: "Social Engagement",
      load: {
        social: 80,
        caregiver: 30,
      },
    },
    negative: {
      name: "Isolation",
      load: {
        social: -60,
        recovery: 20,
        executive: 10,
      },
    },
  },

  {
    id: "creative_structure",
    name: "Creative Spectrum",
    positive: {
      name: "Creative Flow",
      load: {
        creative: 90,
        recovery: 10,
        executive: 20,
      },
    },
    negative: {
      name: "Rigid Structure",
      load: {
        executive: 80,
        creative: -40,
      },
    },
  },

  {
    id: "rest_stimulation",
    name: "Rest Spectrum",
    positive: {
      name: "Deep Recovery",
      load: {
        recovery: 100,
        executive: -40,
        survival: -20,
      },
    },
    negative: {
      name: "Overstimulation",
      load: {
        survival: 70,
        executive: 60,
        recovery: -60,
      },
    },
  },

  {
    id: "independent_collab",
    name: "Work Style Spectrum",
    positive: {
      name: "Collaboration",
      load: {
        social: 70,
        caregiver: 30,
        executive: 40,
      },
    },
    negative: {
      name: "Isolation Work",
      load: {
        executive: 80,
        social: -40,
      },
    },
  },

  {
    id: "stability_crisis",
    name: "System Stability Spectrum",
    positive: {
      name: "Stable Mode",
      load: {
        recovery: 60,
        executive: 20,
      },
    },
    negative: {
      name: "Crisis Mode",
      load: {
        survival: 100,
        executive: 70,
        recovery: -50,
      },
    },
  },
];
