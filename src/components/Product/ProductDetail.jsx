import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const { productId } = useParams();
  const products = useSelector((state) => state.product.products);

  const product = products.find((p) => p.id == productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <img
        src={product.image}
        alt={`${product.name} image`}
        style={{ width: 200 }}
      />
    </div>
  );
};

export default ProductDetail;
