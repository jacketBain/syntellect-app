import { makeAutoObservable } from "mobx"

const controlStore = () => {
    return makeAutoObservable({
      value: "",
      clear(){
        this.value = ""
      },
      setText(text:string){
        this.value = text;
      }
    });
  };

export default controlStore;