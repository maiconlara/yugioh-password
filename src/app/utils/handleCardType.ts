export const handleCardType = (type: string) => {
  switch (type) {
    case "normal":
      return {
        backgroundColor: "#FDE68A",
        color: "#000",
      };
    case "effect":
      return {
        backgroundColor: "#f0af65",
        color: "#000",
      };
    case "ritual":
      return {
        backgroundColor: "#9DB5CC",
        color: "#000",
      };
    case "fusion":
      return {
        backgroundColor: "#A086B7",
        color: "#000",
      };
    case "synchro":
      return {
        backgroundColor: "#555555",
        color: "#fff",
      };
    case "xyz":
      return {
        backgroundColor: "#000",
        border: "1px solid #2c2c31",
        color: "#fff",
      };
    case "link":
      return {
        backgroundColor: "#00008B",
        color: "#fff",
      };
    case "normal_pendulum":
      return {
        background: "linear-gradient(to bottom, #FDE68A, #1D9E74)",
        color: "#000",
      };

    case "effect_pendulum":
      return {
        background: "linear-gradient(to bottom, #f0af65, #1D9E74)",
        color: "#000",
      };
    case "ritual_pendulum":
      return {
        background: "linear-gradient(to bottom, #9DB5CC, #1D9E74)",
        color: "#000",
      };
    case "fusion_pendulum":
      return {
        background: "linear-gradient(to bottom, #A086B7, #1D9E74)",
        color: "#000",
      };
    case "synchro_pendulum":
      return {
        background: "linear-gradient(to bottom, #555555, #1D9E74)",
        color: "#fff",
      };
    case "xyz_pendulum":
      return {
        background: "linear-gradient(to bottom, #000, #1D9E74)",
        color: "#fff",
      };
    case "spell":
      return {
        backgroundColor: "#1d9e74",
        color: "#fff",
      };
    case "trap":
      return {
        backgroundColor: "#BC5A84",
        color: "#fff",
      };
    case "token":
      return {
        backgroundColor: "#C0C0C0",
        color: "#000",
      };
    case "skill":
      return {
        backgroundColor: "#00008B",
        color: "#fff",
      };
    default:
      return {
        backgroundColor: "#FDE68A",
        color: "#000",
      };
  }
};
