import { useStore } from "../../store/store";
import { observer } from "mobx-react-lite";
import { IButton, IControllsLayout } from "./interface";

import Button from "./components/Button";

import "./styles.scss"

const ControllsLayout = ({ buttons }: IControllsLayout) => {

  const { controlStore } = useStore();

  const mapButtons = (side: string) => {
    return buttons
      .slice()
      .filter((item) => item.position === side)
      .map((button: IButton, index: number) => (
        <Button
          key={index}
          title={button.title}
          callBack={button.callBack}
        />
      ));
  };

  return (
    <div className="controllWrapper">
      {mapButtons("Left")}
      <input value={controlStore.value} onChange={(e) => controlStore.setText(e.target.value)}></input>
      {mapButtons("Right")}
    </div>
  )
}
export default observer(ControllsLayout);