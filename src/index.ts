import './day-01';

function enableWatchMode() {
  setInterval(() => {}, 1 << 30);
}

if (process.env.WATCH) {
  enableWatchMode();
}
