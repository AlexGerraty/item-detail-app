import React, { useState, useEffect } from 'react';
import { getItems, sortNameAsc, sortNameDesc } from '../api/items';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

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
    <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Sort By
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item clickable" onClick={handleSortNameAsc}>Name Ascending</a></li>
    <li><a class="dropdown-item clickable" onClick={handleSortNameDesc} >Name Descending</a></li>
    <li><a class="dropdown-item" >Price Ascending</a></li>
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
        <div className="row" >
          {filteredItems.map(product => (
            <div key={product.id} className="col-md-4" >
              <div className="card mb-4 shadow-sm clickable" onClick={() => navigate(`/items/${product.id}`)}>
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body" >
                  <h5 className="card-title">{product.title}</h5>
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