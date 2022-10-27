const getRandomPositiveInteger = (a, b) => {
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
};

const checkStringLength = (string, minLenght, maxLength) => {
  if (string.length >= minLenght && string.length <= maxLength) {
    return true;
  }
  return false;
};

const getRandomArrayElement = (array) =>
  array[getRandomPositiveInteger(0, array.length - 1)];

export {
  getRandomPositiveInteger,
  checkStringLength,
  getRandomArrayElement,
};
