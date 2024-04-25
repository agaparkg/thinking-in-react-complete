export default function ProductRow({ price, stocked, name }) {
  const customClass = { backgroundColor: stocked ? "lightgreen" : "red" };
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td style={customClass}>{stocked ? "YES" : "NO"}</td>
    </tr>
  );
}
