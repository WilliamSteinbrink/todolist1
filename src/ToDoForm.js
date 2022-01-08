import {useState} from 'react';

const ToDoForm = ({ addToDo }) => {
    const [task, setTask] = useState("");

    const handleChange = (event) => setTask(event.currentTarget.value);
    const handleSubmit = event => {
        event.preventDefault();
        addToDo(task);
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="Take out the trash..."
                onChange={handleChange}
                value={task}
                type="text"
            />
            <div className="form-text">
                Enter a new ToDo and click Submit.
            </div>
            <button type="submit" className="btn btn-primary mt-3">
                Submit
            </button>
        </form>
    );
}

export default ToDoForm;