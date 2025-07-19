var MyHashMap = function () {
  this.array = new Array(1000001); // Because key is <= 10^6
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.array[key] = value;
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  return this.array[key] === undefined ? -1 : this.array[key];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  this.array[key] = undefined;
};

// var obj = new MyHashMap();
// obj.put(10, 20);
// var param_2 = obj.get(key);
// obj.remove(key);
