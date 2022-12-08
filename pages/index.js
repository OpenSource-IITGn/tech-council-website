import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import ABOUT from "../src/Constants/about";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TeamCard from "../src/Common/TeamCard";

const Home = () => {
	const size = useWindowSize();

	function useWindowSize() {
		// Initialize state with undefined width/height so server and client renders match
		// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
		const [windowSize, setWindowSize] = useState({
			width: undefined,
			height: undefined,
		});

		useEffect(() => {
			// only execute all the code below in client side
			if (typeof window !== "undefined") {
				// Handler to call on window resize
				function handleResize() {
					// Set window width/height to state
					setWindowSize({
						width: window.innerWidth,
						height: window.innerHeight,
					});
				}

				// Add event listener
				window.addEventListener("resize", handleResize);

				// Call handler right away so state gets updated with initial window size
				handleResize();

				// Remove event listener on cleanup
				return () => window.removeEventListener("resize", handleResize);
			}
		}, []); // Empty array ensures that effect is only run on mount
		return windowSize;
	}

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 1,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 480 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 480, min: 0 },
			items: 1,
		},
	};
	const events = [{ key: 0 }, { key: 1 }, { key: 2 }, { key: 3 }];
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
			<div className={styles.root}>
				<div className={styles.welcome}>
					<h1 className={styles.welcomeText}>
						Welcome to the official website of Technical Council at
						IIT Gandhinagar
					</h1>
				</div>
				<div className={styles.aboutus}>
					<h2 className={styles.title}>About Us</h2>
					<p className={styles.subtitle}>
						Technical Council IITGN is the student body that
						promotes and takes initiatives for the technical
						activities that happen at IIT Gandhinagar.
					</p>
					<div className={styles.cardsOuter}>
						{ABOUT.map((about) => {
							return (
								<div className={styles.card} key={about.id}>
									<div className={styles.bannerOuter}>
										<img
											className={styles.cardBanner}
											src={about.banner}
											style={{ padding: "20px" }}
										/>
									</div>
									<div className={styles.cardInfo}>
										<h2 className={styles.cardName}>
											{about.name}
										</h2>
										<p className={styles.cardDesc}>
											{about.desc}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className={styles.clubsOuter}>
					<h2 className={styles.title}>CLUBS & HOBBY GROUPS</h2>
					<div className={styles.grid_container}>
						<div
							className={`${styles.mean_mechanics} ${styles.grid_item}`}
						>
							MEAN MECHANICS
						</div>
						<div className={`${styles.grasp} ${styles.grid_item}`}>
							GRASP
						</div>
						<div
							className={`${styles.anveshanam} ${styles.grid_item}`}
						>
							ANVESHANAM
						</div>
						<div className={`${styles.digis} ${styles.grid_item}`}>
							DIGIS
						</div>
						<div
							className={`${styles.hardware} ${styles.grid_item}`}
						>
							HARDWARE, IoT, VLSI GROUP
						</div>

						<div className={`${styles.ml} ${styles.grid_item}`}>
							ML
						</div>
						<div
							className={`${styles.esports} ${styles.grid_item}`}
						>
							ESPORTS
						</div>
						<div className={`${styles.metis} ${styles.grid_item}`}>
							METIS
						</div>
						<div
							className={`${styles.blockchain} ${styles.grid_item}`}
						>
							WEB3/ {<br />} BLOCKCHAIN {<br />} HOBBY GROUP
						</div>
						<div
							className={`${styles.odyssey} ${styles.grid_item}`}
						>
							ODYSSEY
						</div>
					</div>
				</div>
				<hr />
				{/* <div className={styles.events}>
					<h2 className={styles.title}>UPCOMING EVENTS</h2>
					<div className={styles.carousel}>
						<Carousel
							swipeable={false}
							draggable={true}
							showDots={true}
							responsive={responsive}
							ssr={true} // means to render carousel on server-side.
							infinite={true}
							keyBoardControl={true}
							containerClass="carousel-container"
							removeArrowOnDeviceType={["tablet", "mobile"]}
							deviceType={"desktop"}
							dotListClass="custom-dot-list-style"
							itemClass="carousel-item-padding-40-px"
							centerMode={size.width > 850 ? true : false}
							partialVisible={size.width < 850 ? true : false}
						>
							{events.map((event) => {
								return (
									<div
										key={event.key}
										className={styles.eventCard}
									>
										<img
											src="/assets/images/club_bg/odyssey.jpg"
											className={styles.eventBanner}
										/>
										<h2 className={styles.eventTitle}>
											AMA with ex-Uber
										</h2>
										<p className={styles.eventLoc}>
											A joint session from 4:30PM at 300
											Audi
										</p>
										<p className={styles.eventDesc}>
											It will be an informal AMA style
											session answering questions about
											getting into and navigating a career
											in tech.
										</p>
									</div>
								);
							})}
						</Carousel>
					</div>
				</div> */}
				<div className={styles.team}>
					<h2 className={styles.title}>Faculty Advisor</h2>
					<TeamCard
						name="Prof. Jaichander Swaminathan"
						email="jaichander.s@iitgn.ac.in"
						bio="He is a Kanchan and Harilal Doshi Chair Assistant Professor, Mechanical Engineering at IIT Gandhinagar. He completed his PhD from Massachusetts Institute of Technology in 2017."
						website="https://iitgn.ac.in/faculty/me/7-jaichander"
						image="/assets/images/team/Jaichander_Swaminathan.jpg"
						size="large"
					/>
					<hr className={styles.hrWhite} />
					<h2 className={styles.title}>Secretary and Coordinators</h2>
					<div className={styles.teamGrid}>
						<TeamCard
							className={styles.teamCardCord1}
							name="Progyan Das"
							email="technical.secretary@iitgn.ac.in"
							bio="A pre-final year undergraduate student at IIT Gandhinagar."
							website="http://progyan.me/"
							image="/assets/images/team/Progyan_Das.jpg"
							size="small"
						/>
						<TeamCard
							className={styles.teamCardSecy}
							name="Aniket Rajnish"
							email="aniket.r@iitgn.ac.in"
							bio="A final year undergraduate student at IIT Gandhinagar."
							website="http://makra.wtf/"
							image="/assets/images/team/Aniket_Rajnish.jpg"
							size="large"
						/>
						<TeamCard
							className={styles.teamCardCord2}
							name="Shruhrid Banthia"
							email="shruhrid.banthia@iitgn.ac.in"
							bio="A pre-final year undergraduate student at IIT Gandhinagar."
							website="https://www.linkedin.com/in/shruhrid-banthia-b9aa01203"
							image="/assets/images/team/Shruhrid_Banthia.jpg"
							size="small"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
