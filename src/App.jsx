import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Home Page</h1>
      <p>This is the Home Page of our React Application.</p>
      <Link to="/courses">
        <button>View Courses</button>
      </Link>
    </div>
  );
}

function Courses() {
  return (
    <div className="container">
      <h1>Our Courses</h1>
      <ul>
        <li>Computer Science</li>
        <li>Artificial Intelligence</li>
        <li>Data Science</li>
        <li>Cyber Security</li>
      </ul>
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </div>
  );
}

function NotFound() {
  return (
    <div className="container">
      <h1>404 - Page Not Found</h1>
      <p>Sorry! The page you are looking for does not exist.</p>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;