import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Common/Header.module.css";
import lal_minar from "../../public/media/icons/logo_lal_minar.png";
import ROUTES from "../Constants/routes";

const Header = () => {
  const router = useRouter();
  return (
    <header className={styles.navbar}>
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
      <nav>
        <ul className={styles.navigation}>
          {ROUTES.map((route, id) => {
            return (
              <li
                key={id}
                className={`${
                  router.pathname === route.path && styles.active
                } ${styles.headerItem}`}
              >
                <Link href={route.path}>
                  <a className={styles.navLinks}>{route.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
