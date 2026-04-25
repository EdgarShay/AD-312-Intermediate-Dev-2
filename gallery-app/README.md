# React Recipe Gallery & User Profile

Author: Edgar

This project is a React application built with Vite. It includes two main components:
1. A Recipe Gallery with image navigation
2. A User Profile with nested state updates

## Features

### Recipe Gallery
- Displays recipe images
- Navigate using Next and Previous buttons
- Prevents going beyond first and last images (boundary checks)

### User Profile
- Displays user information
- Updates nested address data (street, city, country)
- Uses immutable state updates with the spread operator

### Task Manager
- Add new tasks using user input
- Mark tasks as completed or undo completion
- Delete tasks from the list
- Prevent adding empty tasks (input validation)
- Uses immutable state updates with the spread operator and map function

### Task Manager Test Cases

#### Normal Cases
- Add a new task → task appears in the list
- Add multiple tasks → all tasks display correctly
- Mark task as completed → text shows line-through

#### Edge Cases
- Empty input → task is not added
- Toggle task multiple times → state updates correctly
- Delete task → removed without affecting other tasks


## Concepts Used
- React useState hook
- Event handling
- Conditional rendering
- Nested state updates
- Spread operator for immutability

## Test Cases

### Normal Cases
- Navigate through images
- Update all address fields
- Update individual fields

### Edge Cases
- Prevent navigation beyond limits
- Empty input does not overwrite existing data
- Multiple updates do not break the app

## How to Run

1. Install dependencies:

npm install


2. Start the development server:

npm run dev


3. Open in browser:

http://localhost:5173/


## Project Structure


src/
├── App.jsx
├── Gallery.jsx
├── UserProfile.jsx
├── Gallery.css
├── UserProfile.css
TaskManager.css
TaskManager.jsx

