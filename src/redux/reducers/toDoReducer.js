import { ADD_TODO,DELETE_TODO,UPDATE_TODO } from "../actions/actionTypes"; 


const initialState = [] 

const toDoReducer = (state = initialState,action) => {
    
    switch(action.type){
         case ADD_TODO:  return [...state,action.payload]

         case DELETE_TODO:  return  state.filter(todo => todo.id !== action.payload)

         default: return state;
    }
}

export default toDoReducer;


// todoArr = [
//     {
//         id: 1,
//         title: "todo 1"
//     },
//     {
//         id: 2,
//         title: "todo 2"
//     },
//     {
//         id: 3,
//         title: "todo 3"
//     }
// ]