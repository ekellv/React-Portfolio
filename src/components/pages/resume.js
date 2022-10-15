import React from "react";
import linkedInImg from '../../assets/icons8-linkedin-64.png'

function Resume() {
    return (
    <section>
        <div className="container">
            <h1 className="header">Resume</h1>
            <div className="resume-top">
                <h1 className="resume-name pt-3">Erin Voelker</h1>
                <p className="resume-paragraph pb-3">Aspiring full stack developer seeking new experiences with an eagerness to learn and consistently make progess. Experience in customer service and logistics offers a set of diverse, marketable skills.</p>
        </div>
                <a href="https://www.linkedin.com/in/erin-voelker-a18272237/"><img src={linkedInImg} alt="LinkedIn" class="icon"/></a>
        </div>
        <div className="resume-experience">
            <div className="container">
                <div className="experience-li">
                    <h2 className="experience-h3 mt-3 pt-3 pb-2">Front End Experience:</h2>
                    <ul className="list-unstyled fe-experience-list pb-2">
                        <li className="div-list">🖱️ HTML 🖱️</li>
                        <li className="div-list">🖱️ CSS 🖱️</li>
                        <li className="div-list">🖱️ CSS Frameworks (Bootstrap, Materialize) 🖱️</li>
                        <li className="div-list">🖱️ JavaScript 🖱️</li>
                        <li className="div-list">🖱️ jQuery 🖱️</li>
                        <li className="div-list">🖱️ React.js 🖱️</li>
                        <li className="div-list">🖱️ Responsive Web Design 🖱️</li>
                    </ul>
                </div>
                <div className="experience-li">
                    <h2 className="experience-h3 mt-3 pt-3 pb-2">Back End Experience:</h2>
                    <ul className="list-unstyled be-experience-list">
                        <li className="div-list">💻 Node.js 💻</li>
                        <li className="div-list">💻 Express.js 💻</li>
                        <li className="div-list">💻Templating Frameworks (Handlebars) 💻</li>
                        <li className="div-list">💻 MySQL 💻</li>
                        <li className="div-list">💻 NoSQL 💻</li>
                        <li className="div-list">💻 APIs 💻</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Resume;