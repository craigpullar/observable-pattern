const model = NumberModel();
const elementObserver1 = ElementObserver("elements-observer-1");
const consoleObserver1 = ConsoleObserver();
const historyObserver1 = HistoryObserver();

model.addObserver(elementObserver1);
model.addObserver(consoleObserver1);
model.addObserver(historyObserver1);
model.notifyObservers();
