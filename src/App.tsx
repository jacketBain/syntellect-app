import React, { useState } from "react";
import "./App.scss";
import ControllsLayout from "./components/ControllsLayout";
import { useStore } from "./store/store";
import { IButton } from "./components/ControllsLayout/interface";
import Autocomplete from "./components/Autocomplete";

function App() {

  const [selectedControllType, setSelectedControllType] = useState("1");
  const [selectedAutoCompliteType, setSelectedAutoCompliteType] = useState("1");

  const { controlStore } = useStore();

  const testButtons: IButton[] =
    [
      {
        title: 'Отчистить',
        position: 'Right',
        callBack: () => { controlStore.clear() }
      },

      {
        title: 'Захеллоувордить',
        position: 'Right',
        callBack: () => { controlStore.setText("Hello world!") }
      }
    ]

  const testButtons1: IButton[] =
    [
      {
        title: 'Число?',
        position: 'Left',
        callBack: () => { (controlStore.value !== ''  && !Number.isNaN(+controlStore.value)) && alert(controlStore.value) }
      },

      {
        title: 'Вывести в alert',
        position: 'Right',
        callBack: () => { alert(controlStore.value.toString()) }
      }
    ]

  return <div className="wrapper">
    <div className="wrapper_controlls">
      <select value={selectedControllType} onChange={(e)=>setSelectedControllType(e.target.value)}>
        <option value="1">Контрол с 2 кнопками справа</option>
        <option value="2">Контрол с 1 кнопкой справа и 1 кнопкой слева</option>
      </select>
      {selectedControllType === "1" && <ControllsLayout buttons={testButtons} />}
      {selectedControllType === "2" && <ControllsLayout buttons={testButtons1} />}
    </div>
    <div className="wrapper_autocomplete">
    <select value={selectedAutoCompliteType} onChange={(e)=>setSelectedAutoCompliteType(e.target.value)}>
        <option value="1">Максимальное кол-во подсказок - 3</option>
        <option value="2">Максимальное кол-во подсказок - 10</option>
      </select>
      {selectedAutoCompliteType === "1" && <Autocomplete count={3}/>}
      {selectedAutoCompliteType === "2" && <Autocomplete count={10}/>}
    </div>

  </div>;
}

export default App;
