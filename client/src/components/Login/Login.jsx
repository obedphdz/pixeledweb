/* Login.jsx */
/* eslint-disable no-unused-vars */
import './Login.css';
import { useEffect, useState, Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';

import video from '../../assets/img/imgPixeled/videoImp2.mp4';
import logo from '../../assets/img/imgPixeled/logoblack.svg';

/* Imported Icons */
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { MdOutlineLogin } from 'react-icons/md';

// Tailwind Modal Components
import { Dialog, Transition } from '@headlessui/react';

const Login = () => {
	// Reproduce video
	useEffect(() => {
		const handleVideoEnded = () => {
			video.currentTime = 0;
			video.play();
		};

		const video = document.getElementById('my-video');
		video.addEventListener('ended', handleVideoEnded);
		video.muted = true;
		video.play();

		return () => {
			video.removeEventListener('ended', handleVideoEnded);
		};
	}, []);

	/* Login validation */

	const [values, setValues] = useState({
		email: '',
		password: '',
	});

	const navigate = useNavigate();

	const [errors, setErrors] = useState({});

	const handleInput = (event) => {
		setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
		console.log('Valores actualizados:', values);
	};

	const showIncorrectPasswordModal = () => {
		// Create the modal content
		const modalContent = (
			<div className='incorrectPasswordModal'>
				<h2>Datos Incorrectos</h2>
				<p>Verifique su correo electrónico y contraseña, e intente de nuevo.</p>
				<button onClick={() => closeModal()}>Cerrar</button>
			</div>
		);

		// Append the modal content to the body
		const modal = document.createElement('div');
		modal.className = 'modal';
		modal.appendChild(modalContent);
		document.body.appendChild(modal);

		// Add event listener to close the modal on click
		const closeModal = () => {
			modal.parentNode.removeChild(modal);
		};
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const { email, pass } = values;
		console.log('Valores enviados:', values);

		// Realizar la autenticación
		axios
			.post(`http://localhost:8000/login`, { email, pass })
			.then((res) => {
				if (res.data.status === 'Success') {
					// Obtener el tipo de usuario
					const userType = res.data.userType;
					const userId = res.data.userId;
					// Redireccionar al usuario
					if (userType === 'Empleado-Administracion-Jefe') {
						navigate('/ad', { state: userId});
					} else if (userType === 'Empleado-Diseño-Jefe') {
						navigate('/jd', { userId: res.data.userId });
					} else if (userType === 'Diseñador') {
						navigate('/di', { userId: res.data.userId });
					} else if (userType === 'Ventas') {
						navigate('/ven', { userId: res.data.userId });
					} else if (userType === 'Impresion') {
						navigate('/im', { userId: res.data.userId });
					} else if (userType === 'Taller-Jefe') {
						navigate('/jt', { userId: res.data.userId });
					} else if (userType === 'Taller') {
						navigate('/t', { userId: res.data.userId });
					}
				} else {
					showIncorrectPasswordModal();
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className='loginPage flexH'>
			<div className='container flexH'>
				<div className='videoDiv'>
					<video src={video} id='my-video' className='myVideo'></video>

					<div className='textDivLogin'>
						<h2 className='title'>Crea y vende productos extraordinarios.</h2>
						<p>Transforma tus conceptos en realidades extraordinarias. ¡Descubre el poder de la impresión con Pixeled!</p>
					</div>

					<div className='footerDiv flexH'>
						<span className='text'>¿Aún no tienes una cuenta?</span>
						<Link to='/register'>
							<button className='btnSignUp'>Registrarse</button>
						</Link>
					</div>
				</div>

				<div className='formDivLogin flexH'>
					<div className='headerDiv'>
						<Link to='/'>
							<img src={logo} alt='' />
						</Link>
						<h3>Bienvenido.</h3>
					</div>

					<form
						action='post'
						onSubmit={handleSubmit}
						className='formLogin gridH'
					>
						{(errors.email && (
							<span className='loginStatus'>{errors.email}</span>
						)) ||
							(errors.password && (
								<span className='loginStatus'>{errors.password}</span>
							)) ||
							(errors.cuenta && (
								<span className='loginStatus'>{errors.cuenta}</span>
							))}

						<div className='inputDiv'>
							<label htmlFor='email' className='label'>
								Correo Electrónico
							</label>
							<div className='input flexH'>
								<FaUserShield className='icon' />
								<input
									type='email'
									onChange={handleInput}
									id='email'
									placeholder='alguien@pixeled.com'
									name='email'
									required
								/>
							</div>
						</div>

						<div className='inputDiv'>
							<label htmlFor='password' className='label'>
								Contraseña
							</label>
							<div className='input flexH'>
								<BsFillShieldLockFill className='icon' />
								<input
									type='password'
									id='pass'
									placeholder='Contraseña'
									onChange={handleInput}
									onKeyUp={(e) => {
										e.preventDefault();
										setValues((prev) => ({
											...prev,
											[e.target.name]: e.target.value,
										}));
									}}
									name='pass'
									autoComplete='current-password'
									required
								/>
							</div>
						</div>

						<button type='submit' className='btn flexH'>
							<span>Iniciar Sesión</span>
							<MdOutlineLogin className='icon' />
						</button>
						<span className='forgotPassword'>
							¿Olvidaste tu contraseña?{' '}
							<a href='' className='clickHere'>
								Click Aquí
							</a>
						</span>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
