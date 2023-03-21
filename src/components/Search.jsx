function Search(props) {
    const handleSearchChange = (event) => {
        const searchInput = event.target.value;
        props.searchChange(searchInput.toLowerCase());
    }

    return (
        <div className="table-search">
            <div className="filter-name">Pretraži:</div>
            <input type="text" id="table-search" onInput={handleSearchChange} />
        </div>
    );
}

export default Search;