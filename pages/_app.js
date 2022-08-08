import Head from "next/head";
import Layout from "../src/Common/Layout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
