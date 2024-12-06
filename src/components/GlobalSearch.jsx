// Search logic for global search
import { useSelector } from "react-redux";

export const useGlobalSearch = () => {
  const { searchTerm } = useSelector((state) => state.search);
  const { brands } = useSelector((state) => state.brands);
  const { products } = useSelector((state) => state.products);

  const filteredResults = [...brands, ...products].filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return filteredResults;
};
