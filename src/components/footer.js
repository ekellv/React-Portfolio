import React from "react";
import githubIcon from '../assets/icons8-github-64 (1).png';
import linkedInIcon from '../assets/icons8-linkedin-64.png';
import stackoverflowIcon from '../assets/icons8-stack-overflow-64.png';

function footer() {
    return (
        <footer className="fixed-bottom">
        <div className="container">
            <div className="row" id="footer">
                    <div className="col">
                    <a href="https://github.com/ekellv"><img src={githubIcon} alt="Github" id="prof-pic-icon"/></a>
                    </div>
                    <div className="col">
                    <a href="https://www.linkedin.com/in/erin-voelker-a18272237/"><img src={linkedInIcon} alt="LinkedIn" id="icon"/></a>
                    </div>
                    <div className="col">
                    <a href="https://stackoverflow.com/users/18763324/erin-voelker"><img src={stackoverflowIcon} alt="Stack Overflow" id="icon"/></a>
                </div>
            </div>
        </div>
        </footer>
    )
}

export default footer;