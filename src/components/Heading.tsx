type HeadingProps = {
  children: string;
};

export const Heading = (props: HeadingProps) => {
  return <h3>Heading - {props.children}</h3>;
};
