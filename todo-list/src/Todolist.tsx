import { useState } from 'react';
import TodoItem from './TodoItem'; // Assuming TodoItem is in the same directory

function Todolist() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "doctor Appointment",
      completed: true
    },
    {
      id: 2,
      text: "learn Docker with real life examples",
      completed: false
    }
  ]);
  const [text, setText] = useState("");

  function addTask(text: string) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setText('');
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleCompleted(id:number) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    }));
  }

  return (
    <div className="todo-list">
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => addTask(text)}>Add</button>
    </div>
  );
}

export default Todolist;
