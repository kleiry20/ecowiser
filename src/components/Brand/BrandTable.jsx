import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteBrand, updateBrand } from "../../store/slices/brandSlice";

const BrandTable = (props) => {
  const brands = useSelector((state) => state.brand.brands);
  const { filteredBrands, showForm, setShowForm, setSelectedBrand } = props;
  const dispatch = useDispatch();

  console.log('filteredBrands', filteredBrands)

  return (
    <div className="p-8 bg-white">
      <table className="w-full bg-white">
        <thead className="w-full bg-gray-200 rounded-md">
          <tr className="border-8 ">
            <th>
              <input type="checkbox" />
            </th>
            <th className="font-normal">Name</th>
            <th className="font-normal">Description</th>
            <th className="font-normal">Logo</th>
            <th className="w-1/5 text-sm font-normal">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBrands ? (
            filteredBrands.map((brand) => (
              <tr className="h-6 text-center max-h-6" key={brand.name}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <Link
                    to={`/brands/${brand.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    {brand.name}
                  </Link>
                </td>

                <td>{brand.description}</td>
                <td>
                  <div className="flex justify-center h-20">
                    <img
                      className="object-fill w-24 h-auto"
                      src={brand.logo}
                      alt={`${brand.name} Logo`}
                    />
                    {/* <img
                  src={`http://127.0.0.1:8000${brand.logo}` || brand.logo}
                  alt="Brand Logo"
                /> */}
                  </div>
                </td>
                <td>
                  <div className="flex justify-center gap-4">
                    <button
                      className="delete-btn "
                      onClick={() => dispatch(deleteBrand(brand.id))}
                    >
                      Delete
                    </button>
                    <button
                      className="update-btn"
                      onClick={() => {
                        setShowForm(!showForm);
                        setSelectedBrand(brand);
                        dispatch(updateBrand(brand.id));
                      }}
                    >
                      Update
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr className="h-6 text-center max-h-6" key={brand.name}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <Link
                  to={`/brands/${brand.id}`}
                  className="text-blue-500 hover:underline"
                >
                  {brand.name}
                </Link>
              </td>
              <td>{brand.description}</td>
              <td>
                <div className="flex justify-center h-20">
                  <img
                    className="object-fill w-24 h-auto"
                    src={brand.logo}
                    alt={`${brand.name} Logo`}
                  />
                </div>
              </td>
              <td>
                <div className="flex justify-center gap-4">
                  <button
                    className="delete-btn "
                    onClick={() => dispatch(deleteBrand(brand.id))}
                  >
                    Delete
                  </button>
                  <button
                    className="update-btn"
                    onClick={() => {
                      setShowForm(!showForm);
                      setSelectedBrand(brand);
                      dispatch(updateBrand(brand.id));
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

export default BrandTable;
