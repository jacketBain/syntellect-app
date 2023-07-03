import { IPopupItem } from "./interface";

import "./styles.scss"

const PopupItem = ({ name, fullName, flag, onClick }: IPopupItem) => {

  const handleClick = () => {
    onClick(name);
  };

  return (
    <div className="popup_item_wrapper" onClick={handleClick}>
      <div className="popup_item_wrapper_image_block">
        <img src={flag} alt={"err"} />
      </div>
      <div className="popup_item_wrapper_text_block">
        <p className="popup_item_wrapper_text_block_fullname">
          {fullName}
        </p>
        <p className="popup_item_wrapper_text_block_name">
          {name}
        </p>
      </div>
    </div>
  )
}
export default PopupItem;