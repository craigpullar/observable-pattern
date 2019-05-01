class NumberModel {
  
  constructor() {
    this.number = 0;
    this.color = 'red';
    this.observers = [];
  }

  addObserver(newObserver) {
    this.observers = [...this.observers, newObserver];
  }

  notifyObservers() {
    this.observers.forEach(observer => {
      observer.update(this);
    });
  }

  increment() {
    const colors = ['orange', 'red', 'green', 'blue'];
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomColorIndex];
    this.number += 1;
    this.color = randomColor;
    this.notifyObservers();
  }
}