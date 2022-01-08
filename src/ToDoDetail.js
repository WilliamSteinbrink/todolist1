const ToDoDetail = ({ todo, handleToggle }) => {
    const handleClick = event => {
        event.preventDefault();
        handleToggle(event.currentTarget.id);
    };

    return (
        <div
            id={todo.id}
            value={todo.id}
            onClick={handleClick}
            className={todo.complete ? "todo strike" : "todo" }
        >
            {todo.id}: {todo.task}
        </div>
    );
}

export default ToDoDetail;