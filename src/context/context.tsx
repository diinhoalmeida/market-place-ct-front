import { createContext, useState } from "react";

type Props = {
  children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
};

const UserContext = createContext({});

const UserContextProvider = (props: Props) => {
  const [bag, setBag] = useState();
  return (
    <UserContext.Provider
      value={{
        bag,
        setBag,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export { UserContextProvider };
export default UserContext;