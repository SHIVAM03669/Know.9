// src/components/HomePage.jsx
import React from 'react';
import TaskCard from './TaskCard';
import './HomePage.css'; // Import the corresponding CSS

const HomePage = ({ tasks }) => {
    return (
        <div className="home-page">
            <h2>All Tasks</h2>
            {tasks.length === 0 ? (
                <p>No tasks available. Add a new task!</p>
            ) : (
                <div className="task-list">
                    {tasks.map((task) => (
                        <TaskCard key={task._id} task={task} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default HomePage; 
