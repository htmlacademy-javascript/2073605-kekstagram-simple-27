function getRandomPositiveInteger (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' ) {
    return NaN;
  }
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength (string, minLenght, maxLength) {
  return string.length >= minLenght && string.length <= maxLength;
}

getRandomPositiveInteger (-1, 0);
checkStringLength ('', 20, 140);
