export default function ProductCategoryRow({ category }) {
  return (
    <tr style={{ backgroundColor: "lightgrey" }}>
      <th colSpan={3}>{category}</th>
    </tr>
  );
}
