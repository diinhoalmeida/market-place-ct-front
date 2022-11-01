import { ContextProvider } from "./context";

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
      <ContextProvider>{props.children}</ContextProvider>;
    </>
  );
};

export default GlobalContext;