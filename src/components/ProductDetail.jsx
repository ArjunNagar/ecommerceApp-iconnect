import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://fakestoreapi.com/products/${id}`,
    })
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="products-container">
      {loading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}

      <div className="card">
        <div>
          <img src={data.image} alt="#" />
        </div>
        <div className="card-description">
          <h6>{data.title}</h6>
          <h6>{data.description}</h6>
          <h6>{data.price}</h6>
          <button className="add-product">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
