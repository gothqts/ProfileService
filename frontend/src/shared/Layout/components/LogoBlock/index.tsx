import Logo from 'assets/icons/logo.svg?react'
import {CSSProperties} from "react";
import styles from './logoBlock.module.css'

interface IProps {
    style?: CSSProperties
}

const LogoBlock = (props: IProps) => {
    return (
        <div>
            <div style={props.style} className={styles.logoBlock}>
                <Logo/>
                <div>BrainStorm</div>
            </div>
        </div>
    );
};

export default LogoBlock;