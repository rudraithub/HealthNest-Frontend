
import NavBar from '../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import styles from './RootLayout.module.css'

function RootLayout() {
  return (
    <div className={styles.App}>
    <NavBar />
    <Outlet />
    </div>
  )
}

export default RootLayout