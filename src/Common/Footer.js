import styles from "../../styles/Common/Footer.module.css";
import FOOTER_LINKS from "../Constants/footer_links";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Footer() {
  const router = useRouter();
  return (
    <div className={styles.root}>
      <div className={styles.tech_council_outer}>
        <h1 className={styles.tech_council_text}>Technical <br/> Council</h1>
        <h3 className={styles.tech_council_quote}>"To create a culture where technology is the solution of every problem."</h3>
      </div>
      <div className={styles.useful_links_outer}>
        <h1 className={styles.section_title}>USEFUL LINKS</h1>
        {FOOTER_LINKS.map((route)=> {
          return (
            <a className={styles.useful_links}>
              <img src={route.icon} width="15%" height="15%" className={styles.icon_style}/>
              <p>{route.name}</p>
            </a>
          )
        })}
      </div> 
      <div className={styles.contact_us_outer}>
        <h1 className={styles.section_title}>CONTACT US</h1>
        <p className={styles.contact_text}>Indian Institute of Technology Gandhinagar Palaj, Gandhinagar, Gujarat, India - 382355</p>
        <p className={styles.contact_text}>Address: 323, Acad Block 4 <br/> Email: technical.secretary@iitgn.ac.in</p>
        <img src="/media/icons/icons8-facebook-48.png" className={styles.social_link} />
        <img src="/media/icons/icons8-instagram-48.png" className={styles.social_link} />
      </div>
      <div className={styles.torque_magazine_outer}>
        <h1 className={styles.section_title}>TORQUE MAGAZINE</h1>
        <p className={styles.torque_text}>Torque is the technical magazine of IIT Gandhinagar. It highlights the works of IITGN community in technical field.</p>
        <img src="/media/icons/icons8-facebook-48.png" className={styles.social_link} />
        <img src="/media/icons/icons8-instagram-48.png" className={styles.social_link} />
      </div>
    </div>
  );
}
