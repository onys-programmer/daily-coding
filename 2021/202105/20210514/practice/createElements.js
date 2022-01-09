export default function createElements(tagName, ...children) {
  const element = document.createElement(tagName);

  children.forEach(child => {
    element.appendChild(child);
  });

  return element;
}
