import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Common/Header.module.css";
import lal_minar from "../../public/assets/icons/logo_lal_minar.png";
import menu from "../../public/assets/icons/menu-24.png";
import cross from "../../public/assets/icons/multiply-30.png";
import ROUTES from "../Constants/routes";

const Header = () => {
	const router = useRouter();
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<header className={styles.navbar} id="myTopnav">
			<h1 className={styles.title}>
				<Link href="/">
					<a>
						<Image
							src={lal_minar}
							height="20%"
							width="20%"
							className={styles.lal_minar_logo}
						/>
						Tech Council
					</a>
				</Link>
			</h1>
			<nav className={styles.nav_outer}>
				{!isOpen ? (
					<ul className={styles.navigation}>
						{ROUTES.map((route, id) => {
							return (
								<li
									key={id}
									className={`${
										router.pathname === route.path &&
										styles.active
									} ${styles.headerItem}`}
								>
									<Link href={route.path}>
										<a className={styles.navLinks}>
											{route.name}
										</a>
									</Link>
								</li>
							);
						})}
						<li
							className={styles.bars}
							onClick={() => setIsOpen(true)}
						>
							<a>
								<Image
									src={menu}
									height="20%"
									width="20%"
									className={styles.menu_logo}
								/>
							</a>
						</li>
					</ul>
				) : (
					<ul className={styles.navigation_sm}>
						{ROUTES.map((route, id) => {
							return (
								<li
									key={id}
									className={`${
										router.pathname === route.path &&
										styles.active
									} ${styles.headerItem_sm}`}
								>
									<Link href={route.path}>
										<a
											className={styles.navLinks}
											onClick={() => setIsOpen(false)}
										>
											{route.name}
										</a>
									</Link>
								</li>
							);
						})}
						<li
							className={styles.cross}
							onClick={() => setIsOpen(false)}
						>
							<a>
								<Image
									src={cross}
									height="20%"
									width="20%"
									className={styles.menu_logo}
								/>
							</a>
						</li>
					</ul>
				)}
			</nav>
		</header>
	);
};

function navigation() {
	var x = document.getElementById("myTopnav");
	if (x.className.includes("navbar")) {
		// x.className += " responsive";
	} else {
	}
}

export default Header;
