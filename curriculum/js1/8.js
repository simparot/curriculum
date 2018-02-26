/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, n=1, gcd=0) => {
  if(a%n === 0 && b%n === 0){
    gcd = n;
  }
  if (a<b && a === n){
    return gcd;
  }
  if (a>b && b === n){
    return gcd;
  }
  if (a === b && a === n){
    return gcd;
  }
  return solution(a, b, n+1, gcd);
};

module.exports = {
  solution,
};
