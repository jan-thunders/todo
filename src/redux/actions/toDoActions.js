import { ADD_TODO,DELETE_TODO,UPDATE_TODO } from "./actionTypes";


export const addTodo = (newTodo) => {
     return({
            type: ADD_TODO,
            payload: newTodo
     })
}

export const deleteTodo = (delete_id) => {
    return({
        type: DELETE_TODO,
        payload: delete_id
    })
}

export const updateTodo = (update_id,updated_title ) => {
     return({
            type: UPDATE_TODO, 
            payload : { update_id:update_id, updated_title:updated_title}
     })
}

// todoArray = [
//     {
//         id: 1,
//         title: "First To-Do"
//     },
//     {
//         id: 2,
//         title: "Second To-Do"
//     },
//     {
//         id: 3,
//         title: "Third To-Do"
//     }
// ]