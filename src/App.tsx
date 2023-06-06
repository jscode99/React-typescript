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
import LoggedIn from "./components/state/LoggedIn";
import DomRef from "./components/ref/DomRef";
import MutableRef from "./components/ref/MutableRef";
import List from "./components/generics/List";
import RandomNumber from "./components/restriction/RandomNumber";
import Toast from "./components/templateLiterals/Toast";
import CustomButton from "./components/html/Button";

import "./App.css";
import CustomInput from "./components/html/Input";
import CustomComponent from "./components/ExtractProps/CustomComponent";
import Text from "./components/polymorphic/Text";

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
          {/* UseRef Dom reference */}
          <DomRef />
          {/* useRef Mutable reference */}
          <MutableRef />
          {/* Generic Props */}
          {/* <List items={["1", "2", "3"]} onClick={(item) => console.log(item)} />
          <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
          <List
            items={[
              { id: 1, first: "jishnu", last: "satheesh" },
              { id: 2, first: "jishnu", last: "satheesh" },
              { id: "3", first: "jishnu", last: "satheesh" },
            ]}
            onClick={(item) => console.log(item)}
          />
          {/* Restriction */}
          <RandomNumber value={1} isPositive />
          {/* Template Literals */}
          <Toast position="center" />
          {/* Wrapping Html Element */}
          <CustomButton variant="primary" onClick={(e) => console.log(e)}>
            Click Me
          </CustomButton>
          <CustomInput />
          {/* Extract props types from other components */}
          <CustomComponent name="jishnu" />
          {/* Polymorphic component */}
          <Text as={"h1"} size="lg">
            Heading
          </Text>
          <Text as={"p"} size="sm">
            Paragraph
          </Text>
          <Text as={"label"} size="md" color="primary" htmlFor="id11">
            Label
          </Text>
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
