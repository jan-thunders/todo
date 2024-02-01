import { createStore } from "redux";
import toDoReducer from "./reducers/toDoReducer";

const store = createStore(toDoReducer);

export default store;

// dispatch(updateTodo(updateId, input)

// toDoReducer(state, {type:UPDATE_TODO, payload:{update_id:updateId, updated_title:input})