type PersonListProps = {
  name: {
    first: string;
    last: string;
  }[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <ul>
      {props.name.map((name) => {
        return (
          <li key={name.first}>
            first: {name.first} last: {name.last}
          </li>
        );
      })}
    </ul>
  );
};
