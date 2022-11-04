import React, { useState } from 'react';

const Contact = () => {
    const [isValid, setIsValid] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        validate();
    }

    const validate = () => {
        if(firstname.length <= 0 || lastname.length <=0 || email.length <= 0 || message.length <= 0) {
            setIsError(true)
        }
    }

  return (
    <div className="contact__container">
      <div className="contact__content">
        <h3>Contact Me</h3>
        <p>Hi there, contact me to ask me about anything you have in mind</p>
        <form onSubmit={handleSubmit}>
            <div className="name__container">
                <div className="fisttname__container">
                    <label htmlFor="firstname">First name</label>
                    <input type="text" name="firstname" id="first_name" placeholder='Enter your first name' value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                    {isError && firstname <= 0 ? <p className='error'>Please enter your first name</p> : ''}   
                </div>
                <div className="lastname__container">
                    <label htmlFor="lastname">Last name</label>
                    <input type="text" name="lastname" id="last_name" placeholder='Enter your last name' value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                    {isError && firstname <= 0 ? <p className='error'>Please enter your last name</p> : ''}   
                </div>
            </div>
            <div className="email__container">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='yourname@email.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    {isError && firstname <= 0 ? <p className='error'>Please enter your email</p> : ''}
                    
            </div>
            <div className="message__container">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" placeholder='Send a message and i will reply you as soon as possible'value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            {isError && firstname <= 0 ? <p className='error'>Please enter a message</p> : ''}
            </div>
            <div className="agree__container">
                <input type="checkbox" name="check" id="agree" onClick={() => setIsValid(!isValid)}/>
                <span>You agree to provide your data to Khingz who may contact you</span>
            </div>
            <div className="submit__btn__container">
                <button type="submit" disabled={!isValid}>Send message</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
