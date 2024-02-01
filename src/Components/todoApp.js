
import React,{useState, useEffect} from "react"; 
import { addTodo, deleteTodo, updateTodo } from "../redux/actions/toDoActions";
import { useSelector,useDispatch } from "react-redux";


// console.log(crypto.randomUUID())


const TodoApp = () => {
   const [input,setInput] = useState("");
   const [updateId,setUpdateId] = useState("")
   const todoArr = useSelector(state => state);
   

   useEffect(
       () => {
         console.log(todoArr);
       },[todoArr]
   )

   const dispatch = useDispatch();

   function addToDoList(e){
      e.preventDefault();

      if(updateId){
           dispatch(updateTodo(updateId, input))
      }
      
      else{
         let obj = {
         id: crypto.randomUUID(),   // random string
         title: input,
         }
         dispatch(addTodo(obj))
      }
      setInput("");
   }


    return(
        <div>
               <h1>{updateId?"Update To-Do": "Add To-Do"}</h1>
               <form className="add-todo" onSubmit={addToDoList}>
                    <input type="text" placeholder={updateId?"Update To-Do": "Add To-Do"}
                     onChange={(e) => setInput(e.target.value)}
                     value={input}
                    />
                    <button type="submit">{updateId?"Update To-Do": "Add To-Do"}</button>
               </form>
               <ul>
                  { todoArr.length > 0 &&
                     todoArr.map(item =>(
                        <li key={item.id}>
                           {item.title}
                           <button 
                           onClick={()=>dispatch(deleteTodo(item.id))}> D </button>

                           <button onClick={()=>{
                              setUpdateId(item.id)
                              setInput(item.title)
                              }}> U </button>
                        </li>
                     ))
                  }
               </ul>
        </div>
    )
}

export default TodoApp;



 // let len = todoArr.length; 
      // let last_element = todoArr[len-1];

      // let id = last_element? last_element.id + 1: 0