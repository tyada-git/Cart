import { createStore } from "redux";
import { counterReducer } from "./reducer/counteReducer";

export const store = createStore(counterReducer);
