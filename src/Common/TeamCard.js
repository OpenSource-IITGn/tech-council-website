import styles from "../../styles/Common/TeamCard.module.css";
import FOOTER_LINKS from "../Constants/footer_links";

export default function TeamCard({ name, email, bio, website, image, size }) {
	if (size === "large") {
		return (
			<div className={styles.root}>
				<img className={styles.image} src={image} alt={name} />
				<div className={styles.info}>
					<h2 className={styles.name}>{name}</h2>
					<p className={styles.text}>{bio}</p>
					<div className={styles.clubSocial}>
						<a className={styles.clubSocialLink} href={website}>
							<img
								className={styles.clubSocialIcon}
								src={"/assets/icons/google-48.png"}
							/>
						</a>
						<a className={styles.clubSocialLink} href={website}>
							<img
								className={styles.clubSocialIcon}
								src={"/assets/icons/icons8-internet-50.png"}
							/>
						</a>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className={styles.root_small}>
				<img className={styles.image_small} src={image} alt={name} />
				<div className={styles.info_small}>
					<h2 className={styles.name}>{name}</h2>
					<p className={styles.text}>{bio}</p>
					<div className={styles.clubSocial}>
						<a className={styles.clubSocialLink} href={website}>
							<img
								className={styles.clubSocialIcon}
								src={"/assets/icons/google-48.png"}
							/>
						</a>
						<a className={styles.clubSocialLink} href={website}>
							<img
								className={styles.clubSocialIcon}
								src={"/assets/icons/icons8-internet-50.png"}
							/>
						</a>
					</div>
				</div>
			</div>
		);
	}
}
