import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const STUDENT_IDS = ["student1", "student2"];

function App() {
  const [userRole, setUserRole] = useState('student');
  const [userId, setUserId] = useState(STUDENT_IDS[0]);

  const [assignments, setAssignments] = useState(() => {
    const saved = localStorage.getItem('assignments');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('assignments', JSON.stringify(assignments));
  }, [assignments]);

  const handleRoleSwitch = () => {
    setUserRole(prev => (prev === 'student' ? 'admin' : 'student'));
  };

  const handleSubmit = (assignmentId) => {
    setAssignments(prev =>
      prev.map(a => a.id === assignmentId
        ? { ...a, submissions: { ...a.submissions, [userId]: 'submitted' } }
        : a
      )
    );
  };

  const handleAddAssignment = (newAssignment) => {
    setAssignments(prev => [...prev, newAssignment]);
  };

  const handleEditAssignment = (updatedAssignment) => {
    setAssignments(prev =>
      prev.map(a => (a.id === updatedAssignment.id ? updatedAssignment : a))
    );
  };

  const handleDeleteAssignment = (id) => {
    setAssignments(prev => prev.filter(a => a.id !== id));
  };

  return (
    <div>
      <Navbar userRole={userRole} onRoleSwitch={handleRoleSwitch} />
      {userRole === 'student' ? (
        <div>
          <div style={{ textAlign: 'right', maxWidth: 900, margin: '0 auto 15px auto' }}>
            <label className="me-2 fw-bold">Switch Student:</label>
            <select value={userId} onChange={e => setUserId(e.target.value)}>
              {STUDENT_IDS.map(id => (
                <option key={id} value={id}>{id}</option>
              ))}
            </select>
          </div>
          <StudentDashboard assignments={assignments} userId={userId} onSubmit={handleSubmit} />
        </div>
      ) : (
        <AdminDashboard
          assignments={assignments}
          onAdd={handleAddAssignment}
          onEdit={handleEditAssignment}
          onDelete={handleDeleteAssignment}
        />
      )}
    </div>
  );
}

export default App;
