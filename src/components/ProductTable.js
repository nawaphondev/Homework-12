import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable({ products, filterText, inStockOnly }) {
  let lastCategory = null;

  // Filter and map products
  const rows = products
    .filter(product => {
      if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return false;
      }
      if (inStockOnly && !product.stocked) {
        return false;
      }
      return true;
    })
    .map(product => {
      // Add ProductCategoryRow if category changes
      const categoryRow = product.category !== lastCategory ? (
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      ) : null;

      // Update lastCategory
      lastCategory = product.category;

      return (
        <React.Fragment key={product.name}>
          {categoryRow}
          <ProductRow product={product} key={product.name} />
        </React.Fragment>
      );
    });

  return (
    <table>
      <thead>
        <tr>
          <th className='name-box'>Name</th>
          <th className='price-box'>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
