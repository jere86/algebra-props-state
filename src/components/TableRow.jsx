
function TableRow(props) {
  const handleDelete = () => {
    const userId = props.contact.id;
    props.deleteUser(userId);
  }

  return (
    <div className="table-row">
      <div>{props.contact.name}</div>
      <div>{props.contact.lastName}</div>
      <div>{props.contact.dateOfBirth}</div>
      <div>{props.contact.number}</div>
      <div>{props.contact.address}</div>
      <div>{props.contact.city}</div>
      <div className={'category ' + props.contact.category}>
        <div></div>
      </div>
      <div>
        <button onClick={handleDelete} >Izbriši</button>
      </div>
    </div>
  );
}

export default TableRow;
