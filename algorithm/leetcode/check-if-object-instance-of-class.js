/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  if (obj === null || obj === undefined) return false;
  if (
    (typeof obj === "number" && classFunction === Number) ||
    (typeof obj === "string" && classFunction === String) ||
    (typeof obj === "bigint" && classFunction === BigInt) ||
    (typeof obj === "boolean" && classFunction === Boolean) || 
    (typeof obj === "object" && classFunction)
  ) {
    return true;
  }
  return obj instanceof classFunction;
};

checkIfInstanceOf(new Date(), Date); // true
