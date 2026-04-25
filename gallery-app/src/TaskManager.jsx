import { useState } from "react";
import "./TaskManager.css";

export default function TaskManager() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState("");

    const addTask = () => {
        if (!taskInput.trim()) return;

        const newTask = {
            id: Date.now(),
            title: taskInput,
            completed: false,
        };

        setTasks((prev) => [...prev, newTask]);
        setTaskInput("");
    };

    const toggleTaskCompletion = (id) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    return (
        <div className="task-manager">
            <h2>✅ Task Manager</h2>

            <div className="input-section">
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                />
                <button onClick={addTask}>Add</button>
            </div>

            <ul>
                {tasks.length === 0 ? (
                    <p className="empty">No tasks yet</p>
                ) : (
                    tasks.map((task) => (
                        <li key={task.id} className="task-item">
                            <span
                                className={task.completed ? "completed" : ""}
                            >
                                {task.title}
                            </span>

                            <div>
                                <button onClick={() => toggleTaskCompletion(task.id)}>
                                    {task.completed ? "Undo" : "Done"}
                                </button>

                                <button
                                    className="delete"
                                    onClick={() => deleteTask(task.id)}
                                >
                                    ❌
                                </button>
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}