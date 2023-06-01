// Provider
import { ThemeProvider } from "../src/components/context/ThemeContext";
import { UserProvider } from "../src/components/context/UserContext";
// Comps
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import InputElement from "./components/InputElement";
import Container from "./components/Container";
import "./App.css";
import LoggedIn from "./components/state/LoggedIn";

function App(): JSX.Element {
  const personName = {
    first: "Jishnu",
    last: "Satheesh",
  };
  const personList = [
    { first: "Jishnu", last: "Satheesh" },
    { first: "Jishnu", last: "Satheesh" },
    { first: "Jishnu", last: "Satheesh" },
    { first: "Jishnu", last: "Satheesh" },
  ];
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="App">
          {/* Primitive types */}
          {/* <Greet name={`Jishnu`} messageCount={10} isLoggedIn={false} /> */}
          {/* Optional props in type (meassageCount) */}
          <Greet name={`Jishnu`} isLoggedIn={false} />
          {/* Object type */}
          <Person name={personName} />
          {/* Array type */}
          <PersonList nameList={personList} />
          {/* Union type */}
          <Status status="loading" />
          {/* Children as React node element type */}
          <Oscar>
            {/* Children as string */}
            <Heading>Heading children</Heading>
          </Oscar>
          {/* Event Types */}
          <Button handleClick={(e, id) => console.log("Clicked", e, id)} />
          <InputElement value="" handleChange={(e) => console.log(e)} />
          {/* Style props */}
          <Container style={{ padding: "10px", textAlign: "center" }}>
            Text content goes here
          </Container>
          {/* UseContext future & default */}
          <LoggedIn />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
