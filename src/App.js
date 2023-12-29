import React from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import PRODUCTS from './data/productsData';
import './styles.css';


function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

export default App;
