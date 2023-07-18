import { ReactNode, FC } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SmoothScroll from "./SmoothScroll";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    // <SmoothScroll>
    <>
      <Header />
      {children}
      <Footer />
    </>

    // </SmoothScroll>
  );
};

export default Layout;
