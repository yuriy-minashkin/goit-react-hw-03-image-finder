import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, hadleClick }) => {
  return (
    <li className={css.galleryItem} onClick={() => {hadleClick(image);}}>
      <img className={css.image} src={image.webformatURL} alt={image.tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
  }).isRequired,
  hadleClick: PropTypes.func.isRequired,
}