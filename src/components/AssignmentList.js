import React from 'react';
import AssignmentItem from './AssignmentItem';

function AssignmentList({ assignments, userRole, onSubmit, onEdit, onDelete }) {
  return (
    <div className="d-flex flex-column align-items-center gap-4" style={{ minHeight: "60vh", justifyContent: "center" }}>
      {assignments.map(assignment => (
        <AssignmentItem
          key={assignment.id}
          assignment={assignment}
          userRole={userRole}
          onSubmit={onSubmit}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default AssignmentList;
