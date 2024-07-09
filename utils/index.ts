export const cleanAndCapitalize = (str: string) => {
  return str
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};
