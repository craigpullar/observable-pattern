const ElementObserver = (elementId) => {
  let _element = document.getElementById(elementId);

  const update = ({ number, color }) => {
    _element.innerHTML = number;
    _element.style.backgroundColor = color;
  }

  return {
    update
  }
}