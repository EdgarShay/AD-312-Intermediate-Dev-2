import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import "./styles/app.css";

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />

        <title>Tech Blog Remix</title>
      </head>

      <body>
        <div className="app-container">

          <nav className="navbar">
            <h1 className="logo">Tech Blog App</h1>

            <div className="nav-links">
              <Link to="/">Home</Link>

              <Link to="/about">About</Link>
            </div>
          </nav>

          <main className="main-content">
            <Outlet />
          </main>

        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}