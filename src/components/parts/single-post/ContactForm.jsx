import React from 'react';

const ContactForm = () => {
    return (
        <form className="contact-form" id="comment-form">
            <h2 className="contact-form__title">
                Write a Comment
            </h2>
            <div className="row">
                <div className="col-md-6">
                    <input className="contact-form__input-text" type="text" name="name" id="name" placeholder="Name:" />
                </div>
                <div className="col-md-6">
                    <input className="contact-form__input-text" type="text" name="mail" id="mail" placeholder="Email:" />
                </div>
            </div>
            <textarea className="contact-form__textarea" name="comment" id="comment" placeholder="Comment"></textarea>
            <input className="contact-form__submit" type="submit" name="submit-contact" id="submit_contact" value="Send Comment" />
        </form>
    );
}
 
export default ContactForm;