import React, { useState } from 'react';
import NavBar from './navbar';
import About from './pages/about-me';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact-me';
import Resume from './pages/resume'

function PortfolioContainer() {

  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
        switch(currentPage) {
        case "about": 
        return <About></About>
        case "contact": 
        return <Contact></Contact>
        case "portfolio":
        return  <Portfolio></Portfolio>
        case "resume": 
        return <Resume></Resume>
        default:
          return <About></About>
      }
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

export default PortfolioContainer;