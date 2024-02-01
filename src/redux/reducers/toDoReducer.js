import { ADD_TODO,DELETE_TODO,UPDATE_TODO } from "../actions/actionTypes"; 


const initialState = [] 

// toDoReducer(state, {type:UPDATE_TODO, payload:{update_id:updateId, updated_title:input})
const toDoReducer = (state = initialState,action) => {
    
    switch(action.type){
         case ADD_TODO:  return [...state,action.payload]

         case DELETE_TODO:  return  state.filter(todo => todo.id !== action.payload)

         case UPDATE_TODO:
               let arr = [] 
               for(let t of state){ 
                if(t.id != action.payload.update_id){
                    arr.push(t)
                }
                else if(t.id == action.payload.update_id){
                    arr.push({id:action.payload.update_id,title:action.payload.updated_title})
                }
               }
               return arr

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