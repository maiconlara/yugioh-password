export const handleCardType = (type: string) => {
  const cardTypes: Record<string, Record<string, string>> = {
    normal: {
      backgroundColor: "#FDE68A",
      color: "#000",
    },
    effect: {
      backgroundColor: "#f0af65",
      color: "#000",
    },
    ritual: {
      backgroundColor: "#9DB5CC",
      color: "#000",
    },
    fusion: {
      backgroundColor: "#A086B7",
      color: "#000",
    },
    synchro: {
      backgroundColor: "#555555",
      color: "#fff",
    },
    xyz: {
      backgroundColor: "#000",
      border: "1px solid #2c2c31",
      color: "#fff",
    },
    link: {
      backgroundColor: "#00008B",
      color: "#fff",
    },
    normal_pendulum: {
      background: "linear-gradient(to bottom, #FDE68A, #1D9E74)",
      color: "#000",
    },
    effect_pendulum: {
      background: "linear-gradient(to bottom, #f0af65, #1D9E74)",
      color: "#000",
    },
    ritual_pendulum: {
      background: "linear-gradient(to bottom, #9DB5CC, #1D9E74)",
      color: "#000",
    },
    fusion_pendulum: {
      background: "linear-gradient(to bottom, #A086B7, #1D9E74)",
      color: "#000",
    },
    synchro_pendulum: {
      background: "linear-gradient(to bottom, #555555, #1D9E74)",
      color: "#fff",
    },
    xyz_pendulum: {
      background: "linear-gradient(to bottom, #000, #1D9E74)",
      color: "#fff",
    },
    spell: {
      backgroundColor: "#1d9e74",
      color: "#fff",
    },
    trap: {
      backgroundColor: "#BC5A84",
      color: "#fff",
    },
    token: {
      backgroundColor: "#C0C0C0",
      color: "#000",
    },
    skill: {
      backgroundColor: "#00008B",
      color: "#fff",
    },
  };

  return cardTypes[type] || {
    backgroundColor: "#FDE68A",
    color: "#000",
  };
};