import Head from "next/head";
import styles from "../../styles/Clubs.module.css";
import CLUBS from "../../src/Constants/clubs";

const Clubs = () => {
	return (
		<>
			<Head>
				<title>Clubs &amp; Hobby Groups | Technical Council</title>
				<meta
					name="description"
					content="Clubs page of Technical Council, Indian Institute of Technology Gandhinagar"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.root}>
				<h2 className={styles.title}>CLUBS & HOBBY GROUPS</h2>
				<p className={styles.subtitle}>
					The various Technical Clubs along with Tinkerers&apos; Lab
					coordinate together to take initiatives and conduct
					activities round the year to further the technical quotient
					of IITGN and also make a difference to everyone around us.
					Wish to join one? Wish to request a workshop or event? Do
					not hesitate to contact us!
				</p>
				<div className={styles.clubsOuter}>
					{CLUBS.map((club) => {
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
															src={social.icon}
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
		</>
	);
};

export default Clubs;
