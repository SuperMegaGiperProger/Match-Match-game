function rand_int(limit) {
  return Math.floor(Math.random() * limit);
}

Array.prototype.random = function() {
  return this[rand_int(this.length)];
};

function get_uniq_random_indices(count, limit_value) {
  if (count > limit_value) return null;
  let numbers = new Set();
  while (numbers.size < count) {
    numbers.add(rand_int(limit_value))
  }
  return Array.from(numbers);
}

Array.prototype.shuffle = function() {
  return this.sort(() => Math.random() - 0.5);
}

Array.prototype.take = function(count) {
  if (this.length <= count) return this.shuffle();
  return get_uniq_random_indices(count, this.length).map(i => this[i]);
}

export default Array;
