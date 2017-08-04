class Clock {
  constructor() {
    this.now = new Date();
    this.hours = this.now.getHours();
    this.minutes = this.now.getMinutes();
    this.seconds = this.now.getSeconds();

    // this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    let time = `${this.hours}:${this.minutes}:${this.seconds}`;
    console.log(time);
  }

  _tick() {
    this.seconds += 1;
    this.printTime();
  }

}

const clock = new Clock();
