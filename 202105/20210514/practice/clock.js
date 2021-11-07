import createElements from './createElements.js';

function clock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const paragraph = createElements(
    'h1',
    document.createTextNode(`${hours}:${minutes}:${seconds >= 10 ? seconds
    : `0${seconds}`}`),
  );

  return paragraph;
}

function render(tagId, paragraph) {
  const container = document.getElementById(tagId);
  const root = container.appendChild(paragraph);

  container.appendChild(root);
}

function clear(tagId, ...children) {
  const container = document.getElementById(tagId);

  children.forEach((child) => {
    const node = container.querySelector(child);
    if (node !== null) {
      container.removeChild(node);
    }
  });
;}

function init() {
  const updateClock = () => {
    clear('clock', 'h1');
    render('clock', clock());
  };

  setInterval(updateClock, 1000);
}

init();
