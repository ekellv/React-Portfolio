import React from "react";

function Resume() {
    return (
    <section>
        <div>
            <h1 className="resume">Resume</h1>
            <h2>Erin Voelker</h2>
            <p>Aspiring full stack developer seeking new experiences with an eagerness to learn and consistently make progess. Experience in customer service and logistics offers a set of diverse, marketable skills.</p>
            <a href="https://www.linkedin.com/in/erin-voelker-a18272237/"><img src="src\assets\icons8-linkedin-64.png" alt="LinkedIn" class="icon"/></a>
        </div>
        <div>
            <h2>Front End Experience:</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>CSS Frameworks (Bootstrap, Materialize)</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React.js</li>
                <li>Responsive Web Design</li>
            </ul>
            <h2>Back End Experience:</h2>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Templating Frameworks (Handlebars)</li>
                <li>MySQL</li>
                <li>NoSQL</li>
                <li>APIs</li>
            </ul>
        </div>
    </section>
    )
}

export default Resume;