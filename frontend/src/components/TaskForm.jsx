// src/components/TaskForm.jsx
// You need to write the code for TaskForm component in the TaskForm.jsx file.

import { useState } from "react";

export default function TaskForm() {
    const [task, setTask] = useState({
        title: "",
        description: "",
        dueDate: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!task.title || !task.description || !task.dueDate) {
            alert("All fields are required");
            return;
        }
        try {
            const response = await fetch("http://localhost:3000/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(task),
            });
            if (response.ok) {
                alert("Task added successfully");
                setTask({ title: "", description: "", dueDate: "" });
            } else {
                alert("Failed to add task");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <div>
                <label>Title:</label>
                <input type="text" name="title" value={task.title} onChange={handleChange} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea name="description" value={task.description} onChange={handleChange} required />
            </div>
            <div>
                <label>Due Date:</label>
                <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
            </div>
            <button type="submit">Add Task</button>
        </form>
    );
}
