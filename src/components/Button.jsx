export default function Button({ title, filter, handleFilter }) {
  return (
    <>
      <button className={filter ? "active" : ""} onClick={handleFilter}>
        {title}
      </button>
    </>
  );
}
