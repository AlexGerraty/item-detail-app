import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../api/items';
import './carousel.css';

function ItemDetail() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const DetailedItem = async () => {
      const Item = await getItem(id);
      setItem(Item);
    };

    DetailedItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  let itemContent;
  if (item.images.length === 1) {
    itemContent = (
      <img src={item.images[0]} className="card-img-top d-block w-50 m-auto" alt={item.title} />
    );
  } else {
    itemContent = (
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {item.images.map((image, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <img src={image} className="d-block w-50" alt={`Slider ${index + 1}`} />
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
          <h4 className="card-title">{item.title}</h4>
          <p className="card-text">{item.description}</p>
          <h6 className="card-text d-in">Price: ${item.price}</h6>
          <a href="/" className="btn btn-primary">Back to Home</a>
        </div>
      </div>
    </div>
  );
}


export default ItemDetail;