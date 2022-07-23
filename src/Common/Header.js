import styles from "../../styles/Common/Header.module.css";
import ROUTES from "../Constants/routes";
import { useRouter } from "next/router";
import Image from "next/image";
// import lal_minar from "../../public/images/logo_lal_minar.png";
import lal_minar from "../../public/media/icons/logo_lal_minar.png";

export default function Header() {
  const router = useRouter();
  return (
    <div className={styles.root}>
      <a href="/" className={styles.logo_link}>
        <div className={styles.logo_class}>
          <Image
            src={lal_minar}
            height="20%"
            width="20%"
            className={styles.lal_minar_logo}
          />
          <h1 className={styles.title}>Tech Council</h1>
        </div>
      </a>
      <div className={styles.navigation}>
        {ROUTES.map((route) => {
          return (
            <div
              key={route.id}
              className={
                router.pathname === route.path
                  ? styles.activeHeaderItem
                  : styles.headerItem
              }
            >
              <h2 className={styles.heading}>
                <a className={styles.navs} href={route.path}>
                  {route.name}
                </a>
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
