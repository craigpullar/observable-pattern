const ElementObserver = (elementId) => {
  let _element = document.getElementById(elementId);

  const update = (model) => {
    _element.innerHTML = model.number;
    _element.style.backgroundColor = model.color;
  }

  return {
    update
  }
}