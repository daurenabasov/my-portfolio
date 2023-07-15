import { ReactNode, FC } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
