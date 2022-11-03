import React from 'react';

const Contact = () => {
  return (
    <div className="contact__container">
      <h3>Contact Me</h3>
      <p>Hi there, contact me to ask me about anything you have in mind</p>
      <form>
        <div className="fisttname__container">
          <label htmlFor="firstname">Firstname</label>
          <input type="text" name="firstname" id="first_name" />
        </div>
        <div className="lastname__container">
          <label htmlFor="lastname">Lastname</label>
          <input type="text" name="lastname" id="last_name" />
        </div>
        <div className="message__container">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message"></textarea>
        </div>
        <div className="agree__container">
            <input type="checkbox" name="check" id="agree" />
            <span>You agree to provide your data to Khingz who may contact you</span>
        </div>
        <div className="submit__btn__container">
            <button type="submit">Send mesaage</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
