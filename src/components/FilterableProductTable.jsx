import SearchBar from "./SearchBar";
import "../stylings/FilterableProductTable.css";
import ProductTable from "./ProductTable";

// export default function FilterableProductTable() {
export const FilterableProductTable = () => {
  return (
    <div>
      <SearchBar />
      <ProductTable />
    </div>
  );
};
