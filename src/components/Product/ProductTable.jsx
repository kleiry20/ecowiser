import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "../../store/slices/productSlice";

const ProductTable = (props) => {
  const products = useSelector((state) => state.product.products);
  const brands = useSelector((state) => state.brand.brands);
  const { filteredProducts, showForm, setShowForm, setSelectedProduct } = props;
  const dispatch = useDispatch();

  // Helper function to get brand name by ID
  const getBrandNameById = (brandId) => {
    const brand = brands.find((b) => b.id === brandId);
    return brand ? brand.name : "Brand Not in List";
  };

  return (
    <div className="p-8 bg-white">
      <table className="w-full bg-white">
        <thead className="w-full bg-gray-200 rounded-md">
          <tr className="border-8 ">
            <th className="font-normal">Name</th>
            <th className="font-normal">Description</th>
            <th className="font-normal">Category</th>
            <th className="font-normal">Price</th>
            <th className="font-normal">Image</th>
            <th className="font-normal">Brand Association</th>
            <th className="w-1/5 text-sm font-normal">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts ? (
            filteredProducts.map((product) => (
              <tr className="h-6 text-center max-h-6" key={product.name}>
                <td>
                  <Link
                    to={`/products/${product.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    {product.name}
                  </Link>
                </td>

                <td>{product.description}</td>

                <td>
                  <Link to={`/products/${product.id}`}>{product.category}</Link>
                </td>
                <td>
                  <Link to={`/products/${product.id}`}>{product.price}</Link>
                </td>
                <td>
                  <div className="flex justify-center h-20">
                    <img
                      className="object-fill w-24 h-auto"
                      src={product.image}
                      alt={`${product.name} Logo`}
                    />
                  </div>
                </td>
                <td>
                  <Link to={`/products/${product.id}`}>
                    {getBrandNameById(product.brandAssociation)}
                  </Link>
                </td>
                <td>
                  <div className="flex justify-center gap-4">
                    <button
                      className="delete-btn "
                      onClick={() => dispatch(deleteProduct(product.id))}
                    >
                      Delete
                    </button>
                    <button
                      className="update-btn"
                      onClick={() => {
                        setShowForm(!showForm);
                        setSelectedProduct(product);
                        dispatch(updateProduct(product.id));
                      }}
                    >
                      Update
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr className="h-6 text-center max-h-6" key={product.name}>
              <td>
                <Link
                  to={`/products/${product.id}`}
                  className="text-blue-500 hover:underline"
                >
                  {product.name}
                </Link>
              </td>
              <td>{product.description}</td>

              <td>
                <Link to={`/products/${product.id}`}>{product.category}</Link>
              </td>
              <td>
                <Link to={`/products/${product.id}`}>{product.price}</Link>
              </td>
              <td>
                <div className="flex justify-center h-20">
                  <img
                    className="object-fill w-24 h-auto"
                    src={product.image}
                    alt={`${product.name} Logo`}
                  />
                </div>
              </td>
              <td>
                <Link to={`/products/${product.id}`}>
                  {getBrandNameById(product.brandAssociation)}
                </Link>
              </td>
              <td>
                <div className="flex justify-center gap-4">
                  <button
                    className="delete-btn "
                    onClick={() => dispatch(deleteProduct(product.id))}
                  >
                    Delete
                  </button>
                  <button
                    className="update-btn"
                    onClick={() => {
                      setShowForm(!showForm);
                      setSelectedProduct(product);
                      dispatch(updateProduct(product.id));
                    }}
                  >
                    Update
                  </button>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
