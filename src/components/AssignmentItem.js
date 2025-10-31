import React, { useState } from 'react';

function AssignmentItem({ assignment, userRole, onSubmit }) {
  const [confirm, setConfirm] = useState(false);

  const handleSubmission = () => setConfirm(true);
  const handleConfirm = () => {
    onSubmit(assignment.id);
    setConfirm(false);
  };
  const handleCancel = () => setConfirm(false);

  return (
    <div className="assignment-item">
      <h3>{assignment.title}</h3>
      <p>{assignment.description}</p>
      <p>Due: {assignment.dueDate}</p>
      <a href={assignment.driveLink} target="_blank" rel="noopener noreferrer">Drive Link</a>
      {userRole === "student" && assignment.status === "not_submitted" && (
        <>
          <button onClick={handleSubmission}>
            Mark as Submitted
          </button>
          {confirm && (
            <div className="modal-bg">
              <div className="modal-box">
                <p>Are you sure you want to submit?</p>
                <button onClick={handleConfirm}>Yes, Confirm</button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            </div>
          )}
        </>
      )}
      {userRole === "student" && assignment.status === "submitted" && (
        <span>Submission Confirmed</span>
      )}
      {userRole === "admin" && (
        <span>Status: {assignment.status}</span>
      )}
    </div>
  );
}

export default AssignmentItem;
