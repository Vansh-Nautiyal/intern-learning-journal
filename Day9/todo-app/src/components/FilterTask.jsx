function FilterTask({ value, setValue }) {
  return (
    <div className="filter-task">
      <input
        type="text"
        placeholder="Filter tasks"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
export default FilterTask;