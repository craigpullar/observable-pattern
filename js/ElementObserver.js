const ElementObserver = ({ attributes, parent, update, state }) => {
  let _children = [];
  let _state = state;

  const _element = document.createElement('div');
  Object.entries(attributes).forEach(([ key, value ]) => {
    _element.setAttribute(key, value);
  });
  parent.domElement.appendChild(_element);

  registerChild = (child) => {
    _children = [..._children, child];
  }

  const _update = (parentState) => {
    const newState = update(_state, parentState, _element);
    _state = newState;
    _children.forEach( child => {
      child.update(newState);
    })
  }

  const me = {
    domElement: _element,
    update: _update,
    registerChild,
  }
  parent.registerChild(me);
  return me;
}