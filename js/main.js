const model = new NumberModel();
const elementObserver1 = new ElementObserver("elements-observer-1");
model.addObserver(elementObserver1);
const consoleObserver1 = new ConsoleObserver();
model.addObserver(consoleObserver1);
const historyObserver1 = new HistoryObserver();
model.addObserver(historyObserver1);
model.notifyObservers();
