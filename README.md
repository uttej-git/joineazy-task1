Project Overview

    Joineazy Assignment Dashboard is a React web application designed to manage assignments between admins and students.
    Admins can add, edit, and delete assignments, monitor submission statuses from students, and track progress.
    Students can view their assignments, mark them as submitted, and track their submission progress.

    This app supports persistent localStorage saving to keep assignments and submission data saved across browser sessions.
    It features clean UI design using Bootstrap, responsive layouts, and ease of role-switching between admin and students.

Features

    Role-based dashboards (Admin and Student Views)

    Admin can manage assignments and view student submission statuses

    Students can mark assignments as submitted

    Progress bars visualize the submission progress

    Assignments and submission data persist via localStorage

    Responsive UI with modals for confirmation

    Easy switching between student users and roles

Technology Stack

    Frontend: React.js

    Styling:Custom CSS

    Persistent Storage: Browser localStorage

    Components: Modular React components including AdminDashboard, StudentDashboard, AssignmentList, AssignmentItem, ProgressBar, Navbar

Setup Instructions


Clone the repository

    git clone https://github.com/uttej-git/joineazy-task1.git
    cd joineazy-task1.git

Install dependencies

    npm install

Run the development server

    npm start

The app will be served at http://localhost:3000

Build for production


    npm run build

Build files will be available in the build directory

Architecture Overview

    App.js maintains the global assignment state and user role, loading/saving assignments to localStorage. It routes between Student and Admin dashboards based on role.

    AdminDashboard.js provides assignment CRUD operations via input forms, adds assignments to global state, computes and displays progress, and lists all assignments with editing and deletion. Changes propagate up to App.js.

    StudentDashboard.js receives assigned tasks filtered for the current student, displays status, and supports marking assignments as submitted, notifying App.js.

    AssignmentList.js renders the list of assignments using AssignmentItem.js components.

    AssignmentItem.js displays individual assignment details, shows submission statuses, and provides UI controls for submitting, editing, and deleting assignments. It leverages callbacks to update state in App.js.

    ProgressBar.js visually represents the completion percentage, safely handling zero state to avoid NaN errors.

    UI styling uses Bootstrap and custom CSS for responsive design.

Important Design Decisions

    State and localStorage sync is done in App.js to maintain the single source of truth for assignments.

    Passing down event handlers (onAdd, onEdit, onDelete, onSubmit) allows fine-grained control and modular components.

    LocalStorage persistence enables offline usage and data retention without backend.

    Role switch and student ID selection provide a seamless user experience to test different roles.

