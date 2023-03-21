import { contacts } from "../data/contacts";

function Filters(props) {

  const handleCategoryChange = (event) => {
    const category = event.target.value;

    props.categoryChange(category);
  }

  const handleCityChange = (event) => {
    const city = event.target.value;

    props.cityChange(city);
  }

  let allCategorys = [];

  contacts.map(el => allCategorys.push(el.category));

  let allCitys = [];

  contacts.map(el => allCitys.push(el.city));

  return (
    <div id="table-filters">
      <div>
        <div className="filter-name">Kategorija:</div>
        <select name="kategorija" onChange={handleCategoryChange}>
          <option value=""></option>
          {[...new Set(allCategorys)].map(el => {
            return <option value={el} key={el}>{el}</option>
          })}
        </select>
      </div>
      <div>
        <div className="filter-name">Grad:</div>
        <select name="grad" onChange={handleCityChange}>
          <option value=""></option>
          {[...new Set(allCitys)].map(el => {
            return <option value={el} key={el}>{el}</option>
          })}
        </select>
      </div>
    </div>
  );
}

export default Filters;
