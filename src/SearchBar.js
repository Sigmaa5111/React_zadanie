import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Szukaj..." />
        <p>
          <input type="checkbox" />
          {' '}
          Pokaż dostępne produkty
        </p>
      </form>
    );
  }
}
