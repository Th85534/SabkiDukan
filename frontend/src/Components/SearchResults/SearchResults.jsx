import React from 'react';
import all_product from '../Assets/all_product';
import './SearchResults.css'
import Item from '../Item/Item';

const SearchResults = () => {
    const searchQuery = new URLSearchParams(window.location.search).get("q");

  // Filter products based on search query
  const filteredProducts = all_product.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='search-results'>
      <h1>Search Results for "{searchQuery}"</h1>
      <div className="product-list">
        {filteredProducts.map(product => (
          <Item key={product.id} id={product.id} name={product.name} image={product.image} new_price={product.new_price} old_price={product.old_price} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
