function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = args.toString();
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    return cache.get(key);
  };
}
function add(...args) {
  return  args.reduce(function(acc, cur){
    return acc+cur;
  })
}

const memoizeAdd = memoize(add);

var sum = memoizeAdd(100, 100, 100);
console.log(sum);