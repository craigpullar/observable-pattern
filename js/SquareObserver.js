const SquareObserver = (elementId) => {
  const div = document.createElement('div');
  div.setAttribute("id", elementId);
  div.setAttribute("class", "square");
  document.getElementById("root").appendChild(div);
  let _element = document.getElementById(elementId);

  const update = ({ number, color }) => {
    _element.innerHTML = number;
    _element.style.backgroundColor = color;
  }

  return {
    update
  }
}