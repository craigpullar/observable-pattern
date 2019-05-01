const root = {
  domElement: document.getElementById("root"),
  registerChild: () => {},
};
const model = NumberModel();
const container = ElementObserver({
  attributes: {
    id: "elements-observer-1",
    class: "square"
  },
  parent: root,
  state: {
    number: 0,
  },
  update: (prevState, parentState, domElement) => {
    const newState = {
      ...prevState,
      number: prevState.number + 1,
      color: parentState.color,
    };

    domElement.style.backgroundColor = newState.color;
    return newState;
  }
});

const numberDisplay = ElementObserver({
  attributes: {
    id: "elements-observer-2",
    class: "number"
  },
  parent: container,
  state: {
    numbers: []
  },
  update: (prevState, parentState, domElement) => {
    domElement.innerHTML = parentState.number;
    return prevState;
  }
});

const arrayDisplay = ElementObserver({
  attributes: {
    id: "elements-observer-2",
    class: "test"
  },
  parent: container,
  state: {
    numbers: []
  },
  update: (prevState, parentState, domElement) => {
    const newState = {
      numbers: [...prevState.numbers, parentState.number]
    };
    domElement.innerHTML = newState.numbers.join("/");
    return newState;
  }
});

const consoleObserver1 = ConsoleObserver();
const historyObserver1 = HistoryObserver();

model.addObserver(container);
model.addObserver(consoleObserver1);
model.addObserver(historyObserver1);
model.notifyObservers();
