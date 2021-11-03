const Filter = ({ setStatus }) => {
  const selectMenuHandler = (el) => {
    const val = el.target.value;
    setStatus(val);
  };
  return (
    <>
      <i className="fas fa-chevron-circle-down filter-menu-arrow"></i>
      <select className="filter-menu" onChange={selectMenuHandler}>
        <optgroup label="Filter by:">
          <option>All</option>
          <option>Complete</option>
        </optgroup>
      </select>
    </>
  );
};
export default Filter;
