import Head from 'next/head'
import CoreComponent from '../components/coreComponent'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Core app</title>
        <meta name="description" content="This is an app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CoreComponent />
    </div>
  )
}
