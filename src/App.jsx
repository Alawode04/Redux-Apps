import TodoList from './component/todoList'
import AddToDo from './component/AddToDo'
import './App.css'

function App() {
  
  return (
    <>
      <div>
         <AddToDo />
      </div>

      <div>
        <TodoList/>
      </div>
      
    </>
  )
}

export default App
