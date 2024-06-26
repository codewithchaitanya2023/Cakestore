import { createStore } from "redux";
import Cakereducer from "./Cakereducer";
const cakestore = createStore(Cakereducer);
export default cakestore;

//createstore accept reducer  redux ke pass state he
//redux store hold application state
