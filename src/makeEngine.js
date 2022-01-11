import EventEmitter from 'eventemitter3';

const makeEngine = () => {
  let _robots;
  let startTime;

  const _events = new EventEmitter();

  _events.on('attack', (robot) => console.log(robot));

  const engineEventLoop = (timestamp) => {
    const elapsed = timestamp - startTime;

    for (let i = 0; i < _robots.length; i++) {
      const robot = _robots[i];
      robot.useMovement();
      robot.useSensor();
      robot.useWeapon();
    }

    if (elapsed < 10000) {
      window.requestAnimationFrame(engineEventLoop);
    }
  };

  const loadRobots = (robots) => {
    _robots = robots.map((r) => {
      r.addEvents(_events);
      return r;
    });
  };

  const startEventLoop = () => {
    startTime = window.performance.now();
    window.requestAnimationFrame(engineEventLoop);
  };

  return { loadRobots, startEventLoop };
};

export default makeEngine;
