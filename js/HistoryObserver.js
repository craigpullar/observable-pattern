const HistoryObserver = () => {
  let _colorHistory = [];

  const update = ({ color }) => {
    _colorHistory = [ color[0].toLowerCase(), ..._colorHistory];
    const colorsString = _colorHistory.join(" ");
    const message = `The most recent 5 colors were: ${colorsString}`;
    console.log(message);
  }

  return {
    update
  }
}