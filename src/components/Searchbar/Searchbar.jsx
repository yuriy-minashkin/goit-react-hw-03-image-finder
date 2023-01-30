import React, { Component } from 'react'
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    query: '',
  }

  handleInput = event => {
    this.setState({ query: event.target.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query.trim() === '') {
      alert('Please, type something...');
      return;
    };
    this.props.onSearchSubmit(this.state.query)
    this.reset();
  };

  reset = () => {
    this.setState({query: ''});
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            name="query"
            value={this.state.query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
}