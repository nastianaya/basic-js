const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments.length === 0) value = '( )';
      let node = (this.chain.length === 0) ? `( ${value} )` : `~~( ${value} )`; 
      this.chain.push(node);
  
      return this;
  },
  removeLink(position) {
    if (isNaN(position) || position < 1 || position > this.chain.length || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } 
    let node = position === 1 ? this.chain[position].slice(2) : this.chain[position];
    this.chain.splice(position - 1, 2, node);

    return this;
  },
  reverseChain() {
    if (this.chain.length <= 1 ) return this;
      this.chain[0] = '~~' + this.chain[0];
      this.chain.reverse();
      if (this.chain.length > 1) {
        let node = this.chain[0].slice(2);
        this.chain.splice(0, 1, node);
      }
      return this;
  },
  finishChain() {
    let result = this.chain.join('');
    this.chain.length = 0;

    return result;
  }
};

module.exports = {
  chainMaker
};
