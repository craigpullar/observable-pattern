const ConsoleObserver = () => {

  const update = ({ number, color }) => {
    console.log(`The number is ${number} and the color is ${color}`);
  }

  return {
    update
  }
}