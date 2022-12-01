export function giveThanks(from: string) {
  return `${from} fait dire : 'Merci Mercantile !'`;
}

giveThanks('Ronald');

function enableWatchMode() {
  setInterval(() => {}, 1 << 30);
}

if (process.env.WATCH) {
  enableWatchMode();
}
