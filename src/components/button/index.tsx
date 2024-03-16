import { MouseEventHandler, ReactNode } from "react";
import SButton from "./styles";

type ButtonProps = {
  type?: "submit" | "button" | "reset";
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const Button = ({ type, children, onClick, disabled }: ButtonProps) => {
  return (
    <SButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </SButton>
  );
};

export default Button;
