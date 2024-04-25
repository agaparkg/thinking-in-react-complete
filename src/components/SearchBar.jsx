export default function SearchBar({ query, inStock, setQuery, setInStock }) {
  return (
    <form>
      <input
        value={query} //"apple"
        type="text"
        onChange={(e) => {
          const inputValue = e.target.value.trim(); // sdadkjadkfasd
          setQuery(inputValue);
        }}
        placeholder="Search..."
      />
      <label>
        <input
          checked={inStock}
          onChange={(e) => {
            const inputValue = e.target.checked; // true/false
            setInStock(inputValue);
          }}
          type="checkbox"
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}
