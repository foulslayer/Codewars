function invert(array) {
  const result = array.map(myFunction);
  return result;
}

function myFunction(value, index, array) {
  return value * -1;
}
