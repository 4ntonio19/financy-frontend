import { ReactElement } from "react";
import Header from "../header";
import Footer from "../footer";
import { SContainer } from "./styles";

type Props = {
  children: ReactElement;
};
const PageModel = ({ children }: Props) => {
  return (
    <>
      <Header />
      <SContainer>{children}</SContainer>
      <Footer />
    </>
  );
};

export default PageModel;
