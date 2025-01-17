import Head from 'next/head'
import ProComponent from '../components/proComponent'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pro</title>
        <meta name="description" content="This is an app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProComponent />
    </div>
  )
}
