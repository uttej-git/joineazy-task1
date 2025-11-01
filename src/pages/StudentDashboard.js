import React from 'react';
import AssignmentList from '../components/AssignmentList';
import ProgressBar from '../components/ProgressBar';

function StudentDashboard({ assignments, userId, onSubmit }) {
  const completed = assignments.filter(a => a.submissions[userId] === 'submitted').length;
  const filteredAssignments = assignments.map(a => ({
    ...a,
    status: a.submissions[userId] || 'not_submitted',
  }));

  return (
    <div className="container d-flex flex-column align-items-center">
      <h1 className="fw-bold display-5 mb-4">Student Dashboard</h1>
      <div className="w-100" style={{ maxWidth: '900px' }}>
        <ProgressBar completed={completed} total={assignments.length} />
        <AssignmentList assignments={filteredAssignments} userRole="student" onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default StudentDashboard;
