import Head from "next/head";
import styles from "../../styles/Home.module.css";

const Events = () => {
  return (
    <>
      <Head>
        <title>Events | Technical Council</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-neutral-700  p-6 pt-20 lg:pb-20">
        <div className={styles.container}>
          <h1 className="text-center text-white text-4xl ">Events</h1>
          <p className="pt-10 pb-5 text-center text-white text-lg leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante <br></br>dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.<br></br> Praesent mauris. Fusce nec tellus sed augue semper porta.
          </p>
        </div>
      </section>
    </>
  );
};

export default Events;
