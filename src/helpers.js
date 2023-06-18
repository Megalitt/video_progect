export function millisecondConverter(millis) {
  let minutes = Math.floor(millis / 60000);
  let seconds= Math.floor((millis % 60000) / 1000).toFixed(0);
  let miliSeconds = ((millis % 60000) % 1000);
  return (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds + ":" + (miliSeconds < 10 ? '0' : '') + miliSeconds;
};
