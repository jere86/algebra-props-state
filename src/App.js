import "./App.css";
import { contacts } from "./data/contacts";
import Table from "./components/Table";

function App() {
  return <Table contacts={contacts} />;
}

export default App;
