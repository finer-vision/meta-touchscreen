export function isLocal(): boolean {
  const hostname = window.location.hostname;
  if (hostname === "localhost") return true;
  if (hostname === "0.0.0.0") return true;
  return hostname.startsWith("192.168.");
}
