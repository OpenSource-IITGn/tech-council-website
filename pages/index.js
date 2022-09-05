import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = () => {
	return (
		<>
			<Head>
				<title>Home | Technical Council</title>
				<meta
					name="description"
					content="Technical Council | Indian Institute of Technology Gandhinagar"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.container}>
				<h2>Home</h2>
			</div>
		</>
	);
};

export default Home;
