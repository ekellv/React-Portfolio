import React from "react";


function NavBar({ currentPage, handlePageChange }) {
  return (
    <div className="container">
    <ul className="navbar mt-3 px-5 list-unstyled">
      <li className="nav-item px-2 py-2">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // This is a conditional (ternary) operator that checks to see if the current page is "About"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Erin
        </a>
      </li>
      <li className="nav-item px-2 py-2">
        <a
          href="#contact"
          onClick={() => handlePageChange('contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact Erin
        </a>
      </li>
      <li className="nav-item px-2 py-2">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('portfolio')}
          // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item px-2 py-2">
        <a
          href="#resume"
          onClick={() => handlePageChange('resume')}
          // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
    </div>
  );
}

export default NavBar;