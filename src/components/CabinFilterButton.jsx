export default function CabinFilterButton({
  children,
  value,
  currentFilter,
  handleFilter,
}) {
  return (
    <button
      onClick={() => handleFilter(value)}
      className={`px-5 py-2 hover:bg-primary-700 ${
        currentFilter === value ? "bg-primary-700 text-primary-50" : ""
      }`}
    >
      {children}
    </button>
  );
}
