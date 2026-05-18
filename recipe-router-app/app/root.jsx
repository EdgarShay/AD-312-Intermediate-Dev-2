import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import "./app.css";

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <Meta />
        <Links />
      </head>

      <body>
        <div className="app-container">

          <nav className="navbar">
            <h1 className="logo">Recipe Gallery</h1>

            <div className="nav-links">
              <Link to="/">Home</Link>

              <Link to="/gallery">Gallery</Link>
            </div>
          </nav>

          <main className="main-content">
            {children}
          </main>

        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}