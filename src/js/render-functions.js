import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const clearGallery = () => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
};

export const renderImages = images => {
  const gallery = document.querySelector('.gallery');

  const markup = images
    .map(
      image => `
    <a href="${image.largeImageURL}" class="gallery-item">
      <img src="${image.webformatURL}" alt="${image.tags}" />
      <div class="info">
        <p>Likes: ${image.likes}</p>
        <p>Views: ${image.views}</p>
        <p>Comments: ${image.comments}</p>
        <p>Downloads: ${image.downloads}</p>
      </div>
    </a>
  `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
};

export const showLoadingIndicator = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
  loader.innerHTML = '<div class="spinner"></div>';
};

export const hideLoadingIndicator = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
};

export const showNoImagesFoundMessage = () => {
  iziToast.error({
    title: 'Sorry!',
    message:
      'There are no images matching your search query. Please try again!',
  });
};
