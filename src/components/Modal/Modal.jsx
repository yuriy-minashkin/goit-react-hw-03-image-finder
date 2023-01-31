import { Component } from 'react';
import PropTypes from 'prop-types';
import  css  from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscPressClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscPressClose);
  }

  onEscPressClose = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    };
  };

  render() {
    return (
      <div className={css.overlay} onClick={() => this.props.closeModal()}>
        <div className={css.modal}>
          <img src={this.props.largeImageURL} alt={this.props.tags} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};