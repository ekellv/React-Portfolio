import React from "react";
import profilePic from '../../assets/ProfPic.jpg';

function AboutMe() {
    return(
        <section className="title">
            <div>
                <h1 className="erin">Erin Voelker</h1>`
                <img src={profilePic} className='profile-pic' alt="erin-profile-pic"></img>
                <div className="about-me-paragraph">
                    <p>
                        I'm currently a receiving expert at Target. My responsibilities include accurately counting and auditing vendor orders as well as maintaining brand expectations of a busy backroom space. I consider myself to be very adaptable- no day is ever like the last in receiving, so I've become accustomed to being able to accomodate and accomplish tasks in order of importance despite the order in which they're given to me. It's also given me a well patience for problem solving. 
                    <br></br>
                        I am an aspiring full stack developer currently completing MSU's full stack web developer boot camp.  
                    <br></br>
                        I was born and raised in New Jersey, and have eaten many Taylor Ham, egg and cheese on a hard roll (with salt, pepper and ketchup, of course) for breakfast. My hobbies include reading, video games, and sewing; a hobby I picked up during the ides of 2020.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;