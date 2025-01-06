const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Arr = s1.split('');
  const s2Arr = s2.split('');
  let finalArr = [];
  
  for (i = 0; i < s1Arr.length; i++) {
    const elemIndex = s2Arr.indexOf(s1Arr[i]);

    if (elemIndex !== -1) {
      const elem = s2Arr.splice(elemIndex, 1);
      finalArr.push(elem);
    }
  }

  return finalArr.length;
}

module.exports = {
  getCommonCharacterCount
};
