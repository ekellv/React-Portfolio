import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function ContactMe() {
    // setting up hooks with useState with empty strings in the hooks as their initial values
    const [contactFormState, setContactFormState] = useState({ name: '', email: '', message: ''});
    const [errorMsg, setErrorMsg] = useState('');
    const { name, email, message } = contactFormState;

    // function to handle change in the contact form
    function handleChange(e) {
        // function to use helpers.js to evaluate whether or not email is valid using a regex
        if (e.target.name === 'email') {
            const isEmail = validateEmail(e.target.value);
                if(!isEmail) {
                    setErrorMsg('Please enter a valid email!');
                } else {
                    // if there is no error message, then keep the initial empty value in the hook 
                    setErrorMsg('');
                }
        } else {
            // if the user doesn't enter a name, then the contact form will not be sent
            if(!e.target.value.length) {
                setErrorMsg(`${e.target.name} is required.`);
            } else {
                // if there is no error message, then keep the initial empty value in the hook 
                setErrorMsg('');
            }
        }
        if (!errorMsg) {
            setContactFormState({...contactFormState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    // the contact form itself
    return (
            <section class="justify-content-center" id="contact-form-div">
            <h1 className="contact">Contact Erin Voelker</h1>
            <hr></hr>
            <form class="justify-content-center" id="contact-form">
            <div>
                <label htmlFor="name">Name:</label>
                <input class="form-control" type="text" name="name"  defaultValue={name} onBlur={handleChange}/>
            </div>
            <div >
                <label htmlFor="email">Email:</label>
                <input class="form-control" type="email"  name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea class="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="7" />
            </div>

            {errorMsg && (
            <div>
                <p className="error-text">{errorMsg}</p>
            </div>
            )}

            <div>
            <button id='button' class="btn btn-outline-dark mt-4" type="submit" onSubmit={handleSubmit}>Submit</button>
            </div>
        </form>
    </section>
    );
}

export default ContactMe;