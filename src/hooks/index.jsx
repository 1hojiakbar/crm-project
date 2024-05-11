export function getValue(value) {
  switch (typeof value) {
    case "string":
      return value;
    case "number":
      return `${value}px`;
    default:
      return "none";
  }
}
