import React, { useState } from 'react';

function AssignmentItem({ assignment, userRole, onSubmit, onEdit, onDelete }) {
  const [confirm, setConfirm] = useState(false);

  const handleSubmission = () => setConfirm(true);
  const handleConfirm = () => {
    onSubmit(assignment.id);
    setConfirm(false);
  };
  const handleCancel = () => setConfirm(false);

  const submittedCount = assignment.submissions
    ? Object.values(assignment.submissions).filter(s => s === 'submitted').length
    : 0;
  const totalStudents = assignment.submissions
    ? Object.keys(assignment.submissions).length
    : 0;

  const handleEditClick = () => {
    const newTitle = prompt('Edit Title:', assignment.title);
    if (newTitle === null) return;
    const newDesc = prompt('Edit Description:', assignment.description);
    if (newDesc === null) return;
    const newDue = prompt('Edit Due Date (YYYY-MM-DD):', assignment.dueDate);
    if (newDue === null) return;
    const newDrive = prompt('Edit Drive Link:', assignment.driveLink);
    if (newDrive === null) return;
    onEdit({
      ...assignment,
      title: newTitle,
      description: newDesc,
      dueDate: newDue,
      driveLink: newDrive,
    });
  };

  return (
    <div className="card shadow-sm mb-4" style={{ maxWidth: '600px', minWidth: '350px' }}>
      <div className="card-body">
        <h5 className="card-title">{assignment.title}</h5>
        <p className="card-text">{assignment.description}</p>
        <p className="card-text">
          <small className="text-muted">Due: {assignment.dueDate}</small>
        </p>
        <a href={assignment.driveLink} target="_blank" rel="noopener noreferrer" className="card-link">
          Drive Link
        </a>
        {userRole === 'student' && assignment.status === 'not_submitted' && (
          <button className="btn btn-success ms-3" onClick={handleSubmission}>
            Mark as Submitted
          </button>
        )}
        {userRole === 'student' && (
          <span className="text-success ms-3 fw-semibold">
            Status: {assignment.status === 'submitted' ? 'submitted' : 'not_submitted'}
          </span>
        )}
        {userRole === 'admin' && assignment.submissions && (
          <div className="mt-2">
            {Object.entries(assignment.submissions).map(([student, status]) => (
              <div key={student} style={{ fontSize: '0.98rem' }}>
                <span className="fw-semibold">{student}:</span>{' '}
                <span className={status === 'submitted' ? 'text-success' : 'text-danger'}>
                  {status}
                </span>
              </div>
            ))}
            <span className="text-success ms-3 fw-semibold">
              Status: {submittedCount} submitted / {totalStudents} students
            </span>
            <div className="mt-3">
              <button className="btn btn-warning me-2" onClick={handleEditClick}>Edit</button>
              <button className="btn btn-danger" onClick={() => onDelete(assignment.id)}>Delete</button>
            </div>
          </div>
        )}
      </div>
      {confirm && (
        <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body text-center">
                <p>Are you sure you want to submit?</p>
                <button onClick={handleConfirm} className="btn btn-success me-3">Yes, Confirm</button>
                <button onClick={handleCancel} className="btn btn-danger">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AssignmentItem;
