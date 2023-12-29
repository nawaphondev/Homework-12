import React from 'react';

function ProductCategoryRow({ category }) {
    return (
        <tr>
          <th className='fruit-box' colSpan="2">
            {category}
          </th>
        </tr>
      );
}

export default ProductCategoryRow;
