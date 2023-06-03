import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

type GreetProps = {
  name: string | number;
};

export const Greet = (props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
  return (
    <div>
      <h2>Welcome {props.name}! You have 10 unread messages</h2>
    </div>
  );
};
