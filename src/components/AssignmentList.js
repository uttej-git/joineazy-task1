import React from 'react';
import AssignmentItem from './AssignmentItem';

function AssignmentList({ assignments, userRole, onSubmit }) {
  return (
    <div className="assignment-list">
      {assignments.map(assignment => (
        <AssignmentItem
          key={assignment.id}
          assignment={assignment}
          userRole={userRole}
          onSubmit={onSubmit}
        />
      ))}
    </div>
  );
}

export default AssignmentList;
