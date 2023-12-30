import React from 'react';

function ProductCategoryRow({ category }) {
    return (
      <tr>
      <th colSpan="2" className="category-row">
        {category}
      </th>
    </tr>
      );
}

export default ProductCategoryRow;
