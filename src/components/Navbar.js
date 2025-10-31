import React from 'react';

function Navbar({ userRole, onRoleSwitch }) {
  return (
    <nav className="navbar">
      <h2>Joineazy Assignment Dashboard</h2>
      <button onClick={onRoleSwitch}>
        Switch to {userRole === 'student' ? 'Admin' : 'Student'} View
      </button>
    </nav>
  );
}

export default Navbar;
