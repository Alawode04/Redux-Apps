import './ToDo.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/ToDoSlice';

const AddToDo = () => {
   
    const [todoText, setTodoText] = useState("")
    const dispatch = useDispatch();


     //hanlde add todo

     const hanldeAddTodo = () => {
        const todo = {
            id: Date.now(),
            text: todoText,
            completed: false
        }
        dispatch(addTodo(todo))
        setTodoText("")
    }

  return (

    <div>
        <input type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)} />
        <button onClick={hanldeAddTodo}>Add</button>
    </div>
    
  );
};

export default AddToDo;