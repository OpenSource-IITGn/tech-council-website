import styles from "../../styles/Common/Header.module.css";
import ROUTES from "../Constants/routes";

export default function Header() {
  return (
    <div className={styles.root}>
        <h1 className={styles.title}>
          <a href="/Home">
            Tech Council
          </a>
        </h1>
        <div className={styles.navigation}>
          {ROUTES.map((route) => {
              return <div key={route.id}><h2><a className={styles.navs} href={route.path}>{route.name}</a></h2></div>
          })}
        </div>
    </div>
  )
}