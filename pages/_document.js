import { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";

export default function Document() {
	return (
		<Html>
			<Head>
				{CssBaseline.flush()}
				{/* Any new fonts to be added here */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Share|Koulen:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
