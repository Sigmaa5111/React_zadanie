import React, { Component } from 'react';
import FilterableProductTable from './FilterableProductTable';

const PRODUCTS = [
  {category: 'Kobiety', price: '80 zł', stocked: true, name: 'Bluzka'},
  {category: 'Kobiety', price: '150 zł', stocked: true, name: 'Spodnie'},
  {category: 'Kobiety', price: '125 zł', stocked: false, name: 'Spódnica'},
  {category: 'Mężczyźni', price: '80 zł', stocked: true, name: 'T-shirty'},
  {category: 'Mężczyźni', price: '100 zł', stocked: false, name: 'Koszule'},
  {category: 'Mężczyźni', price: '150 zł', stocked: true, name: 'Bluzy'}
];

export default class App extends Component {
  render() {
    return <FilterableProductTable products={PRODUCTS} />;
  }
}
