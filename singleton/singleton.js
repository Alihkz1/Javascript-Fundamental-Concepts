class AppConfig {
  constructor() {
    if (AppConfig.instance) return AppConfig.instance;
    this.timestamp = Date.now();
    AppConfig.instance = this;
  }

  get getTime() {
    return this.timestamp;
  }
}

const first = new AppConfig();
const second = new AppConfig();

console.log(first === second);
console.log(first.getTime);
console.log(second.getTime);

setTimeout(() => {
  console.log(first.getTime === second.getTime);
}, 2000);
