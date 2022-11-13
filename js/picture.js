const templatePicture = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const miniPictures = document.querySelector('.pictures');

const getMiniPictures = (data) => {

  const miniPictureFragment = document.createDocumentFragment();

  data.forEach(({url, comments, likes}) => {
    const copyPictureTemplate = templatePicture.cloneNode(true);
    copyPictureTemplate.querySelector('.picture__img').src = url;
    copyPictureTemplate.querySelector('.picture__comments').textContent = comments.length;
    copyPictureTemplate.querySelector('.picture__likes').textContent = likes;
    miniPictureFragment.appendChild(copyPictureTemplate);
  });
  miniPictures.appendChild(miniPictureFragment);
};

export {getMiniPictures};
