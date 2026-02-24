function isPalindrome(num) {
  let str = num.toString();
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
module.exports = isPalindrome;