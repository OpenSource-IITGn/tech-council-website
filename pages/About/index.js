import Head from "next/head";
import styles from "../../styles/Home.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Technical Council</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h2>About Us</h2>
      </div>
    </>
  );
};

export default About;
