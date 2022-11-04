import React, { useState, useEffect } from 'react';

const Contact = () => {
    const [isValid, setIsValid] = useState(false);
    const initialState = {
        firstname: '',
        lastname: '',
        email: '',
        message: ''
    }
    const [formValues, setFormValues] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setSubmit] = useState(false);
 
    //handle change
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
    }

    //handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateInput(formValues))
        setSubmit(true);
        setFormValues({...formValues,
            firstname: '',
            lastname: '',
            email: '',
            message: ''
        })
        alert('Submitted successfully, I will get to you ASAP');
    }

    //validate function
    const validateInput = inputs => {
        const error = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; //regex copied!!
        if(!inputs.firstname) {
            error.firstname = 'Please enter your firstname'
        }

        if(!inputs.lastname) {
            error.lastname = 'Please enter your lastname'
        }

        if(!inputs.email) {
            error.email = 'Please enter your email'
        } else if(!regex.test(inputs.email)) {
            error.email = 'Please enter a valid email address'
        }

        if(!inputs.message) {
            error.message = 'Please enter your message'
        }

        return error;
    }

    //use effect to rerender page when there is an error
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

  return (
    <div className="contact__container">
      <div className="contact__content">
        <h3>Contact Me</h3>
        <p>Hi there, contact me to ask me about anything you have in mind</p>
        <form onSubmit={handleSubmit}>
            <div className="name__container">
                <div className="fisttname__container">
                    <label htmlFor="firstname">First name</label>
                    <input type="text" name="firstname" id="first_name" placeholder='Enter your first name' value={formValues.firstname} onChange={handleChange} />
                    <p className="error">{formErrors.firstname}</p>
                </div>
                <div className="lastname__container">
                    <label htmlFor="lastname">Last name</label>
                    <input type="text" name="lastname" id="last_name" placeholder='Enter your last name' value={formValues.lastname} onChange={handleChange} />
                    <p className="error">{formErrors.lastname}</p>
                </div>
            </div>
            <div className="email__container">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='yourname@email.com' value={formValues.email} onChange={handleChange} />
                    <p className="error">{formErrors.email}</p>
            </div>
            <div className="message__container">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" placeholder='Send a message and i will reply you as soon as possible' value={formValues.message} onChange={handleChange}></textarea>
            <p className="error">{formErrors.message}</p>
            </div>
            <div className="agree__container">
                <input type="checkbox" name="check" id="agree" onClick={() => setIsValid(!isValid)}/>
                <span>You agree to provide your data to Khingz who may contact you</span>
            </div>
            <div className="submit__btn__container">
                <button type="submit" id='btn__submit' disabled={!isValid}>Send message</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
