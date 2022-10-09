import React, { useState } from 'react';
import NavBar from './navbar';
import About from './pages/about-me';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact-me';
import Resume from './pages/resume'

export default function PortfolioContainer() {
const [currentPage, setCurrentPage] = useState('About');


const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact Me') {
      return <Contact />;
    }
    return <Resume />;
};

const handlePageChange = (page) => setCurrentPage(page);

return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}