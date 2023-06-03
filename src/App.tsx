import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

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
    </div>
  );
}

export default App;
