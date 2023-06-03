type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

export const Person = (props: PersonProps) => {
  return (
    <div>
      <h2>
        first: {props.name.first} last: {props.name.last}
      </h2>
    </div>
  );
};
