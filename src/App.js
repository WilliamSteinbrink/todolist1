import { useState } from 'react';
import Header from './Header';
import ToDoList from './ToDoList';
import defaultToDos from './defaultToDos.json';
import ToDoForm from './ToDoForm'


function App() {
  const [todos, setTodos] = useState(defaultToDos);

  const addToDo = task =>
    setTodos([
      ...todos,
      {id: todos.length + 1, task: task, complete: false}
    ]);

    const toggleToDo = id =>
      setTodos(
        todos.map(todo => {
          return todo.id === Number(id)
          ? { ...todo, complete: !todo.complete }
          : { ...todo };
        })
      );

  return (
    <div className="container">
      <Header />
      <ToDoList todos={todos} toggleToDo={toggleToDo}/>
      <ToDoForm addToDo={addToDo}/>
    </div>
  );
}

export default App;
