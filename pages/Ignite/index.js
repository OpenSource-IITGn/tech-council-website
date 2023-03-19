import Head from "next/head";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Ignite.module.css";
import IGNITE_EVENTS from "../../src/Constants/ignite_events";

const Clubs = () => {
	const [height, setHeight] = useState(null);

	useEffect(() => {
		setHeight(window.innerHeight);
	});

	console.log();

	return (
		<>
			<Head>
				<title>Ignite | Technical Council</title>
				<meta
					name="description"
					content="Page for Ignite tech festival of Indian Institute of Technology Gandhinagar"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.root}>
				<div style={{ height: height }} className={styles.ignite_home}>
					<div className={styles.ignite_logo_div}>
						<img
							className={styles.ignite_logo}
							src="/assets/ignite/ignite-logo.jpg"
						/>
						<h2 className={styles.ignite_text}>IGNITE 8.0</h2>
					</div>
					<div className={styles.ignite_desc}>
						<h2 className={styles.ignite_iitgn_text}>
							IIT GANDHINAGAR
						</h2>
						<hr className={styles.ignite_hr} />
						<h2 className={styles.ignite_dates}>
							13 MARCH - 4 APRIL
						</h2>
					</div>
				</div>
				<div style={{ height: height }} className={styles.mainpage}>
					{/* <h2 className={styles.title}>IGNITE 8.0</h2> */}
					<h3 className={styles.subtitle}>About IGNITE 8.0</h3>
					<p className={styles.desc}>
						Ignite 8.0 is a Science and Technology Fair that aims to
						support and encourage critical thinking,
						problem-solving, and curiosity among school students
						from the disciplines of Science, Technology,
						Engineering, Arts, and Mathematics. The event will be a
						platform to introduce a new generation of engineers,
						scientists, and researchers to the diverse dimensions of
						science and technology. IIT Gandhinagar aspires to
						showcase its in-house technological prowess,
						state-of-the-art infrastructure and research facilities,
						exceptionally talented students, and creative learning
						programs. With a plethora of interactive showcases and
						exhibitions, hands-on training modules, and engaging
						competitions, Ignite is a celebration of technology,
						inspiration, discovery, and innovation.
					</p>
				</div>
				<div>
					<h2 className={styles.title}>Events</h2>
					<div className={styles.clubsOuter}>
						{IGNITE_EVENTS.map((event) => {
							return (
								<div
									className={styles.clubCard}
									key={event.id}
									style={{
										backgroundColor: event.backgroundColor,
									}}
								>
									<div className={styles.bannerOuter}>
										<img
											className={styles.clubBanner}
											src={event.banner}
										/>
									</div>
									<div className={styles.clubInfo}>
										<h2 className={styles.clubName}>
											{event.name}
										</h2>
										<p className={styles.clubDesc}>
											{event.desc}
										</p>
										<div className={styles.venue_outer}>
											<div
												className={
													styles.venue_info_div
												}
											>
												<img
													className={
														styles.venue_icon
													}
													src={
														"assets/ignite/icons8-calendar-100.png"
													}
												/>
												<h2
													className={
														styles.venue_text
													}
												>
													{event.date}
												</h2>
											</div>
											<div
												className={
													styles.venue_info_div
												}
											>
												<img
													className={
														styles.venue_icon
													}
													src={
														"assets/ignite/icons8-place-marker-100.png"
													}
												/>
												<h2
													className={
														styles.venue_text
													}
												>
													{event.venue}
												</h2>
											</div>
											<div
												className={
													styles.venue_info_div
												}
											>
												<img
													className={
														styles.venue_icon
													}
													src={
														"assets/ignite/icons8-clock-100.png"
													}
												/>
												<h2
													className={
														styles.venue_text
													}
												>
													{event.time}
												</h2>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Clubs;
