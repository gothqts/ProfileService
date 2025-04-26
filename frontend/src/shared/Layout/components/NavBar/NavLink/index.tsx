import {ILink} from "navigation/navigation.types.ts";
import {NavLink} from "react-router";

interface IProps {
    link: ILink
}

const NavigationLink = (props: IProps) => {
    return (
        <NavLink to={props.link.path}>
            {props.link.name}
        </NavLink>
    );
};

export default NavigationLink;