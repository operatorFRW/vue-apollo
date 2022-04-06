export function findOccurrence(str: string, substring: string): boolean {
  return str.toLowerCase().includes(substring.toLowerCase());
}
