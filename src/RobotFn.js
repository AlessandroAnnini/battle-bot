const Robot = (name, x, y, direction) => {
  let events;
  let moveCount = 0;
  const state = {
    position: { x, y },
    direction,
  };

  const addEvents = (_events) => {
    events = _events;
  };

  const useMovement = () => {
    moveCount++;
    if (moveCount === 300) {
      events.emit(`attack`, state);
    }
  };

  const useSensor = () => {};

  const useWeapon = () => {};

  return {
    addEvents,
    useMovement,
    useSensor,
    useWeapon,
  };
};

export default Robot;
