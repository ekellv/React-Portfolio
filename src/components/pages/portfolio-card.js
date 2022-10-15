import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import githubIcon from '../../assets/icons8-github-64 (1).png';
import websiteIcon from '../../assets/icons8-website-64.png';

// filling in the card using the projects as props 
function PortfolioCards(projects) {
    return (
            // <div className='card-container'>
                <div className='card'>
                    <div className='card-image-top'>
                        <img alt={projects.name} src={projects.image}/>
                    </div>
                    <div className='card-body'>
                        <div>
                        <h5 className="card-title mb-3 mt-3">{projects.name}</h5>
                        </div>
                        <p className='card-build'>
                        <a href={projects.github}><img src={githubIcon} alt="Github Repo" id="project-icon"/></a> 
                        <a href={projects.deployment}><img src={websiteIcon} alt="Deployed Site" id="project-icon"/></a> 
                        </p>
                        <p className='card-text' id="skills">💾 {projects.skills} 💾</p>
                    </div>
                </div>
            // </div>
    )
}

export default PortfolioCards;