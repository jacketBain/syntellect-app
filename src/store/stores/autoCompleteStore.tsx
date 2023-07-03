import { makeAutoObservable } from "mobx"

const autoCompleteStore = () => {
    return makeAutoObservable({
      value: "",
      clear(){
        this.value = ""
      },
      setValue(text:string){
        this.value = text;
      }
    });
  };

export default autoCompleteStore;