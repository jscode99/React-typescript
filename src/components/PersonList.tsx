import { NameType } from "./Person.types";

type PersonListProps = {
  // Type reused
  nameList: NameType[];
};

export default function PersonList(props: PersonListProps) {
  return (
    <>
      {props.nameList.map((person) => (
        <h1 key={`${person.first}-199`}>
          {person.first} {person.last}
        </h1>
      ))}
    </>
  );
}
