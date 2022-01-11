import makeEngine from './makeEngine';
// import Robot from './Robot';
import Robot from './RobotFn';

const { loadRobots, startEventLoop } = makeEngine();

const robots = [Robot('Robot1', 0, 0, 'S'), Robot('Robot2', 10, 10, 'N')];

loadRobots(robots);
startEventLoop();

function App() {
  return (
    <div className="App">
      <h1>battle-bot</h1>
    </div>
  );
}

export default App;
