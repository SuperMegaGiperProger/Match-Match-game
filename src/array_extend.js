function randInt(limit) {
  return Math.floor(Math.random() * limit);
}

Array.prototype.random = function() {
  return this[randInt(this.length)];
};

function getUniqRandomIndices(count, limitValue) {
  if (count > limitValue) return null;
  let numbers = new Set();
  while (numbers.size < count) {
    numbers.add(randInt(limitValue));
  }
  return Array.from(numbers);
}

Array.prototype.shuffle = function() {
  return this.sort(() => Math.random() - 0.5);
};

Array.prototype.take = function(count) {
  if (this.length <= count) return this.shuffle();
  return getUniqRandomIndices(count, this.length).map(i => this[i]);
};

export default Array;
