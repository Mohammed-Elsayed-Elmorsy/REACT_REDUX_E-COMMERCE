import { createStore } from "redux";
import { CartReducer } from './reducer/CartReducer'
export const Store = createStore(CartReducer)