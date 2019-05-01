const NumberModel = () => {
  let state = {
    number: 0,
    color: 'red',
    observers: []
  }

  const addObserver = (newObserver) =>{
      state.observers = [...state.observers, newObserver];
  };

  const notifyObservers = () => {
    state.observers.forEach(observer => {
      observer.update(state);
    });
  }

  const increment = () => {
    const colors = ['orange', 'red', 'green', 'blue'];
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomColorIndex];
    state.number += 1;
    state.color = randomColor;
    notifyObservers();
  }

  return {
    addObserver,
    notifyObservers,
    increment
  }
}