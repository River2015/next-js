import styles from '../styles/404.module.scss';

import Footer from '../components/Footer';
import Logo from '../components/Logo';


export default function NotFound() {
    return (
        <div className={styles.wrapper}>
            <Logo/>
            <div className={styles.main}>
                404 not found
            </div>
            <Footer>
                <Logo/>
            </Footer>
        </div>
    )
};
