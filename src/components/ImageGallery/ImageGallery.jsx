import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ imagesArray, hadleClick }) => {
  return (
    <ul className={css.gallery}>
      {imagesArray.map(imageObj => {
        return (
          <ImageGalleryItem
            key={imageObj.id}
            image={imageObj}
            hadleClick={hadleClick} />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  imagesArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};