import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const footerVisibility = useRouter().pathname === "/Contact" ? false : true;
  return (
    <>
      <Header />
      <main>{children}</main>
      {footerVisibility && <Footer />}
    </>
  );
};

export default Layout;
