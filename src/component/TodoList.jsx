import {  useDispatch, useSelector } from "react-redux";
import TodoCard from  './todoCard'
import { deleteTodo, toggleComplete, editTodo } from "../redux/ToDoSlice";
import { useState } from "react";


const todoList = () => {
    const todo = useSelector((state) => state.todo)
    const dispatch = useDispatch();
    const [isEditable, setIsEditable] = useState(false)

   
    // handle todo done
    const handleTodoDone = (todoId) => {
        //get todo element
        const todo = document.getElementById(todoId)
        //toggle todo element class
        todo.classList.toggle("completed")
        dispatch(toggleComplete(todoId))
    }

    //handle todo edit
    const handleTodoEdit = (todoId) => {
        setIsEditable(true);
        //get todo element
        const todo = document.getElementById(todoId);
        //make todo editable
        todo.contentEditable = true;
        todo.focus();
        //add edit class
        dispatch(
            editTodo({
                id: todoId,
                text: todo.innerText,
            })
        )
    }
    const handleDeleteTodo = (todoId) => {
        dispatch(deleteTodo(todoId));
    };

    //handle todo delete
    return <div>
        {todo.map((todo) =>
        <TodoCard 
            key={todo.id}
            todoText={todo.text}
            todoId={todo.id}
            todoDone={() => handleTodoDone(todo.id)}
            todoDelete={() => handleDeleteTodo(todo.id)}
            todoEdit={() => handleTodoEdit(todo.id)}
        />
        )}
    </div>
}

export default todoList