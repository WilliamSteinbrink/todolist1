import ToDoDetail from "./ToDoDetail";

const ToDoList = ({ todos, toggleToDo }) => {
    return (
        <div>
            {todos.map(todo => <ToDoDetail key={todo.id} todo={todo} handleToggle={toggleToDo}/>)}
        </div>
    )
}

export default ToDoList;