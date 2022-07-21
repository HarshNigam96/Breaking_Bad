import { combineReducers, createStore } from "redux";
import { rootReducer } from "./rootReducer";

const combinedData = combineReducers({
  GetCharacters: rootReducer,
});
const store = createStore(combinedData);
export { store };
