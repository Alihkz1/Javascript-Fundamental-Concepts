// Fix this code using .bind():
const timer = {
  seconds: 0,
  start() {
    setTimeout(function () {
      this.seconds++;
      console.log(this.seconds);
    }, 1000);
  },
};
timer.start();

// solution:
const timer2 = {
  seconds: 0,
  start() {
    setTimeout(
      function () {
        this.seconds++;
        console.log(this.seconds);
      }.bind(timer2),
      1000
    );
  },
};
timer2.start();
