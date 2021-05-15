export default function render(tagId, paragraph) {
  function clear(tagId, ...children) {
    const container = document.getElementById(tagId);
  
    children.forEach((child) => {
      const node = container.querySelector(child);
      if (node !== null) {
        container.removeChild(node);
      }
    });
  ;}
  
  const container = document.getElementById(tagId);
  const root = container.appendChild(paragraph);

  container.appendChild(root);

  const update = (tagId, ...children) => {
    clear(tagId, ...children);
    render(tagId, paragraph);
  };
}
