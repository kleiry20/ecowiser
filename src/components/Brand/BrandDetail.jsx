import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BrandDetail = () => {
  const { brandId } = useParams();
  const brands = useSelector((state) => state.brand.brands);

  const brand = brands.find((b) => b.id == brandId);

  if (!brand) {
    return <div>Brand not found</div>;
  }

  return (
    <div>
      <h2>{brand.name}</h2>
      <p>{brand.description}</p>
      <img src={brand.logo} alt={`${brand.name} Logo`} style={{ width: 200 }} />
    </div>
  );
};

export default BrandDetail;
