import React from 'react';
import AssignmentList from '../components/AssignmentList';
import ProgressBar from '../components/ProgressBar';

function StudentDashboard({ assignments, onSubmit }) {
  const completed = assignments.filter(a => a.status === 'submitted').length;
  return (
    <div>
      <h1>Student Dashboard</h1>
      <ProgressBar completed={completed} total={assignments.length} />
      <AssignmentList assignments={assignments} userRole="student" onSubmit={onSubmit} />
    </div>
  );
}

export default StudentDashboard;
