import links from 'navigation/app.links.tsx'
import NavigationLink from 'shared/Layout/components/Header/NavBar/NavLink'
import styles from './navbar.module.css'

const NavBar = () => {
    return (
        <div className={styles.links}>
            {links.map((link) => (
                <NavigationLink key={link.path} link={link}/>
            ))}
        </div>
    );
};

export default NavBar;