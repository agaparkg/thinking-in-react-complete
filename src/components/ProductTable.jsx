import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import products from "../assets/products";
import { Fragment } from "react";

export default function ProductTable({ query, inStock }) {
  let lastCategory = null;
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Stocked</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          const { id, category, stocked, name } = product;
          let catRow = null;

          if (!name.toLowerCase().includes(query.toLowerCase())) {
            return null;
          }

          //   if (inStock) {
          //   if (!stocked) {
          if (inStock && !stocked) {
            // true && !false ==> true && true ==> true
            // true && !true
            return null;
          }

          if (lastCategory !== category) {
            // Fruits !== Vegetables
            // "Fruits" !== "Fruits"
            // null !== "Fruits"
            lastCategory = category;

            catRow = <ProductCategoryRow category={category} />;
          }
          return (
            <Fragment key={id}>
              {catRow}
              <ProductRow {...product} />
            </Fragment>
          );
        })}
        {/* 
        <ProductCategoryRow category="Fruits" />
        <ProductRow fruit="Apple" />
        <ProductRow fruit="Dragonfruit" />
        <ProductRow fruit="Passionfruit" />

        <ProductCategoryRow category="Vegetables" />
        <ProductRow fruit="Spinach" />
        <ProductRow fruit="Pumpkin" />
        <ProductRow fruit="Peas" /> 
        */}
      </tbody>
    </table>
  );
}
