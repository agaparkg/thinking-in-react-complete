import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import products from "../assets/products";

export default function ProductTable({ query, inStock }) {
  let lastCategory = null;
  const rows = [];

  products.forEach((product) => {
    const { id, category, price, stocked, name } = product;

    if (!name.toLowerCase().includes(query.toLowerCase())) {
      return null;
    }

    if (inStock && !stocked) {
      return null;
    }

    if (lastCategory !== category) {
      lastCategory = category;

      rows.push(<ProductCategoryRow category={category} />);
    }

    rows.push(<ProductRow {...product} />);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Stocked</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
