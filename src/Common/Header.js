import styles from "../../styles/Common/Header.module.css";
import ROUTES from "../Constants/routes";
import {useRouter} from 'next/router';

export default function Header() {
  const router = useRouter();
  return (
    <div className={styles.root}>
        <h1 className={styles.title}>
          <a href="/">
            Tech Council
          </a>
        </h1>
        <div className={styles.navigation}>
          {ROUTES.map((route) => {
              return (
                <div key={route.id} className={router.pathname === route.path ? styles.activeHeaderItem : styles.headerItem}>
                  <h2 className={styles.heading}>
                    <a className={styles.navs} href={route.path}>
                      {route.name}
                    </a>
                  </h2>
                </div>
            )
          })}
        </div>
    </div>
  )
}