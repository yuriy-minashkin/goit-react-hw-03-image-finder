import PropTypes from 'prop-types';
import  css  from './Modal.module.css';

export const Modal = ({ selectedImageData: {largeImageURL, tags}, closeModal }) => {
  return (
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  selectedImageData: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};