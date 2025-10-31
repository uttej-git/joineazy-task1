import React, { useState } from 'react';
import { assignments as initialAssignments } from './data/assignments';
import Navbar from './components/Navbar';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

function App() {
  const [userRole, setUserRole] = useState('student');
  const [assignments, setAssignments] = useState(initialAssignments);

  const handleRoleSwitch = () => {
    setUserRole(prev => prev === 'student' ? 'admin' : 'student');
  };

  const handleSubmit = (id) => {
    setAssignments(prev =>
      prev.map(a =>
        a.id === id ? { ...a, status: 'submitted' } : a
      )
    );
  };

  const handleAddAssignment = (newAssignment) => {
    setAssignments(prev => [...prev, newAssignment]);
  };

  return (
    <div>
      <Navbar userRole={userRole} onRoleSwitch={handleRoleSwitch} />
      {userRole === 'student' ? (
        <StudentDashboard assignments={assignments} onSubmit={handleSubmit} />
      ) : (
        <AdminDashboard assignments={assignments} onAdd={handleAddAssignment} />
      )}
    </div>
  );
}

export default App;
