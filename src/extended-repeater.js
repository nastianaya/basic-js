const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let rep = String(str);
  if (options.separator === undefined) options.separator = '+';
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.addition === undefined) options.addition = '';

  if (options.additionRepeatTimes && typeof options.additionRepeatTimes === 'number') {
    rep += Array(options.additionRepeatTimes).fill(String(options.addition)).join(String(options.additionSeparator))
  } else {
    rep += String(options.addition);
  }

  if (options.repeatTimes && typeof options.repeatTimes === 'number') {
    rep = Array(options.repeatTimes).fill(rep).join(String(options.separator))
  }

  return rep;
}

module.exports = {
  repeater
};
