import { IHelpPopup } from "./interface";

import "./styles.scss"

const HelpPopup = ({items}:IHelpPopup) => {
    return(
        <div className="popup_wrapper">
            {items}
        </div>
    )
}

export default HelpPopup;