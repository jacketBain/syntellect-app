import { useEffect } from "react";
import { useDebounce } from "../../../../utils/hooks/useDebounce";
import { IHelpPopup } from "./interface";
import "./styles.scss"
import { IPopupItem } from "../PopupItem/interface";
import PopupItem from "../PopupItem";

const HelpPopup = ({items}:IHelpPopup) => {

    return(
        <div className="popup_wrapper">
            {items}
        </div>
    )
}

export default HelpPopup;