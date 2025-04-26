import {CSSProperties} from "react";

interface IProps {
    style?: CSSProperties;
}

const Loader = (props : IProps) => {
    return (
        <div style={props.style}>
            Загрузка...
        </div>
    );
};

export default Loader;