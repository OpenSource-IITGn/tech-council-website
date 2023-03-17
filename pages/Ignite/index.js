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
				<div style={{ height: height }} className={styles.mainpage}>
					<h2 className={styles.title}>IGNITE 9.0</h2>
					<h3 className={styles.subtitle}>
						Indian Institute of Technology Gandhinagar
					</h3>
					<p className={styles.desc}>
						Ignite aims to provide the students with a world class
						technical experience, to inspire and inculcate critical
						thinking among them by enhancing their problem solving
						skills, and promote indigenous self-made technology. The
						motivation behind Ignite is to provide the members of
						IIT Gandhinagar an exposure to cutting-edge technology
						and inspirit the participants with the will and wish to
						replicate and reinvent radical innovation in the college
						itself, at the maximum possible levels. Ignite creates a
						platform for the members to uplift their technical
						quotients by promoting more hands-on skills and
						encourages indigenous self-made technology.
					</p>
				</div>
				<div className={styles.ignitevents}>
					<h2 className={styles.title}>Events</h2>
					<div className={styles.clubsOuter}>
						{IGNITE_EVENTS.map((club) => {
							return (
								<div
									className={styles.clubCard}
									key={club.id}
									style={{
										backgroundColor: club.backgroundColor,
									}}
								>
									<div className={styles.bannerOuter}>
										<img
											className={styles.clubBanner}
											src={club.banner}
										/>
									</div>
									<div className={styles.clubInfo}>
										<h2 className={styles.clubName}>
											{club.name}
										</h2>
										<p className={styles.clubDesc}>
											{club.desc}
										</p>
										<div className={styles.clubSocial}>
											{club.social &&
												club.social.length > 0 &&
												club.social.map((social) => {
													return (
														<a
															className={
																styles.clubSocialLink
															}
															href={social.src}
															key={social.id}
														>
															<img
																className={
																	styles.clubSocialIcon
																}
																src={
																	social.icon
																}
															/>
														</a>
													);
												})}
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
