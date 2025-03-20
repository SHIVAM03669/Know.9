import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomePage from './components/HomePage';
import TaskForm from './components/TaskForm';
import './App.css';

const API_BASE_URL = 'http://localhost:3000';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch tasks from the backend
  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE_URL}/tasks`);
      setTasks(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching tasks:', err);
      setError('Failed to load tasks.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);



  const addTask = async (task) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/tasks`, task);
      setTasks([response.data, ...tasks]);
    } catch (err) {
      console.error('Error adding task:', err);
      throw err; // Let the TaskForm handle the error
    }
  };


  if (loading) {
    return <div>Loading tasks...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="App">
      <h1>My Task List</h1>
      <TaskForm onTaskCreated={fetchTasks} />
      <HomePage tasks={tasks} refreshTasks={setTasks} />
    </div>
  );
};

export default App;

