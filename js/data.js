import {
  getRandomPositiveInteger,
  checkStringLength,
  getRandomArrayElement,
} from './util.js';

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

const getCreatePicture = ( index ) => ({
  id: index,
  url: `photo/${index}.jpg`,
  description: getRandomArrayElement ( descriptions ),
  likes: getRandomPositiveInteger(likesCount.min, likesCount.max),
  comments: getRandomPositiveInteger(commentsCount.min, commentsCount.max),
});

const getPictures = () =>
  Array.from ({ length: picturesCount }, (_, pictureIndex) => getCreatePicture (pictureIndex + 1)
  );

checkStringLength ('', 20, 140);
getPictures ();

export {
  getRandomArrayElement,
  getCreatePicture,
  getPictures,
};
