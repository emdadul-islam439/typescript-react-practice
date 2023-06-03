import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princes",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      <Greet name="Viswas" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList name={nameList} />
      <Status status="error" />
    </div>
  );
}

export default App;
