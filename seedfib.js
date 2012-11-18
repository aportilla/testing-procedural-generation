var SEEDFIB = function() {
  var cache = [];
  var seed = 931;
  return function(n){
    return cache[n] || (cache[n] = n<2 ? (n * seed) : fib(n-1) + fib(n-2));
  };
}();