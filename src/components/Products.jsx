import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products/",
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="products-container">
        {loading && (
          <div>
            <h1>Loading...</h1>
          </div>
        )}

        {data.map((product) => (
          <div key={product.id} className="card">
            <div>
              <img src={product.image} alt="#" />
            </div>
            <div className="card-description">
              <h3>
                <Link to={`/product/${product.id}`}>{product.title}</Link>
              </h3>
              <h4>{`Price: $${product.price} `}</h4>
              <h5>{`Category: ${product.category}`}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
