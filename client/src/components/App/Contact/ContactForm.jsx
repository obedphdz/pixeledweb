import { useState } from 'react';
import styled from 'styled-components';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
    margin-right: 12rem;
    margin-top: 3rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 95%;
    font-size: 2rem;
    padding: 1.2rem;
    color: black;
    background-color: hsl(330,12%,97%);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: rgb(169, 183, 239); 
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: .6rem 9rem;
    margin-top: 2rem;
    margin-bottom: 1.9rem;
    border-radius: 8px;
    cursor: pointer;
  }
  button:hover {
    background-color: hsl(234, 52%, 58%); 
    color: white;
}
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <>
      <FormStyle>
        <div className="form-group">
          <label htmlFor="name">
            Tu Nombre
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Tu Correo
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Tu Mensaje
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Send</button>
      </FormStyle>
    </>
  );
}
