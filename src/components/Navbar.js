import React from 'react';

function Navbar({ userRole, onRoleSwitch }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow rounded mb-4">
      <div className="container-fluid">
        <span className="navbar-brand fs-3 fw-bold">Joineazy Assignment Dashboard</span>
        <button onClick={onRoleSwitch} className="btn btn-primary">
          Switch to {userRole === 'student' ? 'Admin' : 'Student'} View
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
