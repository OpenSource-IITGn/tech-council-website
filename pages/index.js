import Head from "next/head";
import styles from "../styles/Home.module.css";
import ABOUT from "../src/Constants/about";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TeamCard from "../src/Common/TeamCard";

const Home = () => {
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
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	const events = [{}, {}, {}, {}];
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
								<div
									className={styles.card}
									key={about.id}
									style={{
										backgroundColor: about.backgroundColor,
									}}
								>
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
				<div className={styles.events}>
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
							centerMode={true}
						>
							{events.map((event) => {
								return (
									<div className={styles.eventCard}>
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
				</div>
				<div className={styles.team}>
					<h2 className={styles.title}>Faculty Advisor</h2>
					<TeamCard
						name="Prof. Utsav Mannu"
						email="technical.secretary@iitgn.ac.in"
						bio="Associate professor department of computer science and engineering."
						website="https://www.iitgn.ac.in/faculty/aniket-rajnish"
						image="/assets/images/team/Shivam_Chaudhary.jpg"
						size="large"
					/>
					<hr className={styles.hrWhite} />
					<h2 className={styles.title}>Secretary and Coordinators</h2>
					<div className={styles.teamGrid}>
						<TeamCard
							name="Prof. Aniket Rajnish"
							email="technical.secretary@iitgn.ac.in"
							bio="Associate professor department of computer science and engineering."
							website="https://www.iitgn.ac.in/faculty/aniket-rajnish"
							image="/assets/images/team/Shivam_Chaudhary.jpg"
							size="small"
						/>
						<TeamCard
							name="Prof. Aniket Rajnish"
							email="technical.secretary@iitgn.ac.in"
							bio="Associate professor department of computer science and engineering."
							website="https://www.iitgn.ac.in/faculty/aniket-rajnish"
							image="/assets/images/team/Shivam_Chaudhary.jpg"
							size="large"
						/>
						<TeamCard
							name="Prof. Aniket Rajnish"
							email="technical.secretary@iitgn.ac.in"
							bio="Associate professor department of computer science and engineering."
							website="https://www.iitgn.ac.in/faculty/aniket-rajnish"
							image="/assets/images/team/Shivam_Chaudhary.jpg"
							size="small"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
