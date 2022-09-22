import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => (
  <div className={styles.nav}>
    <Link href="/core">Load core</Link>
    <Link href="/">Home</Link>
    <Link href="/pro">Load pro</Link>
  </div>
)

export default Nav
