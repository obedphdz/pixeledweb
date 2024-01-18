import { useState, useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

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
		font-size: 1.8rem;
		padding: 1.2rem;
		color: black;
		background-color: hsl(330, 12%, 97%);
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
		background-color: #e62657;
		color: var(--black);
		font-size: 1.8rem;
		display: inline-block;
		outline: none;
		border: none;
		text-align: center;
		align-items: center;
		padding: 0.6rem 9rem;
		margin-top: 2rem;
		margin-bottom: 1.9rem;
		border-radius: 8px;
		cursor: pointer;
	}
	button:hover {
		background-color: #280028;
		color: white;
	}
	@media only screen and (max-width: 428px) {
		.form-group {
		  margin-right: 0;
		  text-align: center;
		}

		label {
			font-size: 20px;
		}

		input,
		textarea {
		  width: 86%;
		  font-size: 12px;
		}
	
		button[type='submit'] {
		  padding: 0.6rem 8rem;
		  font-size: 12px;
		  margin-left: 4rem;
		}
	  }
	
	  @media only screen and (max-width: 390px) {
		.form-group {
		  margin-right: 0;
		  text-align: center;
		}

		label {
			font-size: 17px;
		}
	
		input,
		textarea {
		  width: 85%;
		  font-size: 7px;
		}
	
		button[type='submit'] {
			padding: 0.6rem 8rem;
			font-size: 12px;
			margin-left: 4rem;
		}
	  }
	
	  @media only screen and (max-width: 375px) {
		.form-group {
		  margin-right: 0;
		  text-align: center;
		}

		label {
			font-size: 16px;
		}
	
		input,
		textarea {
		  width: 85%;
		  font-size: 7px;
		}
	
		button[type='submit'] {
		  padding: 0.6rem 8rem;
		  font-size: 12px
		  margin-left: 3rem;
		}
	  }
`;

export default function ContactForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_9ui6izm',
				'template_b083m9i',
				form.current,
				'eKBs90-2q7DgmebRG'
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log('message sent');
					setName('');
					setEmail('');
					setMessage('');
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<FormStyle ref={form} onSubmit={sendEmail}>
			<div className='form-group'>
				<label htmlFor='name'>
					Nombre Completo:
					<input
						type='text'
						id='user_name'
						name='user_name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
			</div>
			<div className='form-group'>
				<label htmlFor='email'>
					Correo electrónico:
					<input
						type='email'
						id='user_email'
						name='user_email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
			</div>
			<div className='form-group'>
				<label htmlFor='message'>
					Tu Mensaje:
					<textarea
						type='text'
						id='message'
						name='message'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</label>
			</div>
			<button type='submit'>Enviar</button>
		</FormStyle>
	);
}
