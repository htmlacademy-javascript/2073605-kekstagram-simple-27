const picturesCount = 25;

const likesCount = {
  min: 15,
  max: 200,
};

const commentsCount = {
  min: 0,
  max: 200,
};

const descriptions = [
  'Милота.',
  'Проклятый старый дом.',
  'Звезда по имени Солнце',
  'Красное на черном.',
  'Белая река.',
  'Египтянин.',
  'Лепота то какая. Красота.',
  'Братство кота.',
  'Последний герой.'
];

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

const getRandomArrayElement = (array) =>
  array[getRandomPositiveInteger(0, array.length - 1)];

const createPicture = ( index ) => ({
  id: index,
  url: `photo/${index}.jpg`,
  description: getRandomArrayElement ( descriptions ),
  likes: getRandomPositiveInteger(likesCount.min, likesCount.max),
  comments: getRandomPositiveInteger(commentsCount.min, commentsCount.max),
});

const getPictures = () =>
  Array.from({ length: picturesCount }, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

checkStringLength ('', 20, 140);
getPictures ();
