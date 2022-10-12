import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://fakestoreapi.com/products/${params.id}`,
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [params.id]);

  return (
    <>
      <div className="products-container">
        {loading && (
          <div>
            <h1>Loading...</h1>
          </div>
        )}
        <div className="details-card">
          <div>
            <img src={data.image} alt="#" />
          </div>
          <div>
            <h3>{data.title}</h3>
            <h5 style={{ marginTop: "10px" }}>{data.description}</h5>
            <h4 style={{ marginTop: "15px" }}>Price: ${data.price}</h4>
            <button className="add-product">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
