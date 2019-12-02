import React, { Component } from "react";
import "../styles/Contact.scss";
import Nav from "./Nav";

class Contact extends Component {
  render() {
    return (
      <div className="pages">
        <Nav />
        <div className="contact-container">
          <div className="contact-center">
            <div className="feedback">
              <h2>Get In Touch</h2>
              <p>
                Feel free to leave me a message, my inbox is always open. I'll
                try my best to answer your email!
              </p>
            </div>

            <div className="contact-form">
              <form
                action="https://formspree.io/fxmcontact@gmail.com"
                method="POST"
                autoComplete="off"
              >
                <input type="hidden" name="_subject" />
                <input type="hidden" name="_next" value="/thanks.html" />
                <label className="label">Name</label>
                <input
                  className="name input"
                  type="text"
                  name="name"
                  required
                />
                <label className="label">Email</label>
                <input
                  className="email input"
                  type="email"
                  name="_replyto"
                  required
                />
                <label className="label">Message</label>
                <textarea
                  className="message input"
                  type="text"
                  name="message"
                ></textarea>
                <input className="submit" type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
