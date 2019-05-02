import React from 'react';
import styled from 'styled-components';

import { Colors, Tones } from '../styles/variables';

const { purple } = Colors;
const { darkPurple } = Tones;

export default () => (
  <div
    className="wrapper"
    id="get-in-touch"
  >
    <div className="padded align--center">
      <h2 role="heading">Get in Touch</h2>
      <p>Simply fill out the handy form below, or email <a href="mailto:info@helianthus-counselling.co.uk">info@helianthus-counselling.co.uk</a>, letting me know a little about the issues you're facing, and I'll get right back to you.</p>
      <Form
        action="../php/contact-form.php"
        method="POST"
        role="form"
      >
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          name="name"
          id="name"
        />
        <label htmlFor="mail">Your email address</label>
        <input
          type="text"
          name="mail"
          id="mail"
          required
        />
        <label htmlFor="message">How can I help you?</label>
        <textarea
          name="message"
          id="message"
          required
        ></textarea>
        <button
          type="submit"
          name="submit"
          className="btn--submit"
        >Send</button>
      </Form>
    </div>
  </div>
)

const Form = styled.form`
@media (min-width: 768px) {
  width:                      60%;
  margin:                     0 auto;
}
input, textarea {
  width:          100%;
  padding:        .5rem;
  border-radius:  .5rem;
  border:         solid 1px #ccc;
  margin-bottom:  1rem;
}
textarea {
  height:   164px;
}
label {
  margin-bottom:  .3rem;
  display:        inline-block;
  font-weight:    700;
}
button {
  padding:                      1rem 2rem;
  background-color:             ${purple};
  color:                        #fff;
  border-radius:                50px;
  font-weight:                  700;
  cursor:                       pointer;
  @media (min-width: 768px) {
    :hover {
      background-color:         ${darkPurple};
    }
  }
`
