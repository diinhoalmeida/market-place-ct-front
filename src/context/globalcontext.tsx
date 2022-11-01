import React from "react";

import { UserContextProvider } from "./context";

type Props = {
    children:
      | JSX.Element
      | JSX.Element[]
      | string
      | string[];
  };

const GlobalContext = (props: Props) => {
  return (
    <>
      <UserContextProvider>{props.children}</UserContextProvider>;
    </>
  );
};

export default GlobalContext;