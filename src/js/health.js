export default function getHealthValue(obj) {
  if (obj.health > 50) {
    return "healthy";
  }

  if (obj.health < 15) {
    return "critical";
  }

  return "wounded";
}
