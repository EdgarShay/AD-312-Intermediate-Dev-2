# Recipe Router App

A modern Recipe Gallery application built using React Router with the Remix framework.

This project demonstrates file-based routing, dynamic routes, client-side navigation, and responsive UI design.

---

Written by: Edgar
# Features

- React Router file-based routing
- Dynamic recipe detail pages
- useParams hook
- Client-side navigation with Link
- Responsive modern UI
- Shared navigation layout
- Error handling for invalid routes

---

# Technologies Used

- React
- React Router (Remix Framework)
- JavaScript
- CSS3
- Vite

---

# Project Structure

app/
│
├── data/
│   └── recipes.js
│
├── routes/
│   ├── _index.jsx
│   ├── gallery.jsx
│   └── recipe.$id.jsx
│
├── app.css
├── root.jsx
└── routes.ts

---

# Pages

## Home Page
Displays a welcome section and navigation.

## Gallery Page
Displays all recipe cards dynamically.

## Recipe Detail Page
Displays recipe information based on the URL parameter.

Example:
- /recipe/1
- /recipe/2

---

# Routing

| Route | Description |
|------|------|
| / | Home Page |
| /gallery | Recipe Gallery |
| /recipe/:id | Dynamic Recipe Details |

---

# Installation

Clone the repository:

git clone YOUR_GITHUB_REPOSITORY_URL

Navigate into the project:

cd recipe-router-app

Install dependencies:

npm install

Run the development server:

npm run dev

Open in browser:

http://localhost:5173

---

# Test Cases

## Normal Cases

1. Navigate from Home to Gallery
2. Open a recipe detail page
3. Return to Gallery using navigation links

## Edge Cases

1. Invalid recipe route displays error message
2. Browser refresh on dynamic route still works
3. Responsive layout works on smaller screens

---

# Learning Objectives

This project demonstrates:

- File-based routing
- Dynamic route parameters
- React Router navigation
- useParams hook
- Responsive frontend development
- Component-based architecture