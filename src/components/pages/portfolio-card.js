import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// filling in the card using the projects as props 
function PortfolioCards(projects) {
    return (
        <div className='card'>
            <div className='card-image'>
                <img alt={projects.name} src={projects.image}/>
            </div>
            <div className='card-content'>
                <p className="project-title" id="card-title">{projects.project}</p>
                <p>
                <a href={projects.github}><img src='src\assets\icons8-github-64 (1).png' alt="Github Repo" id="project-icon"/></a> 
                <a href={projects.deployment}><img src="src\assets\icons8-website-64.png" alt="Deployed Site" id="project-icon"/></a> 
                </p>
                <p id="skills">
                    ({projects.skills})
                </p>
            </div>
        </div>
    )
}

export default PortfolioCards;