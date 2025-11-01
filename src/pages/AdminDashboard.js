import React, { useState } from 'react';
import AssignmentList from '../components/AssignmentList';
import ProgressBar from '../components/ProgressBar';

function AdminDashboard({ assignments, onAdd, onEdit, onDelete }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [due, setDue] = useState("");
  const [drive, setDrive] = useState("");
  const [error, setError] = useState("");

  const completedCount = assignments.reduce((acc, a) => {
    const totalSubmissions = Object.keys(a.submissions || {}).length || 1;
    const submittedCount = Object.values(a.submissions || {}).filter(s => s === 'submitted').length;
    return acc + submittedCount / totalSubmissions;
  }, 0);
  const progress = assignments.length > 0 ? completedCount / assignments.length : 0;

  const handleAddAssignment = () => {
    if (title.trim() && desc.trim() && due.trim() && drive.trim()) {
      const newAssignment = {
        id: Date.now(),
        title,
        description: desc,
        dueDate: due,
        driveLink: drive,
        submissions: {},
      };
      onAdd(newAssignment);
      setTitle("");
      setDesc("");
      setDue("");
      setDrive("");
      setError("");
    } else {
      setError("Please fill in all fields.");
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center">
      <h1 className="fw-bold display-5 mb-4">Admin Dashboard</h1>
      <div className="row g-2 mb-3 w-100" style={{ maxWidth: '1100px' }}>
        <div className="col">
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="form-control" />
        </div>
        <div className="col">
          <input value={desc} onChange={e => setDesc(e.target.value)} placeholder="Description" className="form-control" />
        </div>
        <div className="col">
          <input value={due} onChange={e => setDue(e.target.value)} type="date" className="form-control" />
        </div>
        <div className="col">
          <input value={drive} onChange={e => setDrive(e.target.value)} placeholder="Drive link" className="form-control" />
        </div>
        <div className="col-auto">
          <button onClick={handleAddAssignment} className="btn btn-primary">Add Assignment</button>
        </div>
      </div>
      {error && <div className="alert alert-danger w-100" style={{ maxWidth: '900px' }}>{error}</div>}
      <div className="w-100" style={{ maxWidth: '900px' }}>
        <ProgressBar completed={progress * assignments.length} total={assignments.length} />
        <AssignmentList assignments={assignments} userRole="admin" onEdit={onEdit} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default AdminDashboard;
