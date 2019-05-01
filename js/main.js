const model = NumberModel();
const elementObserver1 = SquareObserver("elements-observer-1");
const elementObserver2 = SquareObserver("elements-observer-2");
const consoleObserver1 = ConsoleObserver();
const historyObserver1 = HistoryObserver();

model.addObserver(elementObserver1);
model.addObserver(elementObserver2);
model.addObserver(consoleObserver1);
model.addObserver(historyObserver1);
model.notifyObservers();
