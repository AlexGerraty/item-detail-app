// Import necessary modules and styles
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Define the Navbar component
const Navbar = () => {
  return (
    // Navbar with Bootstrap classes for styling
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        {/* Link to the home page with the site title */}
        <Link className="navbar-brand justify-content-center" to="/"><h1>NBL Grad Challenge</h1></Link>
        {/* Button for collapsing the navbar in smaller screens (optional, currently not functional) */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          {/* Navbar toggler icon can be added here */} 
        </button>
      </div>
    </nav>
  );
};

// Export the Navbar component as the default export
export default Navbar;
