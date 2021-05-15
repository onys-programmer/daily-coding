import createElements from './createElements.js';
import { update } from './render.js';

function clock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const paragraph = createElements(
    'h1',
    document.createTextNode(`${hours}:${minutes}:${
        seconds >= 10 ?
        seconds
        : `0${seconds}`}`),
  );

  return paragraph;
}

function init() {
  setInterval(update('clock', clock()), 1000);
}

init();
