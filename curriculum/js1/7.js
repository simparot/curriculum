/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a, n=2, count=0) => {
  if (a === 1 || count === 2){
    return false;
  }
  if (a === n && count === 0){
    return true;
  }
  if (a%n === 0){
    return solution (a, n+1, count+1);
  }
  return solution (a, n+1, count);
};

module.exports = {
  solution,
};
