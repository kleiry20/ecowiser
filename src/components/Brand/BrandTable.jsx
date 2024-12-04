import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteBrand, updateBrand } from "../../store/slices/brandSlice";

const BrandTable = (props) => {
  const brands = useSelector((state) => state.brand.brands);
  const { showForm, setShowForm, setSelectedBrand } = props;
  const dispatch = useDispatch();

  return (
    <div>
      <table className="w-full">
        <thead className="w-full bg-gray-200 rounded-md">
          <tr className="border-8 ">
            <th className="font-normal">Name</th>
            <th className="font-normal">Description</th>
            <th className="font-normal">Logo</th>
            <th className="text-sm font-normal">Actions</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand) => (
            <tr className="text-center" key={brand.name}>
              <td>
                <Link
                  to={`/brands/${brand.id}`}
                  className="text-blue-500 hover:underline"
                >
                  {brand.name}
                </Link>
              </td>

              <td>{brand.description}</td>
              <td className="flex justify-center">
                <img
                  src={brand.logo}
                  alt={`${brand.name} Logo`}
                  style={{ width: 100 }}
                />
              </td>
              <td>
                <button
                  className="delete-btn "
                  onClick={() => dispatch(deleteBrand(brand.id))}
                >
                  Delete
                </button>
                <button
                  className="add-btn "
                  onClick={() => {
                    setShowForm(!showForm);
                    setSelectedBrand(brand);
                    dispatch(updateBrand(brand.id));
                  }}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrandTable;
