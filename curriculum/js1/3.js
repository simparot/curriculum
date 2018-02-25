/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (n, result = "") => {
   if (n < 0 || n === 0){
     return result;
   }
     return solution(n-1, result + "hello");
};

module.exports = {
  solution,
};
