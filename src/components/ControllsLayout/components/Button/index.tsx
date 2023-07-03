import { IButtonComponent } from "./interface";

import "./styles.scss"

const ButtonComponent = ({ callBack, title }: IButtonComponent) => {
    return (
        <button onClick={callBack} >
            {title}
        </button>
    );
}

export default ButtonComponent;