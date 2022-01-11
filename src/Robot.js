class Robot {
  moveCount = 0;
  constructor(name, x, y, direction) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  addEvents(events) {
    this.events = events;
  }

  useMovement() {
    if (this.moveCount === 300) {
      debugger;
      this.events.emit(`movement`, this.name);
    }
    // console.log(`${this.name} useMovement`);
    this.moveCount++;
  }

  useSensor() {
    // console.log(`${this.name} useSensor`);
  }

  useWeapon() {
    // console.log(`${this.name} useWeapon`);
  }
}

export default Robot;
