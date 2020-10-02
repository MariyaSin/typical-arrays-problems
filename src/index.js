
exports.min = function min (array = 0) {
  if ((array == 0) || (array.length == 0))
    return 0;

  return array.reduce(function(minimal, current){
    return current < minimal ? current: minimal;
  }, Infinity);
}

exports.max = function max (array = 0) {
  if ((array == 0) || (array.length == 0))
    return 0;
  
  return array.reduce(function(maximal, current){
    return current > maximal ? current: maximal;
  }, '');
}

exports.avg = function avg (array = 0) {
  if ((array == 0) || (array.length == 0))
    return 0;

  return array.reduce(function(s, current){
    return +s + +current;
  }, '') / array.length;
}
