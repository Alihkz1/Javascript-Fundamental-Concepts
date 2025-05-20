const state = new Proxy(
  { count: 0 },
  {
    get(target, prop) {
      return prop in target ? target[prop] : "not found";
    },
    set(target, key, value) {
      if (key === "count" && value < 0) {
        console.log("count has minimum value of 0");
        return false;
      }
      console.log("you can do some task here");
      target[key] = value;
      return true;
    },
  }
);

state.count--;
console.log(state.count);
