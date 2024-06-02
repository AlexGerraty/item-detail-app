import React, { useState, useEffect } from 'react';
import { getItems, sortNameAsc, sortNameDesc, sortPriceAsc, sortPriceDesc } from '../api/items';
import { useNavigate } from 'react-router-dom';

function Home() {
  // State to hold items, filtered items, loading status, error message, and search query
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Fetch items when the component mounts
  useEffect(() => {
    getItems()
      .then(response => {
        setItems(response.products);
        setFilteredItems(response.products);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  

  // Sort items by name in ascending order
  const handleSortNameAsc = () => {
    console.log("Sort button clicked");
    sortNameAsc()
      .then(response => {
        console.log("API response received:", response);
        return response.json();
      })
      .then(sortedItems => {
        console.log("Sorted items:", sortedItems);
        if (sortedItems && sortedItems.products) {
          setFilteredItems(sortedItems.products);
          console.log("Items state updated:", sortedItems.products);
        } else {
          console.error("Sorted items response structure is unexpected:", sortedItems);
        }
      })
      .catch(error => {
        console.error("Error during sorting:", error);
        setError(error);
      });
  };

  // Sort items by name in descending order
  const handleSortNameDesc = () => {
    console.log("Sort button clicked");
    sortNameDesc()
      .then(response => {
        console.log("API response received:", response);
        return response.json();
      })
      .then(sortedItems => {
        console.log("Sorted items:", sortedItems);
        if (sortedItems && sortedItems.products) {
          setFilteredItems(sortedItems.products);
          console.log("Items state updated:", sortedItems.products);
        } else {
          console.error("Sorted items response structure is unexpected:", sortedItems);
        }
      })
      .catch(error => {
        console.error("Error during sorting:", error);
        setError(error);
      });
  };

  // Sort items by price in ascending order
  const handleSortPriceAsc= () => {
    console.log("Sort button clicked");
    sortPriceAsc()
      .then(response => {
        console.log("API response received:", response);
        return response.json();
      })
      .then(sortedItems => {
        console.log("Sorted items:", sortedItems);
        if (sortedItems && sortedItems.products) {
          setFilteredItems(sortedItems.products);
          console.log("Items state updated:", sortedItems.products);
        } else {
          console.error("Sorted items response structure is unexpected:", sortedItems);
        }
      })
      .catch(error => {
        console.error("Error during sorting:", error);
        setError(error);
      });
  };

  // Sort items by price in descending order
  const handleSortPriceDesc = () => {
    console.log("Sort button clicked");
    sortPriceDesc()
      .then(response => {
        console.log("API response received:", response);
        return response.json();
      })
      .then(sortedItems => {
        console.log("Sorted items:", sortedItems);
        if (sortedItems && sortedItems.products) {
          setFilteredItems(sortedItems.products);
          console.log("Items state updated:", sortedItems.products);
        } else {
          console.error("Sorted items response structure is unexpected:", sortedItems);
        }
      })
      .catch(error => {
        console.error("Error during sorting:", error);
        setError(error);
      });
  };

  // Handle search input to filter items based on the search query
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
        <div className="col-md-6"> 
          <h1 className="my-4">Products</h1>
        </div>
        <div className="col-md-6 d-flex justify-content-end align-items-center">
          <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              Sort By
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><button className="dropdown-item clickable" onClick={handleSortNameAsc}>Name (A-Z)</button></li>
              <li><button className="dropdown-item clickable" onClick={handleSortNameDesc}>Name (Z-A)</button></li>
              <li><button className="dropdown-item clickable" onClick={handleSortPriceAsc}>Price (Low-High)</button></li>
              <li><button className="dropdown-item clickable" onClick={handleSortPriceDesc}>Price (High-Low)</button></li>
            </ul>
          </div>
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
        <div className="row">
          {filteredItems.map(product => (
            <div key={product.id} className="col-md-4">
              <div className="card mb-4 shadow-sm clickable" onClick={() => navigate(`/items/${product.id}`)}>
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <h6 className="card-text ">Price: ${product.price} AUD</h6>
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
