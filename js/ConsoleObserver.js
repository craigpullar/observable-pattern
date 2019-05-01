const ConsoleObserver = () => {

  const update = (model) => {
    console.log(`The number is ${model.number} and the color is ${model.color}`);
  }

  return {
    update
  }
}