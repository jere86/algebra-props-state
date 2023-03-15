function Filters() {
  const handleCategoryChange = (event) => {
    const value = event.target.value;
    console.log("Kategorija: " + value);
  }

  return (
    <div id="table-filters">
      <div>
        <div className="filter-name">Kategorija:</div>
        <select name="kategorija" onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
