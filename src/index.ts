// import './day-01';
import './day-02';

function enableWatchMode() {
  setInterval(() => {}, 1 << 30);
}

if (process.env.WATCH) {
  enableWatchMode();
}
