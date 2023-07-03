import { createContext, useContext } from "react";
import controlStore from "./stores/controlStore";
import autoCompleteStore from "./stores/autoCompleteStore";

const store = {
    controlStore: controlStore(),
    autoCompleteStore: autoCompleteStore()
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};

export default store;