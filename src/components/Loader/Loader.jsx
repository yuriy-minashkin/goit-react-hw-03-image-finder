import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import css from './Loader.module.css';

export const Loader = ({ height, width, color, active }) => {
  return (
    <div className={css.spinner}>
      <ThreeDots
        height={height}
        width={width}
        color={color}
        visible={active}
      />
    </div>
  )
};

Loader.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};