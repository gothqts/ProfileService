import LogoBlock from "shared/Layout/components/Header/LogoBlock";
import styles from './footer.module.css'
import YouTube from 'assets/icons/youtube.svg?react'
import FaceBook from 'assets/icons/facebook.svg?react'
import X from 'assets/icons/X.svg?react'


const Footer = () => {
    return (
        <div className={styles.footer}>
            <LogoBlock/>
            <div>Политика<br/>конфиденциальности</div>
            <div>Соглашение на обработку<br/>персональных данных</div>
            <div className={styles.networks}>
                <YouTube/>
                <FaceBook/>
                <X/>
            </div>
        </div>
    );
};

export default Footer;