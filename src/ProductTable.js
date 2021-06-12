import React, { Component } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  static propTypes = {
    products: arrayOf(shape({
      name: string,
      category: string,
    })),
  }

  render() {
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <table border="1" rules="cols" frame="void">
        <thead>
          <tr>
            <th>Odzież</th>
            <th>Cena</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
