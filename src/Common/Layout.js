import Header from "./Header";
import Footer from "./Footer";

export default function Layout({children, menu}) {
    return (
      <>
        <Header menuItems={menu} />
        <main>{children}</main>        
        <Footer />
      </>
    )
  }