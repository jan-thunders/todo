
import React,{useState, useEffect} from "react"; 
import { addTodo, deleteTodo } from "../redux/actions/toDoActions";
import { useSelector,useDispatch } from "react-redux";


// console.log(crypto.randomUUID())


const TodoApp = () => {
   const [input,setInput] = useState("");
   const todoArr = useSelector(state => state);

   useEffect(
       () => {
         console.log(todoArr);
       },[todoArr]
   )

   const dispatch = useDispatch();

   function addToDoList(e){
      e.preventDefault();
     
      // let len = todoArr.length; 
      // let last_element = todoArr[len-1];

      // let id = last_element? last_element.id + 1: 0


      let obj = {
        id: crypto.randomUUID(), 
        title: input,
      }
      dispatch(addTodo(obj))
      setInput("");
   }


    return(
        <div>
               <form className="add-todo" onSubmit={addToDoList}>
                    <input type="text" placeholder="Add Todo" 
                     onChange={(e) => setInput(e.target.value)}
                     value={input}
                    />
                    <button type="submit">Add Todo</button>
               </form>
               <ul>
                  { todoArr.length > 0 &&
                     todoArr.map(item =>(
                        <li key={item.id}>
                           {item.title}
                           <button onClick={()=>dispatch(deleteTodo(item.id))}> D </button>
                        </li>
                     ))
                  }
               </ul>
        </div>
    )
}

export default TodoApp;