import { ReactElement } from "react";
import Header from "../header";
import Footer from "../footer";

type Props = {
  children: ReactElement;
};
const PageModel = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageModel;
