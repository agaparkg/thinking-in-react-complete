import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable() {
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
        <ProductCategoryRow category="Fruits" />
        <ProductRow fruit="Apple" />
        <ProductRow fruit="Dragonfruit" />
        <ProductRow fruit="Passionfruit" />

        <tr style={{ backgroundColor: "lightgrey" }}>
          <th colSpan={3}>Vegetables</th>
        </tr>
        <tr>
          <td>Spinach</td>
          <td>$2</td>
          <td style={{ backgroundColor: "lightgreen" }}>Yes</td>
        </tr>
        <tr>
          <td>Pumpkin</td>
          <td>$4</td>
          <td style={{ backgroundColor: "red" }}>No</td>
        </tr>
        <tr>
          <td>Peas</td>
          <td>$1</td>
          <td style={{ backgroundColor: "lightgreen" }}>Yes</td>
        </tr>
      </tbody>
    </table>
  );
}
