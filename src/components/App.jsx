import React, { Component } from 'react';
import { apiData } from '../Services/API';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import css from './App.module.css';

export class App extends Component {
  state = {
    page: 1,
    totalHits: '1',
    query: '',
    images: [],
    loader: false,
    selectedImageData: {},
    showModal: false,
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.showLoader(true);

      try {
        const data = await apiData(this.state.query, this.state.page);
        if (prevState.query !== this.state.query) {
          this.setState({ images: [...data.hits], totalHits: data.totalHits });
        }

        if (prevState.page !== this.state.page && this.state.images.length > 0) {
          this.setState({ images: [...prevState.images, ...data.hits] });
        }

      } catch (error) {
        return alert(`Something went wrong. ${error}.`);
      } finally {
        this.showLoader(false);
      }
    }
  }

  handleFormSubmit = inputValue => {
    this.setState({
      page: 1,
      query: inputValue,
      images: [],
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  showLoader = value => {
    this.setState({ loader: value });
  };

  showSelectedImg = selectedImage => {
    this.setState({ selectedImageData: selectedImage });
    this.toggleModal()
  };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal, }));
  };

  render() {
    return (
      <div className={css.container}>
        <Searchbar onSearchSubmit={this.handleFormSubmit} />
        {this.state.images.length !== 0 && (
          <ImageGallery imagesArray={this.state.images} hadleClick={this.showSelectedImg} />
        )}  
        {this.state.images.length !== 0 && this.state.images.length >= 12 && (
          <Button handleClick={this.loadMore} />
        )}
         {this.state.totalHits === 0 && (
          <h2 className={css.noMatchMsg}>Ooops... Nothing found, try something else.</h2>
        )}
        <Loader
          height={150}
          width={150}
          color="#5876c6"
          active={this.state.loader}
        />
        {this.state.showModal && (<Modal largeImageURL={this.state.selectedImageData.largeImageURL} tags={this.state.selectedImageData.tags} closeModal={this.toggleModal} />)}
      </div>
    );
  }
}
