import { ReactChild } from "react";
import SButton from "./styles";

type ButtonProps = {
  children: ReactChild;
};

const Button = (props: ButtonProps) => {
  return <SButton>{props.children}</SButton>;
};

export default Button;
