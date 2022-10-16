import Head from "next/head";
import Layout from "../src/Common/Layout";
import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";

const MyApp = ({ Component, pageProps }) => {
	return (
		<NextUIProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</NextUIProvider>
	);
};

export default MyApp;
