import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../api/items';
import './carousel.css';

function ItemDetail() {
  // State to hold the item details
  const [item, setItem] = useState(null);
  // Extract item ID from the URL parameters
  const { id } = useParams();

  // Fetch item details when the component displays or when the ID changes
  useEffect(() => {
    const DetailedItem = async () => {
      const Item = await getItem(id);
      setItem(Item);
    };

    DetailedItem();
  }, [id]);

  // Show a loading message while the item details are being fetched
  if (!item) {
    return <div>Loading...</div>;
  }

  // Define the content to be displayed based on the number of images
  let itemContent;
  if (item.images.length === 1) {
    // If there's only one image, display it directly
    itemContent = (
      <img src={item.images[0]} className="card-img-top d-block w-25 m-auto" alt={item.title} />
    );
  } else {
    // If there are multiple images, display them in a carousel
    itemContent = (
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {item.images.map((image, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <img src={image} className="d-block w-50 m-auto" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card mb-4 shadow-sm">
        {itemContent}
        <div className="card-body">
          <h1 className="card-title">{item.title}</h1>
          <h5 className="card-text">{item.description}</h5>
          <h4 className="card-text">Price: ${item.price} AUD</h4>
          <h5 className="card-text">Availability Status: {item.availabilityStatus}!</h5>
          <h5 className="card-text">Rating: {item.rating}/5</h5>
          <h6 className="card-text">{item.returnPolicy}</h6>
          <a href="/" className="btn btn-primary">Back to Home</a>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
