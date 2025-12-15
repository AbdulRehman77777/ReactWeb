import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

// Child Component (Props Drilling)
const TaskList = ({ tasks, isLoading }) => {
  if (isLoading) return <p>Loading data...</p>;

  return (
    <div className="list-container">
      {tasks.slice(0, 3).map((task) => (
        <div key={task.id} className="list-item">
          <Check size={16} color="#2196f3" />
          <span className="task-text">{task.title}</span>
        </div>
      ))}
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="card dashboard-card">
      <h3>React App</h3>
      <h2>Dashboard</h2>
      <TaskList tasks={data} isLoading={loading} />
    </div>
  );
};

export default Dashboard;