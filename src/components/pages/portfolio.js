import React from "react";
import PortfolioCards from "./portfolio-card";
import portfolio from '../../portfolio.json'
import 'bootstrap/dist/css/bootstrap.min.css';

// creating a Wrapper, which will surround the elements displayed and keep them structured nicely
// using the projects' 'children' which are the elements of the .json file as what will be wrapped 
function Wrapper(projects) {
    return <div className="wrapper">{projects.children}</div>
}

function Portfolio() {
    return(
        <section>
            <div className="projects">
                <h1 className="project-title header">Project Portfolio</h1>
                <hr></hr>
            </div>
            
            <Wrapper>
                {portfolio.map((portfolio)=> (
                    <PortfolioCards
                    key={portfolio.id} 
                    image={portfolio.image} 
                    name={portfolio.name} 
                    github={portfolio.github} 
                    deployment={portfolio.deployment} 
                    skills={portfolio.skills} />
                ))}
            </Wrapper>
        </section>
    )
}

export default Portfolio;