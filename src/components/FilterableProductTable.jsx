import SearchBar from "./SearchBar";
import "../stylings/FilterableProductTable.css";
import ProductTable from "./ProductTable2";
import { useState } from "react";

// export default function FilterableProductTable() {
export const FilterableProductTable = () => {
  const [queryString, setQueryString] = useState(""); // apple
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        query={queryString}
        inStock={inStockOnly}
        setQuery={setQueryString}
        setInStock={setInStockOnly}
      />
      <ProductTable query={queryString} inStock={inStockOnly} />
    </div>
  );
};
