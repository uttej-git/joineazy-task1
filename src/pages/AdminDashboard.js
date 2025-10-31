import React, { useState } from 'react';
import AssignmentList from '../components/AssignmentList';
import ProgressBar from '../components/ProgressBar';

function AdminDashboard({ assignments, onAdd }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [due, setDue] = useState("");
  const [drive, setDrive] = useState("");

  const completed = assignments.filter(a => a.status === 'submitted').length;

  const handleAddAssignment = () => {
    if (title && desc && due && drive) {
      onAdd({ id: Date.now(), title, description: desc, dueDate: due, status: "not_submitted", driveLink: drive });
      setTitle("");
      setDesc("");
      setDue("");
      setDrive("");
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <div className="assignment-form">
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        <input value={desc} onChange={e => setDesc(e.target.value)} placeholder="Description" />
        <input value={due} onChange={e => setDue(e.target.value)} type="date" />
        <input value={drive} onChange={e => setDrive(e.target.value)} placeholder="Drive link" />
        <button onClick={handleAddAssignment}>Add Assignment</button>
      </div>

      <ProgressBar completed={completed} total={assignments.length} />
      <AssignmentList assignments={assignments} userRole="admin" />
    </div>
  );
}

export default AdminDashboard;
