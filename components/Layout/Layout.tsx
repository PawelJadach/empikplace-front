import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from './Layout.module.scss';

const Layout: React.FC = (props) => {
  return (
    <div className={styles.container}>
      <Navbar />
        {props.children}
      <Footer />
    </div>
  )
}

export default Layout
