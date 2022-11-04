import React from 'react';

const Contact = () => {
  return (
    <div className="contact__container">
      <div className="contact__content">
        <h3>Contact Me</h3>
        <p>Hi there, contact me to ask me about anything you have in mind</p>
        <form>
            <div className="name__container">
                <div className="fisttname__container">
                    <label htmlFor="firstname">First name</label>
                    <input type="text" name="firstname" id="first_name" placeholder='Enter your first name'/>
                </div>
                <div className="lastname__container">
                    <label htmlFor="lastname">Last name</label>
                    <input type="text" name="lastname" id="last_name" placeholder='Enter your last name'/>
                </div>
            </div>
            <div className="email__container">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='yourname@email.com'/>
            </div>
            <div className="message__container">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" placeholder='Send a message and i will reply you as soon as possible'></textarea>
            </div>
            <div className="agree__container">
                <input type="checkbox" name="check" id="agree" />
                <span>You agree to provide your data to Khingz who may contact you</span>
            </div>
            <div className="submit__btn__container">
                <button type="submit">Send message</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
