import { createStore } from "redux";
import cartReducer from "../reducer/cartReducers";


export const store = createStore(cartReducer)