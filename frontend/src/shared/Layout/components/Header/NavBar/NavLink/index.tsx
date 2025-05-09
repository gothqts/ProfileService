import {ILink} from "navigation/navigation.types.ts";
import {NavLink} from "react-router";
import styles from './navlink.module.css'


interface IProps {
    link: ILink
}

const NavigationLink = (props: IProps) => {
    return (
        <NavLink to={props.link.path}>
            {({ isActive }) => (
              <div style={{padding: '0px 5px'}} className={isActive ? styles.active : ""}>{props.link.name}</div>
            )}
        </NavLink>
    );
};

export default NavigationLink;