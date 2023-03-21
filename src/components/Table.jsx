import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function Table(props) {
  const { contacts, deleteUser } = props;
  return (
    <div id="user-table">
      <TableHeader />
      {contacts.map((contact) => {
        return <TableRow contact={contact} key={contact.id} deleteUser={deleteUser}/>;
      })}
    </div>
  );
}

export default Table;
