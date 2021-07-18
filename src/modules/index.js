import { combineReducers } from "redux";
import counter from "./counter";

//콤바인 리듀서
const rootReducer = combineReducers({ counter });

export default rootReducer;
