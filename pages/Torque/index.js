import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Torque() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Torque Magazine | Technical Council</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Torque</h2>
    </div>
  )
}