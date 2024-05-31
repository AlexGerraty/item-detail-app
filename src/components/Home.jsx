import React, { useState, useEffect } from 'react';
import { getItems } from '../api/items';

function Home() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getItems()
     .then(response => {
        console.log('Response from getItems:', response);
        setItems(response.products);
        setFilteredItems(response.products);
        setLoading(false);
      })
     .catch(error => {
        console.log('Error from getItems:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = items.filter(item =>
      item.title.toLowerCase().includes(query)
    );
    setFilteredItems(filtered);
  };
  return (
    <div className="container">
     <div className="row">
    <div className="col-md-6"> {/* Adjust column size as needed */}
      <h1 className="my-4">Products</h1>
    </div>
    <div className="col-md-6 d-flex align-items-center"> {/* Adjust column size as needed */}
      <h4 className="d-inline">Sort by</h4>
    </div>
  </div>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search items..."
        value={searchQuery}
        onChange={handleSearch}
      />
      {loading ? (
        <p>Fetching your selection!</p>
      ) : (
        <div className="row" >
          {filteredItems.map(product => (
            <div key={product.id} className="col-md-4" >
              <div className="card mb-4 shadow-sm">
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body" >
                  <h5 className="card-title">{product.title}</h5>
                  <a href={`/items/${product.id}`} className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {error && <p className="text-danger">Error: {error.message}</p>}
    </div>
  );
}

export default Home;